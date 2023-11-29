import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(public http: HttpClient) {}
  dataPreview: any;
  getHotMain() {
    return this.http.get(environment.API_NEWS_HOT_MAIN);
  }
  getBooks() {
    return this.http.get(environment.API_BOOKS);
  }
  getNewArtclesMain(page: number = 1) {
    return this.http.get(environment.API_NEW_ARTCLES_MAIN, {
      params: { page },
    });
  }
  getNewArtclesCate(slug_crc: string, page: number = 1) {
    return this.http.get(environment.API_NEW_ARTCLES_CATE, {
      params: { slug_crc, page },
    });
  }
  getArticlesByTitle(category_id: any, title: string, page: number = 1) {
    if (category_id === '') {
      return this.http.get(environment.API_NEW_ARTCLES_TITLE, {
        params: { title, page },
      });
    } else {
      return this.http.get(environment.API_NEW_ARTCLES_TITLE, {
        params: { title, category_id, page },
      });
    }
  }
  getArticlesView(slug_crc: string = '') {
    if (slug_crc !== '') {
      return this.http.get(environment.API_ARTICLES_VIEWS, {
        params: { slug_crc },
      });
    }
    return this.http.get(environment.API_ARTICLES_VIEWS);
  }
  getArtclesHotCate(slug_crc: string) {
    if (slug_crc) {
      return this.http.get(environment.API_ARTICLES_HOT_CATE, {
        params: { slug_crc },
      });
    } else {
      return this.http.get(environment.API_ARTICLES_HOT_CATE, {});
    }
  }
  getArtclesHotAdmin(slug_crc: string) {
    if (slug_crc) {
      return this.http.get(environment.API_ARTICLES_HOT_ADMIN, {
        params: { slug_crc },
      });
    } else {
      return this.http.get(environment.API_ARTICLES_HOT_ADMIN);
    }
  }
  getDetail(slug: string, slug_crc: string) {
    return this.http.get(environment.API_GET_DETAIL + slug + '/' + slug_crc);
  }
  createArticle(data: any) {
    return this.http.post(environment.API__ADMIN_ARTICLE, data);
  }
  updateArticle(data: any = '', id: any) {
    if (Array.isArray(id)) {
      const params = JSON.stringify(id);

      return this.http.put(
        environment.API__ADMIN_ARTICLE,
        {
          data,
        },
        { params: { id } }
      );
    }
    return this.http.put(
      environment.API__ADMIN_ARTICLE,
      {
        data,
      },
      { params: { id } }
    );
  }
  deleteArticle(id: any) {
    const params = JSON.stringify(id);

    return this.http.delete(environment.API__ADMIN_ARTICLE, {
      params: { id: params },
    });
  }
  getAllByAd(data: any) {
    return this.http.get(environment.API__ADMIN_ARTICLE, {
      params: { ...data },
    });
  }
  deleteHotMain(data: any) {
    return this.http.delete(environment.API_ADMIN_HOT_MAIN, {
      params: { ...data },
    });
  }
  createHotMain(data: any) {
    return this.http.post(environment.API_ADMIN_HOT_MAIN, {
      data,
    });
  }
  updateHotMain(data: any) {
    return this.http.put(environment.API_ADMIN_HOT_MAIN, data);
  }
  updateArtclesHotCate(data: any, category_id: any) {
    return this.http.put(
      environment.API_ADMIN_HOT_CATE + '/' + category_id,
      data
    );
  }
  createArtclesHotCate(articles: any, category_id: any) {
    if (category_id) {
      return this.http.post(environment.API_ARTICLES_HOT_ADMIN, {
        articles,
        category_id,
      });
    } else {
      return this.http.post(environment.API_ARTICLES_HOT_ADMIN, {
        articles,
      });
    }
  }
  deleteHotCate(data: any) {
    return this.http.delete(environment.API_ADMIN_HOT_CATE, {
      params: { ...data },
    });
  }
  getBoxArticlesCategory(data: any = null) {
    if (data) {
      return this.http.get(environment.API_BOX_ARTICLES_CARTEGORY, {
        params: { slug_crc: data },
      });
    } else {
      return this.http.get(environment.API_BOX_ARTICLES_CARTEGORY);
    }
  }
}
