import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginGoogleSuccessComponent } from './components/content/login-google-success/login-google-success.component';
import { LoginComponent } from './components/content/login/login.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [LoginGoogleSuccessComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, LayoutModule],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class AuthModule {}
