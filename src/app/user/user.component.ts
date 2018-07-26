import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {PersonComponent} from '../msgInput/person/person.component';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../msgInput/domain/person';
import {UserService} from './service/user.service';
import {History} from './domian/history';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  personMsg: any;
  person: Person;
  historys: History[];
  selected: string='1';
  constructor(private dialog: MatDialog, private route: ActivatedRoute,private userService: UserService) { }

  openDialog(){
    const dialogRef = this.dialog.open(PersonComponent,{
      data:this.person
    });
    dialogRef.afterClosed().subscribe(result => {
      this.personMsg = result;
      if (this.personMsg === 'null'){
        console.log("no");
      } else{
        console.log("user "+this.personMsg.nickname);
      }
    });
  }

  selector(select: string){
    this.selected = select;
  }
  getPerson(){
    this.userService.getPersonById().subscribe(result => this.person=result);
  }
  getHistory(){
    this.userService.getHistoryById().subscribe(result => this.historys=result);
  }

  ngOnInit() {
    this.getPerson();
    this.getHistory();
  }

}
