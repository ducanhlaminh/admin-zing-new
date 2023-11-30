import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "src/app/shared/layout/layout.module";
import { NewsRoutingModule } from "./news-routing.module";
import { BoxesHotArticelsSubCateComponent } from "./components/common/boxes-hot-articels-sub-cate/boxes-hot-articels-sub-cate.component";
import { EditorModule, TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { CreatePostContentComponent } from "./components/contents/admin/create-post-content/create-post-content.component";
import { ArticleComponent } from "./components/common/article/article.component";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ManageArticlesComponent } from "./components/contents/admin/manage-articles/manage-articles.component";
import { DatePipe } from "src/app/shared/pipe/date.pipe";
import { DateVNPipe } from "src/app/shared/pipe/date-vn.pipe";
import { ManageCategoriesComponent } from "./components/contents/admin/manage-categories/manage-categories.component";
import { ImageCropperModule } from "ngx-image-cropper";
import { DialogCropComponent } from "./components/contents/admin/dialogs/dialog-crop/dialog-crop.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";
import { DialogOverviewComponent } from "./components/contents/admin/dialogs/dialog-overview/dialog-overview.component";
import { PreviewContentComponent } from "./components/contents/admin/preview-content/preview-content.component";
import { NgxLoadingModule } from "ngx-loading";
import { MatBadgeModule } from "@angular/material/badge";
import { FormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { EditArticleComponent } from "./components/contents/admin/edit-article/edit-article.component";
import { ManageUserComponent } from "./components/contents/admin/manage-user/manage-user.component";
import { CreateUserComponent } from "./components/contents/admin/create-user/create-user.component";
import { ManagePositionCategoriesComponent } from "./components/contents/admin/dialogs/manage-position-categories/manage-position-categories.component";
import { ManagePositionHomeComponent } from "./components/contents/admin/manage-position-home/manage-position-home.component";
import { DialogCreateCategoryComponent } from "./components/contents/admin/dialogs/dialog-create-category/dialog-create-category.component";
import { EditUserComponent } from "./components/contents/admin/edit-user/edit-user.component";
import { ProfileComponent } from "./components/contents/admin/profile/profile.component";
@NgModule({
    declarations: [
        DatePipe,
        DateVNPipe,
        BoxesHotArticelsSubCateComponent,
        CreatePostContentComponent,
        ArticleComponent,
        ManageArticlesComponent,
        ManageCategoriesComponent,
        DialogCropComponent,
        DialogOverviewComponent,
        PreviewContentComponent,
        EditArticleComponent,
        ManageUserComponent,
        CreateUserComponent,
        ManagePositionCategoriesComponent,
        ManagePositionHomeComponent,
        DialogCreateCategoryComponent,
        EditUserComponent,
        ProfileComponent,
    ],
    imports: [
        MatNativeDateModule,
        MatDatepickerModule,
        MatExpansionModule,
        FormsModule,
        MatSliderModule,
        ImageCropperModule,
        CommonModule,
        MatBadgeModule,
        NewsRoutingModule,
        LayoutModule,
        EditorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        NgxLoadingModule.forRoot({}),
    ],
    providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: "tinymce/tinymce.min.js" },
    ],
})
export class NewsModule {}
