import { Component, OnInit } from '@angular/core';
import {UserInfo} from "./domain/UserInfo";
import {UserInfoService} from "./service/user-info.service";

@Component({
  selector: 'app-user-managemet',
  templateUrl: './user-managemet.component.html',
  styleUrls: ['./user-managemet.component.css']
})
export class UserManagemetComponent implements OnInit {

  i = 1;
  editCache = {};
  dataSet = [];

  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  cancelEdit(key: string): void {
    this.editCache[ key ].edit = false;
  }

  saveEdit(key: string): void {
    const index = this.dataSet.findIndex(item => item.key === key);
    this.dataSet[ index ] = this.editCache[ key ].data;
    this.editCache[ key ].edit = false;

    console.log(this.dataSet[index]);
    this.userInfoService.changeUserInfo(this.dataSet[index]).subscribe(
      res => {
        console.log("res:"+res);
      }
    );
    this.updateEditCache();
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          data: item
        };
      }
    });
  }

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe(
      res => {
        if (res ) {
          console.log(res);
          this.userInfoService.userInfo = res;
          this.dataSet = res;
          this.updateEditCache();

          console.log(this.dataSet)
        }
      }
    );
  }

  constructor(private userInfoService : UserInfoService) {}
}
