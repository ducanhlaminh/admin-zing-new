import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/modules/news/services/user.service';

interface account {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formAccount!: FormGroup;
  showPassword: boolean = false;
  passwordType = 'password';
  constructor(
    private FormBuilder: FormBuilder,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.formAccount = this.FormBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    this.userService.login(this.formAccount.value).subscribe();
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}
