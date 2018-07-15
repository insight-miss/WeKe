import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sum = 20;
  constructor() { }

  rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start);


  ngOnInit() {
  }

}
