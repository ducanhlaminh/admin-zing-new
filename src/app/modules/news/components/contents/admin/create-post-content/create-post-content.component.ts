import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faL, faUpload } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/modules/news/services/category.service';
import { NewsService } from 'src/app/modules/news/services/news.service';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogCropComponent } from '../dialogs/dialog-crop/dialog-crop.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialogs/dialog-overview/dialog-overview.component';
import { PreviewContentComponent } from '../preview-content/preview-content.component';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { ShareService } from 'src/app/shared/service/share.service';
import { formatDate } from '@angular/common';
declare const tinymce: any;
@Component({
  selector: 'app-create-post-content',
  templateUrl: './create-post-content.component.html',
  styleUrls: ['./create-post-content.component.scss'],
})
export class CreatePostContentComponent implements OnInit {
  @ViewChild('uploadFile') uploadFile!: ElementRef;
  @Input('data') data: any;
  faArrowUpFromBracket = faArrowUpFromBracket;
  faUpload = faUpload;

  imgPreview: any;
  formGroup: any;
  imageCropper: any;
  editable = false;
  previewImg: any;
  srcImg: any;
  optionCategories: any;
  imageUpload: any = [];
  nameImgSelected: any;
  imgSelected: any;
  loading: boolean = false;
  formDetail: any;
  categories: any;
  panelOpenState = true;
  statusRequired: boolean = false;
  statusOptions = [
    {
      name: 'Xuất bản',
      status: 1,
    },
    { name: 'Bản nháp', status: 0 },
  ];
  currentDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    public CategoryService: CategoryService,
    private NewService: NewsService,
    public dialog: MatDialog,
    private toastrService: ShareService
  ) {
    this.formDetail = this.formBuilder.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      sapo: ['', Validators.required],
      content: ['', Validators.required],
      categoryId: ['', Validators.required],
      avatar: ['', Validators.required],
      publishAt: [
        new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          this.currentDate.getDate()
        ),
        Validators.required,
      ],
      status: [0, Validators.required],
    });
    this.toggleRequiredFields();
  }
  openDialog(): void {
    const inputElement = document.createElement('input');
    // Thêm thuộc tính type và multiple vào đối tượng thuộc tính của input element
    inputElement.setAttribute('type', 'file');
    inputElement.setAttribute('multiple', 'multiple');
    inputElement.click();
    inputElement.addEventListener('change', (event: any) => {
      const fileList = event.target.files;
      this.imageUpload = [...fileList];
      for (const file of fileList) {
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result;

          tinymce.execCommand(
            'mceInsertContent',
            false,
            `<img src="${base64String}" name="${file.name}"/>`
          );
        };

        reader.readAsDataURL(file);
      }
    });
  }
  openDialogSetAvatar(): void {
    const inputElement = document.createElement('input');
    // Thêm thuộc tính type và multiple vào đối tượng thuộc tính của input element
    inputElement.setAttribute('type', 'file');
    inputElement.click();
    inputElement.addEventListener('change', (event: any) => {
      const dialogRef = this.dialog.open(DialogCropComponent, {
        maxWidth: '50vw',
        maxHeight: '60vh',
        height: '100%',
        width: '100%',
        data: {
          imageCrop: event.target.files[0],
          type: 'avatar',
        },
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log(result);

          this.formDetail.get('avatar').patchValue(result);
          this.imgPreview = result.objectUrl;
        }
      });
    });
  }
  openDialogCrop = () => {
    const imageCrop = this.imageUpload.find(
      (image: any) => image.name === this.tinyMCEInit.nameImgSelected
    );
    const dialogRef = this.dialog.open(DialogCropComponent, {
      width: '1000px',
      height: '500px',
      data: {
        imageCrop,
        type: 'image',
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      const reader = new FileReader();
      console.log(result);

      reader.onloadend = () => {
        const base64String = reader.result;
        console.log(123);
        this.tinyMCEInit.imgSelected.setAttribute('src', base64String);
        this.tinyMCEInit.imgSelected.setAttribute('width', result.width);
        this.tinyMCEInit.imgSelected.setAttribute('height', result.height);
      };

      reader.readAsDataURL(result.blob);
    });
  };
  openDialogOverview = () => {
    this.dialog.open(DialogOverviewComponent, {
      maxWidth: '1100px',
      maxHeight: '100vh',
      height: '95%',
      width: '1100px',
      data: {
        dataHTML: this.formDetail.value.content,
      },
    });
  };
  openDialogPreview = () => {
    this.dialog.open(PreviewContentComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        dataHTML: this.formDetail.value.content,
      },
    });
  };
  ngOnInit(): void {
    tinymce.PluginManager.add('example', (editor: any, url: any) => {
      editor.ui.registry.addMenuButton('myCustomToolbarButton', {
        text: 'Cách lề',
        fetch: (callback: any) => {
          const items = [
            {
              type: 'menuitem',
              text: '0px',
              onAction: () => {
                tinymce.activeEditor.formatter.toggle('custom_format1');
              },
            },
            {
              type: 'menuitem',
              text: 'Tiêu chuẩn',
              onAction: () => {
                tinymce.activeEditor.formatter.toggle('custom_format2');
              },
            },
          ];
          callback(items);
        },
      });
      editor.ui.registry.addButton('mycustombutton', {
        icon: 'image',
        onAction: () => {
          // Mở dialog
          this.openDialog();
        },
      });
      editor.ui.registry.addButton('cropimage', {
        icon: 'crop',
        onAction: (e: any) => {
          // Mở dialog
          this.openDialogCrop();
        },
      });
      editor.ui.registry.addButton('overview', {
        icon: 'preview',
        onAction: (e: any) => {
          this.openDialogOverview();
          // Mở dialog
        },
      });
      editor.ui.registry.addButton('preivew', {
        icon: 'browse',
        onAction: (e: any) => {
          this.openDialogPreview();
        },
      });
    });
    if (this.data) {
      this.formDetail = this.formBuilder.group({
        title: ['', Validators.required],
        slug: ['', Validators.required],
        sapo: ['', Validators.required],
        content: [''],
        categoryId: ['', Validators.required],
        avatar: [''],
      });

      this.formDetail.patchValue({
        title: this.data.title,
        slug: this.data.slug,
        sapo: this.data.sapo,
        content: this.data.content,
        categoryId: this.data.new_articles_categories[0].category_id,
      });
      this.imgPreview = this.data.avatar;
    }
    this.getOptionCategories();
  }
  formats = {
    custom_format1: {
      block: 'div',
      styles: { padding: '0 ' },
    },
    custom_format2: {
      block: 'div',
      styles: { width: '700px', margin: '0 auto' },
    },
  };
  init_instance_callback = () => {
    this.data?.content &&
      tinymce.execCommand('mceInsertContent', false, this?.data?.content);
  };
  tinyMCEInit: any = {
    setup: this.setup,
    height: 700,
    formats: this.formats,
    font_css: '/styles.css',
    content_css: '/styles.css',
    quickbars_image_toolbar: 'cropimage delete',
    font_size_formats:
      '8pt 10pt 12pt 14pt 16pt 18pt 20pt 24pt 36pt 48pt 50pt 52pt',
    init_instance_callback: this.init_instance_callback,
    font_family_formats:
      'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n;Noto Serif=Noto Serif;Raleway=Raleway;Berfilem=Berfilem;TikTok=TikTok;',
    content_style:
      "@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');body {line-height: 1.6; font-family: 'Arial';overflow-x: hidden;font-size:18px border-box: box-sizing: border-box;}",
  };
  setup(editor: any) {
    editor.on('click', (e: any) => {
      const targetElement = e.target;
      if (targetElement.tagName === 'IMG') {
        (this.imgSelected = targetElement),
          (this.nameImgSelected = targetElement.getAttribute('name'));
      }
    });
  }
  toggleRequiredFields() {
    const formControls = this.formDetail.controls;
    console.log(this.formDetail.value.status);

    Object.keys(formControls).forEach((key) => {
      const control = formControls[key];
      if (this.formDetail.value.status) {
        control.setValidators([Validators.required]);
      } else {
        control.clearValidators();
      }

      control.updateValueAndValidity();
    });
  }
  uploadAvatar() {
    this.openDialogSetAvatar();
  }
  onChangeFile(event: any): void {
    this.formDetail.get('avatar').patchValue(event.target.files[0]);
    this.imgPreview = URL.createObjectURL(event.target.files[0]);
  }
  submitFormCreate() {
    try {
      if (this.formDetail.valid) {
        const file = new File([this.formDetail.value.avatar.blob], `123.png`, {
          type: 'image/png',
        });
        const formattedDate = formatDate(
          this.formDetail.value.publishAt,
          'yyyy-MM-dd',
          'en-US'
        );
        this.formDetail.patchValue({
          publishAt: formattedDate,
        });
        const combinedValues = {
          ...this.formDetail.value,
          avatar: file,
        };

        let formData = new FormData();
        for (const key in combinedValues) {
          formData.append(key, combinedValues[key]);
        }
        this.NewService.createArticle(formData).subscribe((data) => {
          this.loading = false;
          this.toastrService.showToastr(
            `Đã tạo bài viết thành công \n Vui lòng chờ được kiểm duyệt`,
            true
          );
        });
      } else {
        this.loading = false;
        this.toastrService.showToastr(
          `Vui lòng điền đủ các trường thông tin`,
          false
        );
      }
    } catch (error) {
      this.toastrService.showToastr(`Tạo bài viết không thành công`, false);
    }
  }
  convertObjectToFormData(obj: any): any {
    let formData = new FormData();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        if (key === 'avatar') {
          console.log(obj[key]);
        }
        formData.append(key, value);
      }
    }
    this.NewService.createArticle(formData).subscribe();
  }
  onChangeCate(e: any) {
    this.formDetail.patchValue({ categoryId: e.value });
  }
  getOptionCategories() {
    this.CategoryService.categoriesForAd$.subscribe((data) => {
      this.optionCategories = data?.categories;
    });
  }
}
