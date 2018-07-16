import { Component, OnInit } from '@angular/core';
import {DetailsService} from '../service/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sum: number;
  pos = 1;
  constructor(private detailsService: DetailsService) { }

  rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start);


  ngOnInit() {
    this.sum = this.detailsService.getQuestions().length;
  }
  getPos() {
    ++this.pos;
  }
  setPos(currentPos: number) {
    this.pos = currentPos;
  }
  selectCheckBox(check: boolean , value: string) {
    var index:number = this.selectHobby.indexOf(value);
  }
}
