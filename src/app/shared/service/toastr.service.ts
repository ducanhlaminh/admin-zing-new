import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: "root",
})
export class ToastrCommonService {
    constructor(private toastr: ToastrService) {}
    showToart(status: boolean, title: string = "", detail: string = "") {
        console.log(status, title, detail);

        if (status) {
            this.toastr.success(title, detail);
        } else {
            this.toastr.error(title, detail);
        }
    }
}
