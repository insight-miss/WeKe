import {Component, OnInit, Optional} from '@angular/core';
import {ProblemService} from "./service/problem.service";
import {Questions} from "../examDetails/domain/questions";
import {Option} from "../examDetails/domain/option";
import {Router} from "@angular/router";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  content = '';
  conf: any = {
    extraPlugins: `clipboard,lineutils,lineheight,widget,dialog,codesnippet`,
    codeSnippet_theme: 'monokai_sublime',
    filebrowserImageUploadUrl: ''
  };

  change(event): void {
    this.problem.problem = event;
    console.log(this.problem.problem);
  }
  constructor(private problemService: ProblemService,
              private rout: Router) { }

  ngOnInit() {
  }

  // 图标修改
  iconFlag = 'false';
  setIconFlag(flags: string) {
    this.iconFlag = flags;
  }

  //删除图标
  deleteFlag = 0;
  setDelete(flags: number) {
    this.deleteFlag = flags;
  }

  // 添加选项框
  optionLen=1;
  options : Array<Option> = [ new Option(null,'')];
  problem = new Questions(null,null,null,null,null,null,null,null);
  addInput() {
    console.log("添加选项");
    this.optionLen++;
    const o = new Option(null,null);
    this.options.push(o);
    console.log(this.problem);
  }
  deleteInput(content: string) {

    let i = 0;
    for (let option of this.options) {
      if (option.optionDetails === content) {
        this.options.splice(i,1);
        break;
      }
      i++;
    }

    console.log(this.options);
  }
  //题型
  problemType='单项选择题';

  createProblem() {
    this.problem.type = this.judgeType(this.problemType);
    this.problem.options = this.options;
    this.problemService.getProblems().push(this.problem);
    console.log(this.problem);
    this.rout.navigateByUrl("publicProblem");
  }

  judgeType(types: string) : number {
    if (types === '单项选择题') {
      return 2;
    } else if (types == '不定选择题'){
      return 1;
    } else if (types == '判断题'){
      return 4;
    } else {
      return 3;
    }
  }
}
