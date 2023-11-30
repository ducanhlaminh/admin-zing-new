import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/news/services/user.service";
import { ToastrCommonService } from "src/app/shared/service/toastr.service";

interface account {
    email: string;
    password: string;
}
interface dataLoginResp {
    message: string;
    status: boolean;
    token: string;
}

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    formAccount!: FormGroup;
    showPassword: boolean = false;
    passwordType = "password";
    loading: boolean = false;
    constructor(
        private FormBuilder: FormBuilder,
        private userService: UserService,
        private ToastrCommonService: ToastrCommonService,
        private Router: Router
    ) {}
    ngOnInit(): void {
        this.formAccount = this.FormBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required],
        });
    }
    login() {
        if (this.formAccount.valid) {
            this.loading = true;
            this.userService
                .login(this.formAccount.value)
                .subscribe(async (res: dataLoginResp) => {
                    if (res.status) {
                        localStorage.setItem("token", res.token);
                        this.userService.getDataInforUser();
                        this.Router.navigateByUrl(`admin`);
                    }

                    this.ToastrCommonService.showToart(res.status, res.message);
                    this.loading = false;
                });
        } else {
            this.ToastrCommonService.showToart(
                false,
                "Vui lòng nhập hợp lệ các trường"
            );
        }
    }
    toggleShowPassword() {
        this.showPassword = !this.showPassword;
        if (this.showPassword) {
            this.passwordType = "text";
        } else {
            this.passwordType = "password";
        }
    }
}
