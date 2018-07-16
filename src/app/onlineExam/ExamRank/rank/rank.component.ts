import { Component, OnInit } from '@angular/core';
import {Rankinfo} from "../domin/rankinfo";

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  userInfos: Rankinfo[] = [{'rank' : 1 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 2 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 3 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 4 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 5 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 6 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 7 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 8 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 9 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 10 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 11 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 12 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 13 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},
    {'rank' : 14 , 'name': 'Ts' , 'grade': 98 , 'statues': 40},];

  rangeArray = (start, end) => Array(end - start + 1).fill(0).map((v, i) => i + start);


  constructor() { }

  ngOnInit() {
  }

}
