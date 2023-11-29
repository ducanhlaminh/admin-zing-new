import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
      providedIn: 'root',
})
export class ShareService {
      constructor(public toastr: ToastrService) {}
      showToastr(message: string, status: boolean) {
            if (status) this.toastr.success(message);
            else this.toastr.error(message);
      }
}
