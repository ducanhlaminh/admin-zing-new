import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckRoleGuard } from "src/app/Guards/check-role.guard";
import { CreatePostContentComponent } from "./components/contents/admin/create-post-content/create-post-content.component";
import { LayoutMainComponent } from "src/app/shared/layout/page/layout-main/layout-main.component";
import { LayoutDetailComponent } from "src/app/shared/layout/page/layout-detail/layout-detail.component";
import { LayoutAdminComponent } from "src/app/shared/layout/page/layout-admin/layout-admin.component";
import { ManageArticlesComponent } from "./components/contents/admin/manage-articles/manage-articles.component";
import { ManageCategoriesComponent } from "./components/contents/admin/manage-categories/manage-categories.component";
import { EditArticleComponent } from "./components/contents/admin/edit-article/edit-article.component";
import { ManageUserComponent } from "./components/contents/admin/manage-user/manage-user.component";
import { CreateUserComponent } from "./components/contents/admin/create-user/create-user.component";
import { ManagePositionCategoriesComponent } from "./components/contents/admin/dialogs/manage-position-categories/manage-position-categories.component";
import { ManagePositionHomeComponent } from "./components/contents/admin/manage-position-home/manage-position-home.component";
import { EditUserComponent } from "./components/contents/admin/edit-user/edit-user.component";
import { ProfileComponent } from "./components/contents/admin/profile/profile.component";
const routes: Routes = [
    {
        path: "admin",
        component: LayoutAdminComponent,
        canActivate: [CheckRoleGuard],
        children: [
            {
                path: "",
                redirectTo: "bai-viet/quan-ly-bai-viet",
                pathMatch: "full",
            },
            {
                path: "nguoi-dung",
                redirectTo: "nguoi-dung/quan-ly-nguoi-dung",
                pathMatch: "full",
            },
            {
                path: "nguoi-dung",
                children: [
                    {
                        path: "quan-ly-nguoi-dung",
                        component: ManageUserComponent,
                    },
                    {
                        path: "profile",
                        component: ProfileComponent,
                    },
                    {
                        path: "tao-nguoi-dung",
                        component: CreateUserComponent,
                    },
                ],
            },
            {
                path: "quan-ly-vi-tri-bai-viet/:slug-cate",
                component: ManagePositionHomeComponent,
            },

            {
                path: "bai-viet",
                redirectTo: "bai-viet/quan-ly-bai-viet",
                pathMatch: "full",
            },
            {
                path: "bai-viet",
                children: [
                    {
                        path: "tao-bai-viet",
                        component: CreatePostContentComponent,
                    },
                    {
                        path: "chinh-sua-bai-viet/:slug/:slug_crc",
                        component: EditArticleComponent,
                    },
                    {
                        path: "quan-ly-bai-viet",
                        component: ManageArticlesComponent,
                    },
                    {
                        path: "quan-ly-danh-muc",
                        component: ManageCategoriesComponent,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule {}
