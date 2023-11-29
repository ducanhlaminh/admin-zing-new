import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/modules/news/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  formUser!: FormGroup;
  userId: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.formUser = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      role_id: [1, Validators.required],
      avatar: ['', Validators.required],
      userName: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['id'];

      this.UserService.getDetail(this.userId).subscribe((data: any) => {
        this.formUser.patchValue({
          name: data.user.name,
          email: data.user.email,
          role_id: data.user.role_id,
          avatar: data.user.avatar,
          userName: data.user.userName,
        });
        console.log(this.formUser.value);
      });
    });
  }
  submit() {
    console.log(this.formUser.value);

    if (this.formUser.valid) {
      this.UserService.update(this.formUser.value, this.userId).subscribe();
    }
  }
}
