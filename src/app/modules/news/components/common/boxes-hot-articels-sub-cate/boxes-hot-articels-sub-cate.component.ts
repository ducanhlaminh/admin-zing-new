import { Component, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-boxes-hot-articels-sub-cate',
  templateUrl: './boxes-hot-articels-sub-cate.component.html',
  styleUrls: ['./boxes-hot-articels-sub-cate.component.scss'],
})
export class BoxesHotArticelsSubCateComponent {
  @Input() hotArticlesSubCate: any[] = [];
  constructor(public renderer: Renderer2) {}
  handleImageError(event: any) {
    const fallbackImage =
      'https://nic.gov.vn/wp-content/plugins/elementor/assets/images/placeholder.png';
    this.renderer.setAttribute(event.target, 'src', fallbackImage);
  }
}
