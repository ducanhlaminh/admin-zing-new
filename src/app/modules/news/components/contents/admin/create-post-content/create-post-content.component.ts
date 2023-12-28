import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    Validators,
} from "@angular/forms";
import { faL, faUpload } from "@fortawesome/free-solid-svg-icons";
import { CategoryService } from "src/app/modules/news/services/category.service";
import { NewsService } from "src/app/modules/news/services/news.service";
import { DomSanitizer } from "@angular/platform-browser";
import { DialogCropComponent } from "../dialogs/dialog-crop/dialog-crop.component";
import { MatDialog } from "@angular/material/dialog";
import { DialogOverviewComponent } from "../dialogs/dialog-overview/dialog-overview.component";
import { PreviewContentComponent } from "../preview-content/preview-content.component";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from "ngx-toastr";
import { ShareService } from "src/app/shared/service/share.service";
import { formatDate } from "@angular/common";
import { Observable, map, switchMap, timer } from "rxjs";
import { Category } from "src/app/modules/news/interfaces/news";
declare const tinymce: any;
@Component({
    selector: "app-create-post-content",
    templateUrl: "./create-post-content.component.html",
    styleUrls: ["./create-post-content.component.scss"],
})
export class CreatePostContentComponent implements OnInit {
    @ViewChild("uploadFile") uploadFile!: ElementRef;
    faArrowUpFromBracket = faArrowUpFromBracket;
    faUpload = faUpload;

    imgPreview: any;
    formGroup: any;
    imageCropper: any;
    optionCategories: Category[] = [];
    imageUpload: File[] = [];
    nameImgSelected: string = "";
    imgSelected!: ElementRef;
    loading: boolean = false;
    formDetail: any;
    panelOpenState: boolean = true;
    statusRequired: boolean = false;
    isTyping: boolean = false;
    submited: boolean = false;
    statusOptions = [
        { name: "Chờ xử lý", status: 2 },
        {
            name: "Xuất bản",
            status: 1,
        },
        { name: "Bản nháp", status: 0 },
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
            title: [
                "",
                Validators.compose([Validators.required]),
                this.validateTitle(),
            ],
            slug: ["", Validators.required],
            sapo: ["", Validators.compose([Validators.required])],
            content: ["", Validators.required],
            categoryId: ["", Validators.required],
            avatar: ["", Validators.required],
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
        this.formDetail.valueChanges.subscribe((formValues: any) => {
            // Xử lý sự kiện change tại đây
            if (formValues.title === "") {
                this.isTyping = false;
            }
            this.formDetail.patchValue(
                {
                    slug: this.vietnameseToSlug(formValues.title),
                },
                { emitEvent: false }
            );
        });
    }

    validateTitle() {
        return (
            control: AbstractControl
        ): Observable<ValidationErrors | null> => {
            this.isTyping = true;
            return timer(500).pipe(
                switchMap(() =>
                    this.NewService.checkTitle(control.value).pipe(
                        map((result: any) => {
                            console.log("false");

                            this.isTyping = false;
                            if (control.value === "") {
                                return null;
                            }
                            if (result) {
                                return null;
                            }

                            return {
                                error: "Tiêu đề bài viết đã được sử dụng",
                                status: -1,
                            };
                        })
                    )
                )
            );
        };
    }
    openDialog(): void {
        const inputElement = document.createElement("input");
        // Thêm thuộc tính type và multiple vào đối tượng thuộc tính của input element
        inputElement.setAttribute("type", "file");
        inputElement.setAttribute("multiple", "multiple");
        inputElement.click();
        inputElement.addEventListener("change", (event: any) => {
            const fileList = event.target.files;
            this.imageUpload = [...fileList];
            for (const file of fileList) {
                const reader = new FileReader();

                reader.onloadend = () => {
                    const base64String = reader.result;

                    tinymce.execCommand(
                        "mceInsertContent",
                        false,
                        `<img src="${base64String}" name="${file.name}"/>`
                    );
                };

                reader.readAsDataURL(file);
            }
        });
    }
    openDialogSetAvatar(): void {
        const inputElement = document.createElement("input");
        // Thêm thuộc tính type và multiple vào đối tượng thuộc tính của input element
        inputElement.setAttribute("type", "file");
        inputElement.click();
        inputElement.addEventListener("change", (event: any) => {
            const dialogRef = this.dialog.open(DialogCropComponent, {
                maxWidth: "50vw",
                maxHeight: "60vh",
                height: "100%",
                width: "100%",
                data: {
                    imageCrop: event.target.files[0],
                    type: "avatar",
                },
            });
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    console.log(result);

                    this.formDetail.get("avatar")?.patchValue(result);
                    this.imgPreview = result.objectUrl;
                }
            });
        });
    }
    vietnameseToSlug(str: string) {
        // Chuyển các ký tự có dấu thành không dấu
        str = str.toLowerCase();

        //Đổi ký tự có dấu thành không dấu
        str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
        str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
        str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
        str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
        str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
        str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
        str = str.replace(/đ/gi, "d");
        //Xóa các ký tự đặt biệt
        str = str.replace(
            /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
            ""
        );
        //Đổi khoảng trắng thành ký tự gạch ngang
        str = str.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        str = str.replace(/\-\-\-\-\-/gi, "-");
        str = str.replace(/\-\-\-\-/gi, "-");
        str = str.replace(/\-\-\-/gi, "-");
        str = str.replace(/\-\-/gi, "-");
        //Xóa các ký tự gạch ngang ở đầu và cuối
        str = "@" + str + "@";
        str = str.replace(/\@\-|\-\@|\@/gi, "");

        return str;
    }
    openDialogCrop = () => {
        const imageCrop = this.imageUpload.find(
            (image: any) => image.name === this.tinyMCEInit.nameImgSelected
        );
        const dialogRef = this.dialog.open(DialogCropComponent, {
            width: "1000px",
            height: "500px",
            data: {
                imageCrop,
                type: "image",
            },
        });
        dialogRef.afterClosed().subscribe((result: any) => {
            const reader = new FileReader();
            console.log(result);

            reader.onloadend = () => {
                const base64String = reader.result;
                console.log(123);
                this.tinyMCEInit.imgSelected.setAttribute("src", base64String);
                this.tinyMCEInit.imgSelected.setAttribute(
                    "width",
                    result.width
                );
                this.tinyMCEInit.imgSelected.setAttribute(
                    "height",
                    result.height
                );
            };

            reader.readAsDataURL(result.blob);
        });
    };
    openDialogOverview = () => {
        this.dialog.open(DialogOverviewComponent, {
            maxWidth: "1100px",
            maxHeight: "100vh",
            height: "95%",
            width: "1100px",
            data: {
                dataHTML: this.formDetail.value.content,
            },
        });
    };
    openDialogPreview = () => {
        this.dialog.open(PreviewContentComponent, {
            maxWidth: "100vw",
            maxHeight: "100vh",
            height: "100%",
            width: "100%",
            data: {
                dataHTML: this.formDetail.value.content,
            },
        });
    };
    ngOnInit(): void {
        tinymce.PluginManager.add("example", (editor: any, url: any) => {
            editor.ui.registry.addMenuButton("myCustomToolbarButton", {
                text: "Cách lề",
                fetch: (callback: any) => {
                    const items = [
                        {
                            type: "menuitem",
                            text: "0px",
                            onAction: () => {
                                tinymce.activeEditor.formatter.toggle(
                                    "custom_format1"
                                );
                            },
                        },
                        {
                            type: "menuitem",
                            text: "Tiêu chuẩn",
                            onAction: () => {
                                tinymce.activeEditor.formatter.toggle(
                                    "custom_format2"
                                );
                            },
                        },
                    ];
                    callback(items);
                },
            });
            editor.ui.registry.addButton("mycustombutton", {
                icon: "image",
                onAction: () => {
                    // Mở dialog
                    this.openDialog();
                },
            });
            editor.ui.registry.addButton("cropimage", {
                icon: "crop",
                onAction: (e: any) => {
                    // Mở dialog
                    this.openDialogCrop();
                },
            });
            editor.ui.registry.addButton("overview", {
                icon: "preview",
                onAction: (e: any) => {
                    this.openDialogOverview();
                    // Mở dialog
                },
            });
            editor.ui.registry.addButton("preivew", {
                icon: "browse",
                onAction: (e: any) => {
                    this.openDialogPreview();
                },
            });
        });
        this.getOptionCategories();
    }
    formats = {
        custom_format1: {
            block: "div",
            styles: { padding: "0 " },
        },
        custom_format2: {
            block: "div",
            styles: { width: "700px", margin: "0 auto" },
        },
    };

    tinyMCEInit: any = {
        setup: this.setup,
        height: 700,
        formats: this.formats,
        font_css: "/styles.css",
        content_css: "/styles.css",
        quickbars_image_toolbar: "cropimage delete",
        font_size_formats:
            "8pt 10pt 12pt 14pt 16pt 18pt 20pt 24pt 36pt 48pt 50pt 52pt",
        font_family_formats:
            "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n;Noto Serif=Noto Serif;Raleway=Raleway;Berfilem=Berfilem;TikTok=TikTok;",
        content_style:
            "@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');@import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');body {line-height: 1.6; font-family: 'Arial';overflow-x: hidden;font-size:18px border-box: box-sizing: border-box;}",
    };
    setup(editor: any) {
        editor.on("click", (e: any) => {
            const targetElement = e.target;
            if (targetElement.tagName === "IMG") {
                (this.imgSelected = targetElement),
                    (this.nameImgSelected = targetElement.getAttribute("name"));
            }
        });
    }
    toggleRequiredFields() {
        const formControls = this.formDetail.controls;

        Object.keys(formControls).forEach((key) => {
            const control = formControls[key];
            if (
                this.formDetail.value.status === 1 ||
                this.formDetail.value.status === 2
            ) {
                if (key === "title") {
                    control.setValidators(this.validateTitle());
                } else {
                    control.setValidators([Validators.required]);
                }
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
        this.formDetail.get("avatar")!.patchValue(event.target.files[0]);
        this.imgPreview = URL.createObjectURL(event.target.files[0]);
    }
    submitFormCreate() {
        try {
            this.submited = true;
            if (this.formDetail.valid) {
                const file = new File(
                    [this.formDetail.value.avatar.blob],
                    `123.png`,
                    {
                        type: "image/png",
                    }
                );
                const formattedDate = formatDate(
                    this.formDetail.value.publishAt,
                    "yyyy-MM-dd",
                    "en-US"
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
            this.toastrService.showToastr(
                `Tạo bài viết không thành công`,
                false
            );
        }
    }
    convertObjectToFormData(obj: any): any {
        let formData = new FormData();
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key];
                if (key === "avatar") {
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
