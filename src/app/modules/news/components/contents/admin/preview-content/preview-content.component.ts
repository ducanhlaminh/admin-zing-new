import {
      Component,
      ViewChild,
      OnInit,
      Inject,
      AfterViewInit,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
      faMagnifyingGlass,
      faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { NewsService } from 'src/app/modules/news/services/news.service';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
@Component({
      selector: 'app-preview-content',
      templateUrl: './preview-content.component.html',
      styleUrls: ['./preview-content.component.scss'],
})
export class PreviewContentComponent implements OnInit, AfterViewInit {
      @ViewChild('contentPreview') contentTag: any;
      faClose = faCircleXmark;
      faMagnifyingGlass = faMagnifyingGlass;
      constructor(
            public NewService: NewsService,
            @Inject(MAT_DIALOG_DATA) public data: any
      ) {}
      faPhone = faPhone;
      faMailBulk = faMailBulk;
      ngOnInit(): void {}
      ngAfterViewInit(): void {
            this.contentTag.nativeElement.innerHTML = this.data.dataHTML;
      }
}
