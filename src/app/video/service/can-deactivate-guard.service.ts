import { Injectable } from '@angular/core';
import {CanDeactivate} from "@angular/router";
import {VideoComponent} from "../video.component";
import {EmitService} from "../../route/emit.service";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<VideoComponent> {

  constructor(private emitService : EmitService) { }

  canDeactivate(){
    console.log("dfs");
    this.emitService.eventEmit.emit("isNotView");
    return true;
  }
}
