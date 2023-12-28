import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
    faCircleMinus,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NewsService } from "src/app/modules/news/services/news.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CategoryService } from "src/app/modules/news/services/category.service";
import { MatDialog } from "@angular/material/dialog";
import { configRole } from "src/environments/environment.development";
import { UserService } from "src/app/modules/news/services/user.service";
import { DialogComponent } from "../dialogs/dialog/dialog.component";
import { Category, Article } from "src/app/modules/news/interfaces/news";
import { ToastrCommonService } from "src/app/shared/service/toastr.service";
@Component({
    selector: "app-manage-articles",
    templateUrl: "./manage-articles.component.html",
    styleUrls: ["./manage-articles.component.scss"],
})
export class ManageArticlesComponent implements OnInit {
    @ViewChild("checkAll") checkAll!: ElementRef;
    configRole = configRole;
    faXmarkCircle = faCircleMinus;
    faMagnifyingGlass = faMagnifyingGlass;

    formFilter!: FormGroup;
    formEdit!: FormGroup;
    coloumnForm!: FormGroup;
    articles: Article[] = [];
    optionCategories: Category[] = [];
    selectedStatus: number = 1; // add css to button filter
    selectedAction: string = "1";
    listArticles: any[] = [];
    selectName: any;
    inforUser: any;
    configUser: any;
    showConfig: boolean = false;
    coloumns: any = {};
    showAction: boolean = false;
    isChangeEditQuick: boolean = false;

    dateArray: any[] = [];

    length = 100;
    pageSize = 12;
    pageIndex = 0;
    loading = false;
    user: any[] = [];
    actionSelected: any = "1";

    order: any = [];
    queries: any = {};
    statusOptions = [
        {
            name: "Xuất bản",
            status: 1,
        },
        {
            name: "Chờ xử lý",
            status: 2,
        },
        { name: "Bản nháp", status: 0 },
    ];
    constructor(
        private NewService: NewsService,
        private CategoryService: CategoryService,
        private formBuilder: FormBuilder,
        public dialog: MatDialog,
        private toastr: ToastrCommonService,
        private UserService: UserService
    ) {}
    ngOnInit(): void {
        if (this.order.length > 0) {
            this.queries.order = this.order;
        }
        this.queries.page = this.pageIndex + 1;
        this.CategoryService.getAllCategoriesByAd({});
        this.getOptionCategories();
        this.formFilter = this.formBuilder.group({
            title: "",
            category_id: "",
            status: "",
            publishAt: "",
            created_user_id: "",
        });
        this.UserService.getAll().subscribe(
            (data: any) => (this.user = data.rows)
        );
        this.UserService.inforUser$.subscribe((data) => {
            if (data.token) {
                this.inforUser = data.user;
                this.configUser = this.configRole.find(
                    (role: any) => role?.role_id === this.inforUser?.role_id
                );
                Object?.keys(this.configUser?.coloumns).map(
                    (key) => (this.coloumns[key] = true)
                );
                this.coloumnForm = this.formBuilder.group({
                    ...this.coloumns,
                    rows: this.pageSize,
                });
                this.getArticles();
            }
        });
        this.getDateCur();
    }
    changeFilter(value: number) {
        this.pageIndex = 0;
        if (value === 1) {
            this.formFilter.patchValue({
                status: null,
            });
            this.selectedStatus = 1;
        } else if (value === 2) {
            this.formFilter.patchValue({
                status: 1,
            });
            this.selectedStatus = 2;
        } else if (value === 3) {
            this.formFilter.patchValue({
                status: 2,
            });
            this.selectedStatus = 3;
        } else {
            this.formFilter.patchValue({
                status: 0,
            });
            this.selectedStatus = 4;
        }
        this.getArticles();
    }
    saveConfig() {
        this.pageSize = this.coloumnForm.value.rows;
        this.coloumns = this.coloumnForm.value;
        this.getArticles();
    }
    changeSelected() {
        this.showAction = true;
        this.listArticles = [];
        this.articles.map((article: any) => {
            if (article.selected === true) {
                this.listArticles.push(article);
            }
        });
    }
    checkShowColoumns(type: string) {
        return this.configUser.coloumns.some(
            (coloumn: any) => coloumn === type
        );
    }
    getArticles() {
        this.queries.page = this.pageIndex + 1;
        if (this.formFilter.value.publishAt) {
            this.formFilter.value.publishAt = JSON.parse(
                this.formFilter.value.publishAt
            );
        }
        console.log(this.formFilter.value);

        for (var key in this.formFilter.value) {
            if (
                this.formFilter.value[key] === "" ||
                this.formFilter.value[key] === null
            ) {
                delete this.formFilter.value[key];
            }
        }
        console.log(this.formFilter.value);
        this.NewService.getAllByAd({
            ...this.queries,
            ...this.formFilter.value,
            limit: this.coloumnForm.value.rows,
        }).subscribe((data: any) => {
            this.articles = data.rows;
            this.articles.map((article: any) => {
                article.selected = false;
                article.edit = false;
            });
            this.length = data.count;
        });
    }
    checkAllFn(event: any): void {
        this.showAction = true;
        this.listArticles = [];
        this.articles.map((article: any) => {
            article.selected = event.target.checked;
            this.listArticles.push(article);
        });
    }
    search() {
        this.pageIndex = 0;
        this.getArticles();
    }
    actionFn(value: any) {
        console.log(value);

        this.pageIndex = 0;
        if (value === "2") {
            this.showDialogComfirm({
                articles: this.listArticles,
                type: 1,
            });
        } else if (value === "3" || value === "4") {
            this.loading = true;
            const listIdArticles = this.listArticles.map(
                (article: Article) => article.id
            );
            let status = 1;
            if (value === "4") {
                status = 0;
            }
            this.NewService.updateArticle({ status }, listIdArticles).subscribe(
                (data: any) => {
                    this.getArticles();
                    this.toastr.showToart(true, data.message);
                    this.loading = false;
                    this.listArticles = [];
                    this.checkAll.nativeElement.checked = false;
                }
            );
        }
        this.showAction = false;
    }
    deleteItem(item: any) {
        this.showDialogComfirm({ articles: [item], type: 1 });
    }
    getOptionCategories() {
        this.CategoryService.categoriesForAd$.subscribe((data) => {
            this.optionCategories = data?.categories;
        });
    }
    updateArticles(item: any) {
        this.loading = true;
        let listArticles: any[] = [];
        listArticles.push(item.id);
        this.NewService.updateArticle(null, listArticles).subscribe(
            (data: any) => {
                this.getArticles();
                this.getArticles(), this.toastr.showToart(true, data.message);
                this.loading = false;
            }
        );
    }
    handlePageEvent(e: any) {
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
        if (this.order.length > 0)
            this.queries.order = JSON.stringify(this.order);
        this.queries.page = this.pageIndex + 1;
        this.getArticles();
    }

    showDialogComfirm(data: any) {
        const dialogRef = this.dialog.open(DialogComponent, {
            data,
        });
        dialogRef.afterClosed().subscribe(() => {
            console.log(data);

            data.msg && this.toastr.showToart(true, data.msg);
            this.listArticles = [];
            this.getArticles();
            this.checkAll.nativeElement.checked = false;
        });
    }
    close(id: number) {
        this.articles.map((article: any) => {
            if ((id = article.id)) {
                article.edit = false;
            }
        });
    }
    open(item: any) {
        this.articles.map((article: any) => {
            article.edit = false;
        });
        item.edit = true;
        let category;

        if (item.new_articles_categories.length === 1) {
            category = item.new_articles_categories[0].category.id;
        }
        item.new_articles_categories.map((item: any) => {
            if (item.category.parent_id !== null) {
                category = item.category.id;
            }
        });
        this.formEdit = this.formBuilder.group({
            title: item.title,
            category_id: category,
            status: item.status,
            slug: item.slug,
        });
        this.formEdit.valueChanges.subscribe((formValues: any) => {
            // Xử lý sự kiện change tại đây
            this.isChangeEditQuick = true;
        });
    }
    submitUpdate(id: number) {
        this.loading = true;
        this.NewService.updateArticle(this.formEdit.value, id).subscribe(
            (data: any) => {
                this.getArticles(), this.toastr.showToart(true, data.message);
                this.loading = false;
                this.isChangeEditQuick = false;
            }
        );
    }
    viewDetail(item: any) {
        window.open(
            `http://localhost:4200/bai-viet/${item.slug}/${item.slug_crc}`,
            "_blank"
        );
    }

    getDateCur() {
        const currentDate = new Date();
        // Tạo mảng chứa ngày đầu và cuối của tháng cho 5 tháng quanh tháng hiện tại
        for (let i = 0; i < 5; i++) {
            const currentMonth = currentDate.getMonth() - i;
            const currentYear = currentDate.getFullYear();

            const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
            const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

            this.dateArray.push({
                title: `Tháng ${currentMonth + 1}`,
                data: [
                    this.formatDate(firstDayOfMonth),
                    this.formatDate(lastDayOfMonth),
                ],
            });
        }
    }
    formatDate(date: any) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
}
