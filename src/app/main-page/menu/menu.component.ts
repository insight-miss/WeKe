import {Component, OnInit} from '@angular/core';
import {MenuService} from './service/menu.service';
import {MenuList} from '../domain/menuList';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../head/head.component.css', '../body/body.component.css']
})
export class MenuComponent implements OnInit {

  selector: number;
  menus: Array<MenuList>;
  array = [ 1, 2, 3, 4 ];

  constructor(private menueService: MenuService) {
  }

  onHover(num: number): void {
    this.selector = num;
  }
  getMenus(): void {
    this.menueService.getMenuList().subscribe((menus: Array<MenuList>) => {
      this.menus = menus;
      console.log(this.menus);
    });
  }

  // 保存用户选择
  selectDirection(direction: string, kind: string) {
    localStorage.setItem("direction", direction);
    localStorage.setItem("kind", kind);
  }

  ngOnInit() {
    this.getMenus();
  }

}
