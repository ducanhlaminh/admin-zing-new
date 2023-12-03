import { Component, Inject, OnInit } from '@angular/core';
import {
  faMagnifyingGlass,
  faCircleArrowRight,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsService } from 'src/app/modules/news/services/news.service';

@Component({
  selector: 'app-dialog-search-article',
  templateUrl: './dialog-search-article.component.html',
  styleUrls: ['./dialog-search-article.component.scss'],
})
export class DialogSearchArticleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private NewsService: NewsService,
    private formBuilder: FormBuilder
  ) {}
  formSearch!: FormGroup;
  listArticles: any;
  showInfor: boolean = false;
  detailArticle: any;

  faMagnifyingGlass = faMagnifyingGlass;
  faCircleArrowRight = faCirclePlus;
  getArticles() {
    this.NewsService.getAllByAd(this.formSearch.value).subscribe(
      (data: any) => {
        let array: any = [];
        data.rows.map((item: any) => {
          array.push({
            article_id: item.id,
            position: null,
            new_article: item,
          });
        });

        this.listArticles = array;
      }
    );
  }
  ngOnInit() {
    this.formSearch = this.formBuilder.group({
      title: '',
    });
  }
}
