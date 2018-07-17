import {Component, OnInit} from '@angular/core';
import {KindService} from './service/kind.service';
import {Menu} from './domain/menu';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.css']
})
export class KindComponent implements OnInit {
  menu: Menu;
  direction: string = 'all';
  kind: string = 'all';
  diff: string = 'all';

  constructor(private kindService: KindService) {
  }

  getMenu(): void {
    this.kindService.getInfo(this.direction, this.kind, this.diff).subscribe(menu => this.menu = menu);
  }

  onSelect(direction: string, kind: string, diff: string) {
    this.direction = direction;
    this.kind = kind;
    this.diff = diff;
  }


  ngOnInit() {
    this.getMenu();
  }
}
