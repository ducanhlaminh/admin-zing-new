export const environment = {
  API_CATEGORY_GET_ALL: 'http://localhost:4000/api/v1/categories/get-all',
  API_CATEGORY_GET_SUB_CATE:
    'http://localhost:4000/api/v1/categories/sub-cate/',
  API_CATEGORIES_BY_NAME: 'http://localhost:4000/api/v1/categories/',

  API_NEWS_HOT_MAIN: 'http://localhost:4000/api/v1/articles/hot-main/',
  API_BOOKS: 'http://localhost:4000/api/v1/articles/books',
  API_NEW_ARTCLES_MAIN: 'http://localhost:4000/api/v1/articles/publish_at',
  API_NEW_ARTCLES_CATE: 'http://localhost:4000/api/v1/articles/publish_at/',
  API_NEW_ARTCLES_TITLE: 'http://localhost:4000/api/v1/articles/title',
  API_ARTICLES_VIEWS: 'http://localhost:4000/api/v1/articles/views',
  API_ARTICLES_HOT_CATE: 'http://localhost:4000/api/v1/articles/hot-cate',
  API_BOX_ARTICLES_CARTEGORY:
    'http://localhost:4000/api/v1/articles/box-category',
  API_TOKEN_GG: 'http://localhost:4000/api/v1/auth/login-success/',
  API_LOGIN_GG: 'http://localhost:4000/api/v1/auth/google',
  API_GET_DETAIL: 'http://localhost:4000/api/v1/articles/detail/',
  API_GET_AVATAR: 'http://localhost:4000/api/v1/articles/avatar?slug_crc=',
  API_LOGIN: 'http://localhost:4000/api/v1/auth/login',

  API_GET_INFOR_USER: 'http://localhost:4000/api/v1/users/get-data',
  API_USER: 'http://localhost:4000/api/v1/users',

  //API ADMIN
  API_ADMIN_HOT_MAIN: 'http://localhost:4000/api/v1/articles/admin/hot-main',
  API_ADMIN_HOT_CATE: 'http://localhost:4000/api/v1/articlesadmin/hot-cate',
  API__ADMIN_ARTICLE: 'http://localhost:4000/api/v1/articles/admin/articles',
  API_CATEGORY_GET_ALL_ADMIN:
    'http://localhost:4000/api/v1/categories/admin/get-all',
  API_ADMIN_CATEGORY_DELETE: 'http://localhost:4000/api/v1/categories/admin',
  API_ADMIN_USER: 'http://localhost:4000/api/v1/users/admin',
  API_ARTICLES_HOT_ADMIN:
    'http://localhost:4000/api/v1/articles/admin/hot-news',
  API_ADMIN_CATEGORY: 'http://localhost:4000/api/v1/categories/admin/position',
};
export const configRole = [
  {
    name: 'Superadmin',
    role_id: 1,
    coloumns: {
      title: true,
      author: true,
      category: true,
      date: true,
      views: true,
    },
  },
  {
    name: 'Editor',
    role_id: 2,
    coloumns: {
      title: true,
      author: false,
      category: true,
      date: true,
      views: true,
    },
  },
];
// <!-- <table
//       style="
//             border-collapse: collapse;
//             width: 100%;
//             border-width: 1px;
//             background-color: #151b22;
//       "
//       border="1"
// >
//       <colgroup>
//             <col style="width: 99.9199%" />
//       </colgroup>
//       <tbody>
//             <tr>
//                   <td>
//                         <div
//                               class="width-detail-photo"
//                               style="
//                                     padding: 0px;
//                                     width: 700px;
//                                     margin: 0px auto;
//                               "
//                         >
//                               <h1
//                                     class="title-detail"
//                                     style="text-align: center"
//                               >
//                                     <span style="color: rgb(255, 255, 255)"
//                                           >S&acirc;n khấu show Blackpink dần
//                                           ho&agrave;n thiện</span
//                                     >
//                               </h1>
//                               <p class="description" style="text-align: center">
//                                     <span style="color: rgb(206, 212, 217)"
//                                           ><span class="location-stamp"
//                                                 >H&Agrave; NỘI - </span
//                                           >H&agrave;ng trăm người gấp r&uacute;t
//                                           ho&agrave;n thiện s&acirc;n khấu, test
//                                           &acirc;m thanh, &aacute;nh s&aacute;ng
//                                           trước ng&agrave;y diễn ra concert
//                                           Blackpink.</span
//                                     >
//                               </p>
//                         </div>
//                         <article id="lightgallery" class="fck_detail">
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953961"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=l9BIByHscz5CgpI1twW2Tg"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=jKxyksmwSx_QS4Delh33Iw"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3MCsuTsq8vaM7vqhPfA9IA 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=9yCl_TRo88XJef9we2zadw 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3MCsuTsq8vaM7vqhPfA9IA 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=9yCl_TRo88XJef9we2zadw 2x" />
//                                                             <img
//                                                                   class="lazy lazy-blur lazy-unblur lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3MCsuTsq8vaM7vqhPfA9IA"
//                                                                   alt=""
//                                                                   width="1069"
//                                                                   height="601"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4028-JPG-1690461142.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3MCsuTsq8vaM7vqhPfA9IA"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Chiều 27/7, s&acirc;n
//                                                       khấu tại s&acirc;n vận
//                                                       động Mỹ Đ&igrave;nh gần
//                                                       ho&agrave;n tất, trước khi
//                                                       show diễn ra ng&agrave;y
//                                                       29 v&agrave; 30/7.
//                                                       Qu&aacute; tr&igrave;nh
//                                                       thi c&ocirc;ng bắt đầu từ
//                                                       10 ng&agrave;y trước. Ban
//                                                       tổ chức cho biết 80% thiết
//                                                       bị kỹ thuật được nhập khẩu
//                                                       từ H&agrave;n Quốc,
//                                                       Th&aacute;i Lan.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953960"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=SnLVlrSePymIyovY0H4b6Q"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=BgWvYpSdi8s7z6uG2XnD8w"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=VcZMZPrnpmWRxaFiqceZQw 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=OmZEN3mMjm81Zu_DJG7WQA 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=VcZMZPrnpmWRxaFiqceZQw 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=OmZEN3mMjm81Zu_DJG7WQA 2x" />
//                                                             <img
//                                                                   class="lazy lazy-blur lazy-unblur lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=VcZMZPrnpmWRxaFiqceZQw"
//                                                                   alt=""
//                                                                   width="1070"
//                                                                   height="724"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4016-JPG-1690461141.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=VcZMZPrnpmWRxaFiqceZQw"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Ban tổ chức chia lối
//                                                       v&agrave;o, cổng check in
//                                                       theo từng khu vực.
//                                                       V&eacute; xem concert được
//                                                       chia th&agrave;nh
//                                                       t&aacute;m hạng, c&oacute;
//                                                       gi&aacute; từ 1,2 đến gần
//                                                       10 triệu đồng.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953962"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=aUo64GdTN9nQLTz8WQOhHg"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=ualRXmXBAi17gZ5i1rGsuQ"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=O4plMqA9sLicu1_9TLhVcA 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=cghMjKAMVMdXzzDjQIsKLg 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=O4plMqA9sLicu1_9TLhVcA 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=cghMjKAMVMdXzzDjQIsKLg 2x" />
//                                                             <img
//                                                                   class="lazy lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=O4plMqA9sLicu1_9TLhVcA"
//                                                                   alt=""
//                                                                   width="1063"
//                                                                   height="708"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4026-JPG-1690461144.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=O4plMqA9sLicu1_9TLhVcA"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >H&agrave;ng trăm
//                                                       nh&acirc;n vi&ecirc;n kỹ
//                                                       thuật li&ecirc;n tục thi
//                                                       c&ocirc;ng c&aacute;c hạng
//                                                       mục. Đ&ecirc;m diễn
//                                                       ng&agrave;y 29/7 dự kiến
//                                                       c&oacute; 36.000
//                                                       kh&aacute;n giả, đ&ecirc;m
//                                                       c&ograve;n lại c&oacute;
//                                                       31.000 người.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953963"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=5hVGTY0QKPX9QutGgqH2lQ"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=8vrxDWs_vILwKCHudfcu2g"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=DoPO-VUIUhKJDlUr3UOrHg 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=8GPiyJuPZHtyl6WW3k7XrQ 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=DoPO-VUIUhKJDlUr3UOrHg 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=8GPiyJuPZHtyl6WW3k7XrQ 2x" />
//                                                             <img
//                                                                   class="lazy lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=DoPO-VUIUhKJDlUr3UOrHg"
//                                                                   alt=""
//                                                                   width="1062"
//                                                                   height="707"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4025-JPG-1690461145.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=DoPO-VUIUhKJDlUr3UOrHg"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Họ sử dụng số lượng lớn
//                                                       d&agrave;n loa L- Acoustic
//                                                       K1 - loại loa được ưa
//                                                       chuộng tại c&aacute;c
//                                                       s&acirc;n vận động lớn, lễ
//                                                       hội &acirc;m nhạc
//                                                       ngo&agrave;i trời.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953964"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=VMVD0eFY5Opp29nfWmruFQ"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=G1TFI6S3OkUjLP8qURpsRg"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mZ5PhLoWKgDGc986q_z8Eg 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=NGSwIMFj1U8qFz15WiLMZA 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mZ5PhLoWKgDGc986q_z8Eg 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=NGSwIMFj1U8qFz15WiLMZA 2x" />
//                                                             <img
//                                                                   class="lazy lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mZ5PhLoWKgDGc986q_z8Eg"
//                                                                   alt=""
//                                                                   width="1054"
//                                                                   height="702"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4024-JPG-1690461147.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=mZ5PhLoWKgDGc986q_z8Eg"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Ban tổ chức cho biết để
//                                                       tối ưu h&oacute;a
//                                                       c&ocirc;ng năng của khối
//                                                       lượng lớn thiết bị,
//                                                       &ecirc;k&iacute;p gồm 200
//                                                       chuy&ecirc;n gia Mỹ,
//                                                       H&agrave;n Quốc, Canada,
//                                                       Singapore v&agrave;
//                                                       Th&aacute;i Lan tới
//                                                       H&agrave; Nội l&agrave;m
//                                                       việc. Ngo&agrave;i IME
//                                                       Việt Nam, một số đơn vị
//                                                       trong ng&agrave;nh sự kiện
//                                                       Việt Nam cũng tham gia tổ
//                                                       chức chương
//                                                       tr&igrave;nh.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953966"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=aY5kHUi2ta240etivNuPvQ"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=ARWFzWixhVtJu-NI8Ii2ag"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Hc-AxTJ7YZZl6ZiAkOqtrA 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=wZVjLA_SDB9t00D5LBk3VA 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Hc-AxTJ7YZZl6ZiAkOqtrA 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=wZVjLA_SDB9t00D5LBk3VA 2x" />
//                                                             <img
//                                                                   class="lazy lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Hc-AxTJ7YZZl6ZiAkOqtrA"
//                                                                   alt=""
//                                                                   width="1050"
//                                                                   height="727"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4022-JPG-1690461149.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Hc-AxTJ7YZZl6ZiAkOqtrA"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >C&aacute;c h&agrave;ng
//                                                       ghế tại s&acirc;n vận động
//                                                       Mỹ Đ&igrave;nh được
//                                                       l&agrave;m sạch. Đại diện
//                                                       s&acirc;n cho biết đơn vị
//                                                       thu&ecirc; địa điểm tự bố
//                                                       tr&iacute;, sắp xếp mọi
//                                                       kh&acirc;u.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953968"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=Ufn9jONCEgMBTx1gZgI91Q"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=RHea1XxriYQuKdaQ62Pv3A"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uqPHnlx1vHhYlOZnZfDCLg 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=ZpFv3oD_GMRSxY3nnuKG5g 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uqPHnlx1vHhYlOZnZfDCLg 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=ZpFv3oD_GMRSxY3nnuKG5g 2x" />
//                                                             <img
//                                                                   class="lazy lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uqPHnlx1vHhYlOZnZfDCLg"
//                                                                   alt=""
//                                                                   width="1059"
//                                                                   height="743"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4020-JPG-1690461152.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=uqPHnlx1vHhYlOZnZfDCLg"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Khu vực ghế VIP,
//                                                       gi&aacute; 9,8 triệu đồng
//                                                       ở gần s&acirc;n khấu nhất.
//                                                       Blackpink dự kiến diễn
//                                                       khoảng 22 b&agrave;i, bao
//                                                       gồm hit chung lẫn
//                                                       c&aacute;c tiết mục solo,
//                                                       như&nbsp;<em
//                                                             >How You Like That,
//                                                             Pretty Savage,
//                                                             Whistle, Lovesick
//                                                             Girls.</em
//                                                       ></span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p class="Normal">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Theo sơ đồ, c&oacute; đến
//                                                       bảy khu vực xếp ghế ngồi,
//                                                       chỉ một khu vực c&oacute;
//                                                       gi&aacute; v&eacute; 5,8
//                                                       triệu kh&aacute;n giả sẽ
//                                                       đứng.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                               <div class="item_slide_show clearfix">
//                                     <div
//                                           id="slide_show_32953975"
//                                           class="block_thumb_slide_show"
//                                           data-thumbnail-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=220&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=pL-jDb6dK0jHP4XwkhJT1Q"
//                                           data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=0&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=7YmNFem332IolQJmnjPqsw"
//                                           data-size-image="true"
//                                     >
//                                           <div class="block_thumb_picture">
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       ><picture
//                                                             ><source
//                                                                   srcset="
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=7UQRaKJfVVHPv2DRgN9pGg 1x,
//                                                                         https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=QuAei47e63FGSV8ydIVdEg 2x
//                                                                   "
//                                                                   data-srcset="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=7UQRaKJfVVHPv2DRgN9pGg 1x, https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=QuAei47e63FGSV8ydIVdEg 2x" />
//                                                             <img
//                                                                   class="lazy lazied"
//                                                                   style="
//                                                                         display: block;
//                                                                         margin-left: auto;
//                                                                         margin-right: auto;
//                                                                   "
//                                                                   src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=7UQRaKJfVVHPv2DRgN9pGg"
//                                                                   alt=""
//                                                                   width="1053"
//                                                                   height="661"
//                                                                   loading="lazy"
//                                                                   data-src="https://i1-giaitri.vnecdn.net/2023/07/27/IMG-4019-2-JPG-1690461482.jpg?w=1200&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=7UQRaKJfVVHPv2DRgN9pGg"
//                                                                   data-ll-status="loaded" /></picture
//                                                 ></span>
//                                           </div>
//                                     </div>
//                                     <div
//                                           class="desc_cation"
//                                           style="width: 700px; margin: 0px auto"
//                                     >
//                                           <p
//                                                 class="Normal"
//                                                 style="line-height: 1.4"
//                                           >
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Ban tổ chức đang
//                                                       l&ecirc;n phương &aacute;n
//                                                       trong trường hợp thời tiết
//                                                       xấu, đổ mưa.</span
//                                                 >
//                                           </p>
//                                           <p
//                                                 class="Normal"
//                                                 style="line-height: 1.4"
//                                           >
//                                                 <span
//                                                       style="
//                                                             color: rgb(
//                                                                   206,
//                                                                   212,
//                                                                   217
//                                                             );
//                                                       "
//                                                       >Giữa c&ocirc;ng
//                                                       t&aacute;c chuẩn bị, trưa
//                                                       27/7, Trung t&acirc;m Bảo
//                                                       vệ quyền t&aacute;c giả
//                                                       VCPMC đề nghị&nbsp;<a
//                                                             style="
//                                                                   color: rgb(
//                                                                         206,
//                                                                         212,
//                                                                         217
//                                                                   );
//                                                             "
//                                                             href="https://vnexpress.net/concert-blackpink-o-viet-nam-bi-de-nghi-thu-hoi-giay-phep-4634783.html"
//                                                             rel="nofollow"
//                                                             data-itm-source="#vn_source=Detail-GiaiTri_Nhac_LangNhac-4634848&amp;vn_campaign=Box-InternalLink&amp;vn_medium=Link-ThuHoiGiayPhep&amp;vn_term=Desktop&amp;vn_thumb=0"
//                                                             data-itm-added="1"
//                                                             >thu hồi giấy
//                                                             ph&eacute;p</a
//                                                       >
//                                                       sự kiện. Theo VCPMC,
//                                                       c&ocirc;ng ty IME - đơn vị
//                                                       tổ chức đ&ecirc;m diễn -
//                                                       vi phạm bản quyền
//                                                       t&aacute;c giả, đi ngược
//                                                       lại c&aacute;c cam kết với
//                                                       VCPMC v&agrave; những chỉ
//                                                       đạo m&agrave; cơ quan quản
//                                                       l&yacute; đề nghị thực
//                                                       hiện trước khi chương
//                                                       tr&igrave;nh diễn ra. Đại
//                                                       diện Sở Văn h&oacute;a
//                                                       v&agrave; Thể thao
//                                                       H&agrave; Nội cho biết
//                                                       đang t&igrave;m hiểu sự
//                                                       việc.</span
//                                                 >
//                                           </p>
//                                     </div>
//                               </div>
//                         </article>
//                   </td>
//             </tr>
//       </tbody>
// </table>

// <div class="title-detail" style="width: 700px; margin: 0px auto">
//       <h1 class="title-detail">
//             Những vấn đề chờ t&ograve;a ph&aacute;n quyết trong vụ 'chuyến bay
//             giải cứu'
//       </h1>
//       <p class="description" style="line-height: 1.4">
//             <span class="location-stamp">H&Agrave; NỘI</span>Chiếc cặp đựng
//             450.000 USD tiền chạy &aacute;n hay chỉ 4 chai rượu vang, cựu thư
//             k&yacute; thứ trưởng Y tế c&oacute; được giảm &aacute;n so với
//             h&igrave;nh phạt đề nghị tử h&igrave;nh... đang chờ t&ograve;a
//             tuy&ecirc;n chiều nay.
//       </p>
//       <article class="fck_detail">
//             <p class="Normal" style="line-height: 1.4">
//                   Sau 6 ng&agrave;y nghỉ nghị &aacute;n, TAND H&agrave; Nội sẽ
//                   ra ph&aacute;n quyết sơ thẩm với 54 bị c&aacute;o trong vụ
//                   &aacute;n "chuyến bay giải cứu". Trong 12 ng&agrave;y
//                   x&eacute;t xử, hai bị c&aacute;o một mực k&ecirc;u oan
//                   l&agrave; Ho&agrave;ng Văn Hưng v&agrave; Trần Minh Tuấn
//                   (Gi&aacute;m đốc C&ocirc;ng ty Cổ phần x&acirc;y dựng
//                   Th&aacute;i H&ograve;a). Những bị c&aacute;o c&ograve;n lại
//                   thừa nhận to&agrave;n bộ hoặc một phần h&agrave;nh vi, mong
//                   được hưởng khoan hồng.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Đ&acirc;y l&agrave; vụ &aacute;n đặc biệt nghi&ecirc;m trọng,
//                   phức tạp, xảy ra trong bối cảnh Covid-19 b&ugrave;ng
//                   ph&aacute;t, c&aacute;c bị c&aacute;o l&agrave; quan chức
//                   v&agrave; chủ doanh nghiệp đ&atilde; lợi dụng t&igrave;nh
//                   h&igrave;nh dịch bệnh để trục lợi, VKS đ&aacute;nh gi&aacute;.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   <strong
//                         >Cựu thư k&yacute; thứ trưởng Y tế c&oacute; được giảm
//                         nhẹ h&igrave;nh phạt?</strong
//                   >
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Bộ Y tế l&agrave; một trong 5 Bộ tham gia tổ c&ocirc;ng
//                   t&aacute;c thực hiện đưa c&ocirc;ng d&acirc;n về nước. Tại
//                   đ&acirc;y, Cục Y tế dự ph&ograve;ng được giao nhiệm vụ
//                   ph&ecirc; duyệt hoặc từ chối đề xuất của Bộ Ngoại giao về tần
//                   suất, số lượng chuyến bay giải cứu, ph&ugrave; hợp với
//                   t&igrave;nh h&igrave;nh dịch bệnh.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Theo quy tr&igrave;nh, thứ trưởng y tế khi nhận được đề xuất
//                   tổ chức chuyến bay giải cứu, combo (người d&acirc;n phải tự
//                   nguyện trả ph&iacute; to&agrave;n bộ) hoặc kh&aacute;ch lẻ xin
//                   về nước sẽ chuyển cho Cục Y tế dự ph&ograve;ng tham mưu. Mọi
//                   trao đổi giữa cục v&agrave; thứ trưởng đều th&ocirc;ng qua
//                   Phạm Trung Ki&ecirc;n (thư k&yacute; của thứ trưởng).
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Suốt qu&aacute; tr&igrave;nh x&eacute;t xử, bị c&aacute;o
//                   Ki&ecirc;n c&ugrave;ng Vũ Anh Tuấn (cựu ph&oacute;
//                   ph&ograve;ng tham mưu, Cục Quản l&yacute; xuất nhập cảnh, Bộ
//                   C&ocirc;ng an) l&agrave; hai người bị "nhắc" t&ecirc;n nhiều
//                   nhất khi nhiều chủ doanh nghiệp khai bị hai bị c&aacute;o
//                   n&agrave;y "l&agrave;m kh&oacute;" trong cấp ph&eacute;p
//                   chuyến bay nếu kh&ocirc;ng đưa tiền.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Trong 19 doanh nghiệp đưa hối lộ c&oacute; 12 c&ocirc;ng ty
//                   khai Ki&ecirc;n trực tiếp ra gi&aacute; 150-200 triệu đồng cho
//                   mỗi chuyến bay hoặc 1-2 triệu đồng mỗi h&agrave;nh
//                   kh&aacute;ch, theo c&aacute;o buộc.
//             </p>
//             <figure class="tplCaption action_thumb_added" data-size="true">
//                   <div class="fig-picture">
//                         <picture
//                               ><source
//                                     srcset="
//                                           https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OSjUuYOXNkg2TjjVppzSBA  1x,
//                                           https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=O7mq45AiWnTr6AaseimabQ 1.5x,
//                                           https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=d-pMIFUAdMxoVTDOwGvAzA  2x
//                                     "
//                                     data-srcset="https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OSjUuYOXNkg2TjjVppzSBA 1x, https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=1020&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=O7mq45AiWnTr6AaseimabQ 1.5x, https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=d-pMIFUAdMxoVTDOwGvAzA 2x" />
//                               <img
//                                     class="lazy lazied"
//                                     src="https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OSjUuYOXNkg2TjjVppzSBA"
//                                     alt="Bị c&aacute;o Phạm Trung Ki&ecirc;n. Ảnh: Ngọc Th&agrave;nh"
//                                     loading="lazy"
//                                     data-src="https://i1-vnexpress.vnecdn.net/2023/07/28/21-Kie-n-jpeg-1546-1690506940.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=OSjUuYOXNkg2TjjVppzSBA"
//                                     data-ll-status="loaded"
//                         /></picture>
//                   </div>
//                   <figcaption>
//                         <p class="Image">
//                               Bị c&aacute;o Phạm Trung Ki&ecirc;n trong
//                               ng&agrave;y đầu ti&ecirc;n của phi&ecirc;n
//                               t&ograve;a. Ảnh:&nbsp;<em>Ngọc Th&agrave;nh</em>
//                         </p>
//                   </figcaption>
//             </figure>
//             <p class="Normal" style="line-height: 1.4">
//                   Ki&ecirc;n l&agrave; bị c&aacute;o duy nhất bị VKS&nbsp;<a
//                         href="https://vnexpress.net/vks-cuu-thu-ky-thu-truong-y-te-nhan-tien-trang-tron-nhat-4630149.html"
//                         rel="dofollow"
//                         data-itm-source="#vn_source=Detail-PhapLuat-4634933&amp;vn_campaign=Box-InternalLink&amp;vn_medium=Link-DeNghiAnTuHinh&amp;vn_term=Desktop&amp;vn_thumb=0"
//                         data-itm-added="1"
//                         >đề nghị &aacute;n tử h&igrave;nh&nbsp;</a
//                   >với c&aacute;o buộc&nbsp;<em>Nhận hối lộ&nbsp;</em
//                   >"c&ocirc;ng khai, trắng trợn nhất", tổng 42,6 tỷ đồng, 253
//                   lần, trong đ&oacute; 228 lần qua chuyển khoản. Ngo&agrave;i 12
//                   tỷ đồng trả cho c&aacute;c doanh nghiệp trong giai đoạn điều
//                   tra v&agrave; 23 tỷ đồng đ&atilde; nộp trong giai đoạn
//                   x&eacute;t xử, gia đ&igrave;nh &ocirc;ng Ki&ecirc;n đ&atilde;
//                   nộp th&ecirc;m 7 tỷ đồng khi HĐXX nghị &aacute;n.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Trong phần tự b&agrave;o chữa, &ocirc;ng Ki&ecirc;n "nhận lỗi
//                   với nh&acirc;n d&acirc;n". Cho rằng mức &aacute;n VKS đề nghị
//                   "qu&aacute; nghiệt ng&atilde;", cựu thư k&yacute; thứ trưởng
//                   xin được hưởng mức phạt t&ugrave; c&oacute; thời hạn để sớm
//                   trở về với gia đ&igrave;nh.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Theo nghị quyết 03/2020 của Hội đồng thẩm ph&aacute;n TAND Tối
//                   cao đang được &aacute;p dụng, trong qu&aacute; tr&igrave;nh tố
//                   tụng, người phạm tội nhận hối lộ đ&atilde; chủ động nộp lại
//                   &iacute;t nhất ba phần tư t&agrave;i sản nhận hối lộ
//                   th&igrave; kh&ocirc;ng &aacute;p dụng mức cao nhất của khung
//                   h&igrave;nh phạt l&agrave; tử h&igrave;nh.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   <strong>M&acirc;u thuẫn về tiền 'chạy &aacute;n'</strong>
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Khi vụ &aacute;n đang bị điều tra, một nh&oacute;m bốn bị
//                   c&aacute;o, trong đ&oacute; c&oacute; Ho&agrave;ng Văn Hưng
//                   cựu Trưởng ph&ograve;ng 5, Cơ quan An ninh Điều tra, Bộ
//                   C&ocirc;ng an v&agrave; cựu Ph&oacute; gi&aacute;m đốc
//                   C&ocirc;ng an H&agrave; Nội Nguyễn Anh Tuấn đ&atilde; "bắt
//                   tay" để chạy &aacute;n.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   &Ocirc;ng Hưng l&agrave; một trong hai bị c&aacute;o k&ecirc;u
//                   oan suốt những ng&agrave;y x&eacute;t xử.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   VKS c&aacute;o buộc, kết nối với điều tra vi&ecirc;n
//                   ch&iacute;nh của vụ &aacute;n l&agrave; Hưng, &ocirc;ng Tuấn
//                   đ&atilde; nhận 2,6 triệu USD để lo cho bị c&aacute;o L&ecirc;
//                   Hồng Sơn v&agrave; Nguyễn Thị Thanh Hằng (Tổng gi&aacute;m đốc
//                   v&agrave; Ph&oacute; tổng gi&aacute;m đốc C&ocirc;ng ty Bầu
//                   Trời Xanh).
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Theo nh&agrave; chức tr&aacute;ch, &ocirc;ng Hưng đ&atilde;
//                   "đưa th&ocirc;ng tin gian dối" để chiếm đoạt 800.000 USD của
//                   bị c&aacute;o Hằng, vậy c&ograve;n 1,8 triệu USD đang ở
//                   đ&acirc;u? Suốt phần x&eacute;t hỏi v&agrave; tranh luận, bị
//                   c&aacute;o Hưng nhiều lần đề nghị l&agrave;m r&otilde; số tiền
//                   "m&acirc;u thuẫn" n&agrave;y.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   "T&ocirc;i đề nghị VKS phải chứng minh số tiền 1,8 triệu USD
//                   đ&atilde; đi đ&acirc;u về đ&acirc;u, liệu c&oacute; phải
//                   &ocirc;ng Tuấn cũng lừa đảo kh&ocirc;ng?", bị c&aacute;o Hưng
//                   n&oacute;i v&agrave; đặt dấu hỏi rằng nếu &ocirc;ng Tuấn
//                   đ&atilde; nộp lại 1,8 triệu USD th&igrave; "c&oacute; phải
//                   cũng phạm tội lừa đảo chiếm đoạt t&agrave;i sản?".
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Hiện, &ocirc;ng Tuấn đ&atilde; nộp 1,85 triệu USD để khắc phục
//                   hậu quả v&agrave; l&agrave; người nộp lại tiền nhiều nhất
//                   trong 54 bị c&aacute;o.
//             </p>
//             <p class="Normal" style="line-height: 1.4">
//                   Bị c&aacute;o Hưng bị VKS đề nghị 19-20 năm về tội&nbsp;<em
//                         >Lừa đảo chiếm đoạt t&agrave;i sản</em
//                   >, &ocirc;ng Tuấn bị đề nghị 5-6 năm về với c&aacute;o
//                   buộc&nbsp;<em>M&ocirc;i giới hối lộ&nbsp;</em>2,6 triệu USD,
//                   b&agrave; Hằng bị đề nghị 10-11 năm về tội&nbsp;<em
//                         >Đưa hối lộ.</em
//                   >
//             </p>
//       </article>
// </div> -->
