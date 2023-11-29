import { Component, OnInit } from '@angular/core';
import { UserService } from './modules/news/services/user.service';
@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
      title = 'zing_news_fe';
      constructor(private userService: UserService) {}
      ngOnInit() {
            setTimeout(() => {
                  this.userService.getDataInforUser();
            }, 1000);
      }
      onScroll() {
            console.log('scrolled!!');
      }
}
