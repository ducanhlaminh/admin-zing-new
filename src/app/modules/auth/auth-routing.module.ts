import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGoogleSuccessComponent } from './components/content/login-google-success/login-google-success.component';
import { LoginComponent } from './components/content/login/login.component';
const routes: Routes = [
  {
    path: 'login-success',
    component: LoginGoogleSuccessComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
