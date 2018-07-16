import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../head/head.component.css', '../body/body.component.css']
})
export class MenuComponent implements OnInit {

  selector: number;
  constructor() { }

  onHover(num: number): void {
    this.selector = num;
  }


  ngOnInit() {
  }

}
