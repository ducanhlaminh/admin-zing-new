import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Buffer } from 'buffer';
import * as forge from 'node-forge';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  publicKey =
    'TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFpak13dVdyVndMbDRsdnNUNUJzbQo2bFd3OHp0b1pDUTdyZGpUT2MwU2k4OFk0a3BTalk5dkRNbjBTNFdQU3R5OTZidTM3aDM0Ui9IcnJ0elJEbEVzCmg2VGR6dlJ2d0RBQ3JZR3RweG83OVBiTDZsVWY4VC91ZTJwRng0KzhZNlB1UU1zUGRtWnVsMGI5VFBzUFFMSEMKV25idEN3cGtaR21rcnJiRnRDUE92TjJIQzBQU2tqTXRSYnpZZ25sQnlzekpXWU5ZVkdzTU44bk4wUmhPNVhRegpmaVRQWWtzcHF2d3FlNGVMV2IrNzVCd1hQQUtDYm05Y053b3EwQUFEYm9oVzl3cUR3bnYrSDMwZHBFWGtBa3ZFClg5YlVDN0xwT0RWWUx5MGlnQTgybmlIeThVV0ZZclhTYlhFUHNPU3AzODdMVjJCTTFBMzNZakZBd3U3SG5ISG0KZ3dJREFRQUI=';

  constructor(public http: HttpClient) {}
  dataPreview: any;

  encryptRequest(e: any) {
    try {
      const n = forge.random.getBytesSync(32);
      const t = forge.random.getBytesSync(16);
      e = Object.assign(
        {
          timestamp: new Date().getTime(),
        },
        e
      );
      const i = forge.cipher.createCipher('AES-CTR', n);
      i.start({
        iv: t,
      }),
        i.update(
          forge.util.createBuffer(forge.util.encodeUtf8(JSON.stringify(e)))
        ),
        i.finish();
      const r = Buffer.concat([
        Buffer.from(t, 'binary'),
        Buffer.from(i.output.data, 'binary'),
      ]);
      const s = forge.pki
        .publicKeyFromPem(forge.util.decode64(this.publicKey))
        .encrypt(forge.util.encode64(n));
      return {
        d: r.toString('base64'),
        k: forge.util.encode64(s),
      };
    } catch (n) {
      console.log(n);
      return e;
    }
  }

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
    const dataa = this.encryptRequest(data);
    console.log(dataa);

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
