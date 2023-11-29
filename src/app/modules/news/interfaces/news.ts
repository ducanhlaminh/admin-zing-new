export interface Article {
  id: number;
  title: string;
  slug: string;
  slug_crc: number;
  content: string;
  sapo: string;
  avatar: string;
  views: number;
  publishAt: Date;
  status: number;
  created_user_id: number;
  createdAt: Date;
  updatedAt: Date;
  new_article: Article;
  new_articles_categories: new_articles_category[];
  edit: boolean;
  selected: boolean;
  opened: boolean;
  User: any;
}
export interface new_articles_category {
  id: number;
  article_id: number;
  category_id: number;
  category: Category;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  slug_crc: number;
  parent_id: number;
  position: number;
  status: number;
  childCategories: Category[];
  updated_user_id: number;
  created_user_id: number;
  selected: boolean;
  opened: boolean;
  edit: boolean;
  createdAt: Date;
  updatedAt: Date;
}
