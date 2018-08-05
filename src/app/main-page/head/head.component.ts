import { Component, OnInit } from '@angular/core';
import {EmitService} from "../../route/emit.service";
import {LoginService} from "../../onlineExam/login/service/login.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(public emitService: EmitService,
              private loginService : LoginService) { }

  ngOnInit() {
  }

  login() {
    this.emitService.eventEmit.emit("login");
  }

  register() {
    this.emitService.eventEmit.emit("register");
  }

  getUserName(): string {
    // const name = localStorage.getItem("userName");
    // console.log("name="+name);
    return localStorage.getItem("token");
  }
}
