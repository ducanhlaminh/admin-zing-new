import { Component, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { CategoryService } from "src/app/modules/news/services/category.service";
import { NewsService } from "src/app/modules/news/services/news.service";
@Component({
    selector: "app-dialog",
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatDialogModule],
    templateUrl: "./dialog.component.html",
    styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private CategoryService: CategoryService,
        private NewService: NewsService
    ) {
        (this.lengthOver =
            data?.articles?.length > 3 && data.articles.length - 3),
            data?.categories?.length > 3 && data.categories.length - 3;
    }
    lengthOver: any = null;
    deleteCategory(cate: any) {
        let listCategories: any = [];
        cate.categories.map((item: any) => listCategories.push(item.id));
        this.CategoryService.deleteCategory(listCategories).subscribe(
            (res: any) => {
                this.data.msg = res.message;
            }
        );
    }
    deleteArticle(data: any) {
        let listArticles: any = [];
        data.articles.map((item: any) => listArticles.push(item.id));

        this.NewService.deleteArticle(listArticles).subscribe((data: any) => {
            this.data.msg = data.message;
        });
    }
}
