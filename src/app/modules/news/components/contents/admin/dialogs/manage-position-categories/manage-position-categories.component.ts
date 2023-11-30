import { moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {
    faMagnifyingGlass,
    faUser,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryService } from "src/app/modules/news/services/category.service";
@Component({
    selector: "app-manage-position-categories",
    templateUrl: "./manage-position-categories.component.html",
    styleUrls: ["./manage-position-categories.component.scss"],
})
export class ManagePositionCategoriesComponent implements OnInit {
    faMagnifyingGlass = faMagnifyingGlass;
    faEllipsis = faEllipsis;
    faUser = faUser;
    categories: any = { selected: [], pending: [] };
    constructor(
        private categoryService: CategoryService,
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    ngOnInit(): void {
        this.categoryService.categoriesForAd$.subscribe((data: any) => {
            this.categories.pending = data?.categories.filter(
                (cate: any) => !cate.position && !cate.parent_id
            );
            this.categories.selected = data?.categories.filter(
                (cate: any) => cate.position
            );
        });
    }
    drop(event: any) {
        if (event.previousContainer === event.container) {
            moveItemInArray(
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
    updatePosition() {
        this.categories.selected.map((category: any, index: any) => {
            category.position = index + 1;
        });
        this.categoryService
            .updatePosition(this.categories.selected)
            .subscribe();
    }
}
