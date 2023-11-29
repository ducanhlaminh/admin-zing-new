export class Article {
  id!: number;
  title!: string;
  slug!: string;
  slug_crc!: number;
  content!: string;
  sapo!: string;
  avatar!: string;
  views!: number;
  publishAt!: Date;
  status!: number;
  created_user_id!: number;
  createdAt!: Date;
  updatedAt!: Date;
  constructor() {}
}
