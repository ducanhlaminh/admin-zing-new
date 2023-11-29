import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CategoryService } from "src/app/modules/news/services/category.service";
import { NewsService } from "src/app/modules/news/services/news.service";
import { Validators, FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
    selector: "app-dialog-create-category",
    templateUrl: "./dialog-create-category.component.html",
    styleUrls: ["./dialog-create-category.component.scss"],
})
export class DialogCreateCategoryComponent {
    formGroup: any;
    optionCategories: any;
    loading = false;
    categories: any = [];
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private CategoryService: CategoryService,
        private NewService: NewsService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private dialogRef: MatDialogRef<DialogCreateCategoryComponent>
    ) {
        this.formGroup = this.formBuilder.group({
            name: ["", Validators.required],
            slug: ["", Validators.required],
            parent_id: ["0"],
        });
    }

    ngOnInit(): void {
        // this.getOptionCategories();
        this.CategoryService.categoriesForAd$.subscribe((res) => {
            res.categories.map((category: any) => {
                if (!category.parent_id) {
                    this.categories.push(category);
                }
            });
        });
    }
    showToart(status: boolean, title: string = "", detail = "") {
        if (status) {
            this.toastr.success(title, detail);
        } else {
            this.toastr.error(title, detail);
        }
    }
    submitForm() {
        this.loading = true;
        this.CategoryService.createCategory(this.formGroup.value).subscribe(
            (data: any) => {
                this.loading = false;
                this.dialogRef.close();
                this.showToart(true, data.message);
            }
        );
    }
    onChangeCate(e: any) {
        this.formGroup.patchValue({ categoryId: e.value });
    }
    // getOptionCategories() {
    //       this.CategoryService.getAllCategoriesByAd();
    // }
}
