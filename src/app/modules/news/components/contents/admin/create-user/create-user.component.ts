import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/modules/news/services/user.service";

@Component({
    selector: "app-create-user",
    templateUrl: "./create-user.component.html",
    styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent {
    formUser!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private UserService: UserService
    ) {
        this.formUser = this.formBuilder.group({
            email: ["", Validators.required],
            role_id: [1, Validators.required],
        });
    }
    submitCreate() {
        if (this.formUser.valid) {
            console.log(this.formUser.value);

            this.UserService.createUser(this.formUser.value).subscribe();
        }
    }
}
