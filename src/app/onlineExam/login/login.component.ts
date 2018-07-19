import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  //记住密码
  checked = true;
  setCheck() {
    this.checked = false;
  }

  //同意
  agree = true;
  setAgree() {
    this.agree = false;
  }

  // 登录注册
  choiceFlag = 1;
  setLogin() {
    this.choiceFlag = 1;
  }
  setRegsiter() {
    this.choiceFlag = 2;
  }
}
