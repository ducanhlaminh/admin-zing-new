import {
  CdkDrag,
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  Renderer2,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NewsService } from 'src/app/modules/news/services/news.service';
import {
  faMagnifyingGlass,
  faCircleMinus,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/modules/news/services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.development';
import { DialogSearchArticleComponent } from '../dialogs/dialog-search-article/dialog-search-article.component';
@Component({
  selector: 'app-manage-position-home',
  templateUrl: './manage-position-home.component.html',
  styleUrls: ['./manage-position-home.component.scss'],
})
export class ManagePositionHomeComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faCircleMinus = faCircleMinus;
  faCirclePlus = faCirclePlus;

  selectedStatus = 1;
  environment = environment;
  @ViewChild('checkAll') checkAll!: ElementRef;
  typeLayout = '1';
  categories: any[] = [];
  formSearch!: FormGroup;
  formOption!: FormGroup;
  change: boolean = false;
  isUpadate: boolean = false;

  test: number = 0;
  statusOptions = [
    {
      name: 'Xuất bản',
      status: 1,
    },
    { name: 'Bản nháp', status: 0 },
  ];
  listArticles: any;
  hotArticles: any = {
    top: { data: [], length: 1 },
    bottom: { data: [], length: 3 },
    right: { data: [], length: 15 },
  };
  hotArticlesHome: any = {
    left: { data: [], length: 5 },
    center: { data: [], length: 1 },
    right: { data: [], length: 2 },
  };
  draggingOutsideSourceList: any;
  statusFull: boolean = false;
  showPlaceholder: boolean = true;
  constructor(
    public CategoryService: CategoryService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private NewsService: NewsService,
    public renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      title: '',
    });
    this.formOption = this.formBuilder.group({
      categories_id: '1',
    });
    this.getOptionCategories();
    this.getHotNews();
  }
  enter(event: any) {
    this.draggingOutsideSourceList = event.container.id;
  }
  start2(event: any) {
    this.draggingOutsideSourceList = event.container.id;
  }
  check(drag: any, drop: any) {
    return drop.data.length === 0;
  }
  check2(drag: any, drop: any) {
    return drop.data.length < 3;
  }
  start(event: any, number: any) {
    this.draggingOutsideSourceList = number;
  }
  drop(event: any) {
    console.log(1);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  handleImageError(event: any) {
    const fallbackImage =
      'https://nic.gov.vn/wp-content/plugins/elementor/assets/images/placeholder.png';
    this.renderer.setAttribute(event.target, 'src', fallbackImage);
  }
  getHotNews() {
    const categoryId = this.formOption.value?.categories_id;
    if (categoryId === '1') {
      this.hotArticlesHome = {
        left: { data: [], length: 5 },
        center: { data: [], length: 1 },
        right: { data: [], length: 2 },
      };
      this.NewsService.getArtclesHotAdmin(categoryId).subscribe((data: any) => {
        data?.map((item: any) => {
          if (item.position === 1) {
            this.hotArticlesHome.center.data.push(item);
          } else if (item.position > 1 && item.position < 4) {
            this.hotArticlesHome.right.data.push(item);
          } else if (item.position > 3) {
            this.hotArticlesHome.left.data.push(item);
          }
        });
      });
    } else {
      this.hotArticles = {
        top: { data: [], length: 1 },
        bottom: { data: [], length: 3 },
        right: { data: [], length: 15 },
      };
      this.NewsService.getArtclesHotAdmin(categoryId).subscribe((data: any) => {
        data?.map((item: any) => {
          if (item.position === 1) {
            this.hotArticles.top.data.push(item);
          } else if (item.position > 1 && item.position < 5) {
            this.hotArticles.bottom.data.push(item);
          } else {
            this.hotArticles.right.data.push(item);
          }
        });
      });
    }
  }
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
  getOptionCategories() {
    this.CategoryService.categoriesForAd$.subscribe(
      (data: any) => (this.categories = data?.categories)
    );
  }
  updatePosition() {
    if (this.formOption.value.categories_id === '1') {
      let articles: any = [];
      this.hotArticlesHome.center.data.map((item: any, idx: any) => {
        articles.push({
          article_id: item.article_id,
          position: idx + 1,
        });
      });
      this.hotArticlesHome.right.data.map((item: any, idx: any) => {
        articles.push({
          article_id: item.article_id,
          position: idx + 2,
        });
      });
      this.hotArticlesHome.left.data.map((item: any, idx: any) => {
        articles.push({
          article_id: item.article_id,
          position: idx + 4,
        });
      });

      this.NewsService.createArtclesHotCate(articles, null).subscribe();
    } else {
      const cate = this.categories.find(
        (category: any) =>
          category.slug_crc === parseInt(this.formOption.value.categories_id)
      );
      let articles: any = [];
      this.hotArticles.top.data.map((item: any, idx: any) => {
        articles.push({
          article_id: item.article_id,
          position: idx + 1,
        });
      });
      this.hotArticles.bottom.data.map((item: any, idx: any) => {
        articles.push({
          article_id: item.article_id,
          position: idx + 2,
        });
      });
      this.hotArticles.right.data.map((item: any, idx: any) => {
        articles.push({
          article_id: item.article_id,
          position: idx + 5,
        });
      });

      this.NewsService.createArtclesHotCate(articles, cate.id).subscribe();
    }
  }
  deletePosition(list_articles: any, position: number) {
    let index = list_articles.findIndex(
      (obj: any) => obj.position === position
    );
    list_articles.splice(index, 1);
    this.change = true;
  }
  showDialog(list: any) {
    const dialogRef = this.dialog.open(DialogSearchArticleComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      const articles = list;
      result.length = list.length;
      list.push(result);
    });
  }
}
