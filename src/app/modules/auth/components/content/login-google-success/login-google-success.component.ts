import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { UserService } from "src/app/modules/news/services/user.service";
@Component({
    selector: "app-login-google-success",
    templateUrl: "./login-google-success.component.html",
    styleUrls: ["./login-google-success.component.scss"],
})
export class LoginGoogleSuccessComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private AuthService: AuthService,
        private router: Router,
        private UserService: UserService
    ) {}
    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            const code = params["code"];
            this.AuthService.getTokenGG(code).subscribe((data: any) => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("role_id", data.role_id);
                    setTimeout(() => {
                        this.UserService.getDataInforUser();
                        this.router.navigateByUrl("admin");
                    }, 500);
                } else {
                    this.router.navigateByUrl("/trang-chu");
                }
            });
        });
    }
}
