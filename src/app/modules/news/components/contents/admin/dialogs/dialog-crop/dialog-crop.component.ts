import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageTransform } from 'ngx-image-cropper';
import { faImage } from '@fortawesome/free-solid-svg-icons';
@Component({
      selector: 'app-dialog-crop',
      templateUrl: './dialog-crop.component.html',
      styleUrls: ['./dialog-crop.component.scss'],
})
export class DialogCropComponent {
      @ViewChild('uploadFile') uploadFile!: ElementRef;
      imageChangedEvent: any = '';
      croppedImage: any = '';
      showCropper = false;
      faImage = faImage;
      scale: number = 1;
      transform: ImageTransform = {};
      constructor(
            public dialogRef: MatDialogRef<any>,
            @Inject(MAT_DIALOG_DATA) public data: any
      ) {
            this.imageChangedEvent = this.data.imageCrop;
      }
      imageCropped(event: any) {
            this.data.srcImg = event;
      }

      uploadImage() {
            this.uploadFile.nativeElement.click();
      }
      zoomOut(value: any) {
            this.scale = value;
            this.transform = {
                  ...this.transform,
                  scale: this.scale,
            };
      }
      changeValue(e: any) {
            if (e > this.scale) {
                  this.zoomIn(e);
            } else {
                  this.zoomOut(e);
            }
            console.log(this.transform);
      }
      zoomIn(value: number) {
            this.scale = value;
            this.transform = {
                  ...this.transform,
                  scale: parseFloat(this.scale.toFixed(1)),
            };
      }
}
