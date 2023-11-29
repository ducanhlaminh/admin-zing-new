import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
      selector: 'app-dialog-overview',
      templateUrl: './dialog-overview.component.html',
      styleUrls: ['./dialog-overview.component.scss'],
})
export class DialogOverviewComponent {
      @ViewChild('content') contentTag: any;
      constructor(
            public dialogRef: MatDialogRef<any>,
            @Inject(MAT_DIALOG_DATA) public data: any
      ) {}
      ngAfterViewInit(): void {
            this.contentTag.nativeElement.innerHTML = this.data.dataHTML;
      }
}
