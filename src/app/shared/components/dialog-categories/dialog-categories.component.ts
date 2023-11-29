import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
      selector: 'app-dialog-categories',
      templateUrl: './dialog-categories.component.html',
      styleUrls: ['./dialog-categories.component.scss'],
})
export class DialogCategoriesComponent {
      constructor(
            public dialogRef: MatDialogRef<any>,
            @Inject(MAT_DIALOG_DATA) public data: any
      ) {
            data.categories.map((category: any) => {
                  category.showFullCategories = false;
            });
      }
      faXmark = faXmark;
}
