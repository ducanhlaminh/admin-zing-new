import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/modules/news/services/user.service";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
    formUser!: FormGroup;
    inforUser: any;
    block = true;
    constructor(
        private formBuilder: FormBuilder,
        private UserService: UserService,
        private activatedRoute: ActivatedRoute
    ) {
        this.formUser = this.formBuilder.group({
            name: ["", Validators.required],
            email: ["", Validators.required],
            role_id: [{ value: "", disabled: true }, Validators.required],
            avatar: ["", Validators.required],
            nickname: ["", Validators.required],
        });
    }
    ngOnInit(): void {
        this.UserService.inforUser$.subscribe((data) => {
            this.UserService.getDetail(data.user.id).subscribe((data: any) => {
                this.formUser.patchValue({
                    name: data.user.name,
                    email: data.user.email,
                    role_id: data.user.role_id,
                    avatar: data.user.avatar,
                    nickname: data.user.userName,
                });
                console.log(this.formUser.value);
            });
        });
    }
    submitCreate() {
        if (this.formUser.valid) {
            console.log(this.formUser.value);

            this.UserService.createUser(this.formUser.value).subscribe();
        }
    }
}
