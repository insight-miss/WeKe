import { Component } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd";
import {MessagePushService} from "./service/message-push.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeKe';

  num: number =0 ;

  constructor(private notification: NzNotificationService,
              private messagePushService : MessagePushService) {
    // setInterval(() => {
    //   this.num++;
    //
    //   if (this.num % 10 == 0) {
    //     this.messagePushService.getMessage().subscribe(
    //       res => {
    //         if (res) {
    //           this.notification.remove();
    //           this.notification.config({
    //             nzPlacement: 'bottomRight'
    //           });
    //           this.notification.blank(res.title, res.content,
    //             { nzDuration: 0 });
    //         }
    //       }
    //     );
    //   }
    // },1000);
  }
}
