import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from '../components/footer/footer.component';
import { LayoutMainComponent } from './page/layout-main/layout-main.component';
import { SignupComponent } from './page/signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutDetailComponent } from './page/layout-detail/layout-detail.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LayoutAdminComponent } from './page/layout-admin/layout-admin.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutMainComponent,
    SignupComponent,
    LayoutDetailComponent,
    LayoutAdminComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    LayoutRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    // InfiniteScrollModule,
    MatIconModule,
  ],
  exports: [
    LayoutMainComponent,
    MatDialogModule,
    LayoutDetailComponent,
    MatButtonModule,
    MatAutocompleteModule,
    SignupComponent,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatStepperModule,
    DragDropModule,
    MatInputModule,
    HeaderComponent,
    // InfiniteScrollModule,
  ],
})
export class LayoutModule {}
