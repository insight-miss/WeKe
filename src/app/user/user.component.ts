import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {PersonComponent} from '../msgInput/person/person.component';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../msgInput/domain/person';
import {UserService} from './service/user.service';
import {History} from './domian/history';
import {UpdateComponent} from "./dialog/update/update.component";
import {Photo} from "./domian/photo";
import {PayComponent} from "./componet/pay/pay.component";
import {OrderMsg} from "./domian/orderMsg";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../ali-pay/ali-pay.component.css']
})
export class UserComponent implements OnInit {

  personMsg: any;
  userName: string;
  orderMsg: OrderMsg;
  person: Person;
  historys: History[];
  isVisible = false;
  selected: string='1';
  file: Photo;
  constructor(private dialog: MatDialog, private route: ActivatedRoute,private userService: UserService) { }

  openDialog(){
    const dialogRef = this.dialog.open(PersonComponent,{
      data:this.person
    });
    dialogRef.afterClosed().subscribe(result => {
      this.personMsg = result;
      this.userService.savaPerson(result);
    });
  }

  // 支付
  openPay() {
    const dialogRef = this.dialog.open(PayComponent,{
      data:this.orderMsg
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result != null && result === 'true') {
        this.person.permission = 'Teacher';
        this.selector('1');
      }
    })
  }

  jungleOrder() {
    this.userService.jungleOrderNo('让让群').subscribe(result => this.orderMsg=result);
  }

  // 上传头像
  openUpload() {
    const  dialogRef = this.dialog.open(UpdateComponent, {
      data: this.person.url
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.file = result;
      console.log("file ");
      if (this.file.kind === '1'){
        this.upload(this.file.file);
      }
    })
  }

  // 上传头像
  upload(file: HTMLInputElement) {
    if (file.value.length === 0) {
      return;
    }
    const files: FileList = file.files;
    const fileLength = files.length;
    const formData: FormData = new FormData();
    for (let index = 0; index < fileLength; index++) {
      const singleFile = files.item(index);
      formData.append('file', singleFile);
      console.log(singleFile);
    }
    this.userService.uploadPhoto(formData).subscribe(result =>{
      this.person.url = result.url;
      console.log("url: "+this.person.url);
    });
  }


  selector(select: string){
    this.selected = select;
    if (select === '3'){
      this.jungleOrder();
    }
  }
  getPerson(){
    this.userService.getPersonById().subscribe(result => {
      this.person=result
    });
  }
  getHistory(){
    this.userService.getHistoryById().subscribe(
      result => {
        console.log(result);
        if (result) {
          this.historys=result;
        }

      }
    );
  }


  ngOnInit() {
    this.getPerson();
    this.getHistory();
  }

  isEmail = false;

  emailOk() {
    this.isEmail = false;
  }

  emailCancel() {
    this.isEmail = false;
  }

  showEmail() {
    this.isEmail = true;
  }
}
