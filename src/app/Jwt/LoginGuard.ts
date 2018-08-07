import {CanActivate} from "@angular/router";
import {EmitService} from "../route/emit.service";
import {NzMessageService} from "ng-zorro-antd";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate{

  constructor(private  emitService: EmitService) {}

  canActivate() {

    if (localStorage.getItem('token') == null) {
      this.emitService.eventEmit.emit("login");
      return false;
    }
    console.log('登录成功过' + localStorage.getItem('token'));
    console.log('登录成功过' + localStorage.getItem('userName'));
    // localStorage.removeItem('token');
    // localStorage.removeItem('userName');
    return true;
  }

}
