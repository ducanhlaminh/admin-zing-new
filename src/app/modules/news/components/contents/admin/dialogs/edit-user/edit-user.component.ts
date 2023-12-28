import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/modules/news/services/user.service";

@Component({
    selector: "app-edit-user",
    templateUrl: "./edit-user.component.html",
    styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
    formUser!: FormGroup;
    isChangeEdit: boolean = false;
    userId: number = 0;
    constructor(
        private formBuilder: FormBuilder,
        private UserService: UserService,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    ngOnInit(): void {
        console.log(this.data);

        this.formUser = this.formBuilder.group({
            name: [this.data.name, Validators.required],
            email: [this.data.email, Validators.required],
            role_id: [this.data.Role.id, Validators.required],
            avatar: [this.data.avatar, Validators.required],
            userName: [this.data.userName, Validators.required],
        });
        this.formUser.valueChanges.subscribe((formValues: any) => {
            // Xử lý sự kiện change tại đây
            this.isChangeEdit = true;
        });
    }
    submit() {
        console.log(this.formUser.value);

        if (this.formUser.valid) {
            this.UserService.update(
                this.formUser.value,
                this.userId
            ).subscribe();
        }
    }
}
