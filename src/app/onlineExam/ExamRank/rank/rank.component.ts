import { Component, OnInit } from '@angular/core';
import {Rankinfo} from "../domin/rankinfo";
import {RankServiceService} from "../service/rank-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  userInfos: Rankinfo[];

  examName = '';

  rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start);


  constructor(private rankService:RankServiceService,
              private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    const testId = this.activeRouter.snapshot.params["id"];
    this.rankService.getRank(testId).subscribe(
      res => {
        if (res) {
          this.userInfos = res;
          this.examName = this.userInfos[0].examName;
        }
      }
    )
  }

}
