import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { CategoryService } from "src/app/modules/news/services/category.service";
import { NewsService } from "src/app/modules/news/services/news.service";
import {
    faEllipsisVertical,
    faCaretDown,
    faCaretUp,
    faXmark,
    faEdit,
    faCircleInfo,
    faSort,
} from "@fortawesome/free-solid-svg-icons";
import { UserService } from "src/app/modules/news/services/user.service";
import { EditUserComponent } from "../dialogs/edit-user/edit-user.component";
@Component({
    templateUrl: "./manage-user.component.html",
    styleUrls: ["./manage-user.component.scss"],
})
export class ManageUserComponent {
    @ViewChild("checkAll") checkAll!: ElementRef;

    faEllipsisVertical = faEllipsisVertical;
    faCaretDown = faCaretDown;
    faCaretUp = faCaretUp;
    faXmark = faXmark;
    faEdit = faEdit;
    faCircleInfo = faCircleInfo;
    faSort = faSort;

    formFilter!: FormGroup;
    formEdit!: FormGroup;
    users: any = [];
    selectQuickEdit: any;
    optionCategories: any = [];
    updateHotCate: any = true;
    filters: any;
    selectedStatus = 1;
    selectedAction: string = "1";
    listUsers: any[] = [];

    length = 100;
    pageSize = 10;
    pageIndex = 0;
    loading = false;

    order: any = [];
    queries: any = {};

    constructor(
        private NewService: NewsService,
        private CategoryService: CategoryService,
        private formBuilder: FormBuilder,
        public dialog: MatDialog,
        private toastr: ToastrService,
        private UserService: UserService
    ) {}
    ngOnInit(): void {
        if (this.order.length > 0) this.queries.order = this.order;
        this.queries.page = this.pageIndex + 1;
        this.CategoryService.getAllCategoriesByAd({});
        this.formFilter = this.formBuilder.group({
            name: "",
            role_id: "",
        });
        this.getUser();
    }
    showEdit(data: any) {
        const dialogRef = this.dialog.open(EditUserComponent, {
            data,
        });
        dialogRef.afterClosed().subscribe(() => {
            this.getUser();
        });
    }
    changeSelected() {
        console.log(this.users);

        this.listUsers = [];
        this.users.map((article: any) => {
            if (article.selected === true) {
                this.listUsers.push(article.id);
            }
        });
        console.log(this.listUsers);
    }
    showToart(status: boolean, title: string = "", detail = "") {
        if (status) {
            this.toastr.success(title, detail);
        } else {
            this.toastr.error(title, detail);
        }
    }
    getUser() {
        this.pageIndex = 0;
        this.queries.page = this.pageIndex + 1;
        for (var key in this.formFilter.value) {
            if (
                this.formFilter.value[key] === null ||
                this.formFilter.value[key] === ""
            ) {
                delete this.formFilter.value[key];
            }
        }

        this.UserService.getAll({
            ...this.queries,
            ...this.formFilter.value,
        }).subscribe((data: any) => {
            this.users = data.rows;
            this.users.map((user: any) => {
                user.selected = false;
            });
            this.length = data.count;
        });
    }
    checkAllFn(event: any): void {
        this.listUsers = [];
        this.users.map((article: any) => {
            article.selected = event.target.checked;
            this.listUsers.push(article.id);
        });
    }
    actionFn(value: any) {
        this.loading = true;

        if (value === "2") {
            console.log(this.listUsers);

            this.UserService.deleteUser(this.listUsers).subscribe(
                (data: any) => {
                    this.getUser();
                    //   this.showToart(true, data.message);
                    //   this.loading = false;
                }
            );
        }
    }
    deleteItem(item: any) {
        this.loading = true;
        let listUsers = [];
        listUsers.push(item.id);
        this.UserService.deleteUser(listUsers).subscribe((data: any) => {
            this.getUser();
            this.showToart(true, data.message);
            this.loading = false;
        });
    }

    updateArticles(item: any) {
        this.loading = true;
        let listUsers: any[] = [];
        listUsers.push(item.id);
        this.NewService.updateArticle(null, listUsers).subscribe(
            (data: any) => {
                this.getUser();
                this.getUser(), this.showToart(true, data.message);
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
        this.NewService.getAllByAd({ ...this.queries }).subscribe(
            (data: any) => {
                this.users = data.rows;
                this.length = data.count;
            }
        );
    }

    close() {
        this.users.map((article: any) => {
            if ((this.selectQuickEdit = article.id)) {
                article.edit = false;
            }
        });
    }

    submitUpdate() {
        this.loading = true;
        this.NewService.updateArticle(
            this.formEdit.value,
            this.selectQuickEdit
        ).subscribe((data: any) => {
            this.getUser();
            this.getUser(), this.showToart(true, data.message);
            this.loading = false;
        });
    }
    viewDetail(item: any) {
        window.open(
            `http://localhost:4200/bai-viet/${item.slug}/${item.slug_crc}`,
            "_blank"
        );
    }
}
