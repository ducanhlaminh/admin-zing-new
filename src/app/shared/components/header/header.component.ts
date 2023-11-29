import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CategoryService } from "../../../modules/news/services/category.service";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/news/services/user.service";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogCategoriesComponent } from "../dialog-categories/dialog-categories.component";
import { filter } from "rxjs";
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
    faMagnifyingGlass = faMagnifyingGlass;
    faEllipsis = faEllipsis;
    faUser = faUser;
    showInput = false;
    searchControl: FormControl = new FormControl();
    stateShowFullCates: boolean = false;
    inforUser: any;
    @ViewChild("searchBtn") searchBtn: any;
    @ViewChild("input") input: any;
    categories: any;

    constructor(
        public CategoryService: CategoryService,
        private Router: Router,
        public UserService: UserService,
        public dialog: MatDialog
    ) {}
    ngOnInit(): void {
        this.CategoryService.getAllCategories();
        this.UserService.inforUser$.subscribe((data) => {
            this.inforUser = data;
        });
        this.CategoryService.categories$.subscribe((data) => {
            this.categories = data;
        });
    }
    showFullCate() {
        this.stateShowFullCates = true;
        const dialogRef = this.dialog.open(DialogCategoriesComponent, {
            maxWidth: "100vw",
            maxHeight: "100vh",
            width: "100%",
            backdropClass: "backdrop123",
            hasBackdrop: true,
            position: { top: "54px" },
            data: {
                categories: this.categories,
            },
        });
        dialogRef.afterClosed().subscribe(() => {
            this.stateShowFullCates = false;
        });
    }
    toogleInput() {
        this.input.nativeElement.style.display = "block";
        if (this.input.nativeElement.style.display === "block") {
            this.input.nativeElement.focus();
            if (this.searchControl.value) {
                this.Router.navigate(["tim-kiem"], {
                    queryParams: { title: this.searchControl.value },
                });
            }
        }
    }
    blurInput() {
        this.input.nativeElement.style.display = "none";
    }
    clickLogo() {
        this.Router.navigateByUrl("/trang-chu");
    }
    signIn() {
        location.assign("http://localhost:4000/api/v1/auth/google");
    }
    signOut() {
        localStorage.removeItem("token");
        window.location.reload();
    }
    navigateToAdmin() {
        this.Router.navigateByUrl("/admin/bai-viet/tao-bai-viet");
    }
}
