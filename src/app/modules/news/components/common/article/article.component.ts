import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() articleData: any;
  constructor(private Router: Router) {}
  ngOnInit(): void {}
  navigateToDetail() {
    this.Router.navigateByUrl(
      `bai-viet/${this.articleData?.new_article.slug}/${this.articleData?.new_article.slug_crc}`
    );
  }
}
