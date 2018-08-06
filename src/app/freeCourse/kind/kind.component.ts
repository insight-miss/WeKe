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
    this.kindService.getInfo(this.direction, this.kind, this.diff).subscribe((menu: Menu) => this.menu = menu);
  }

  onSelect(direction: string, kind: string, diff: string) {
    this.direction = direction;
    this.kind = kind;
    this.diff = diff;
    this.getMenu();
  }

  // 判断是否从首页跳转而来
  directiveThis() {
    let dire = localStorage.getItem("direction");
    let kin = localStorage.getItem("kind");
    if (dire != null && kin != null) {
      this.kind = kin;
      this.direction = dire;
      localStorage.removeItem("direction");
      localStorage.removeItem("kind");
    }
  }


  ngOnInit() {
    this.directiveThis();
    this.getMenu();
  }
}
