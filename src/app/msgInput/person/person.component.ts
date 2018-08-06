import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Person} from '../domain/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person;
  person2: Person;// 备份
  flag: string = '0';

  constructor(private dialogRef: MatDialogRef<PersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Person) {
    this.person2 = new Person(this.data.url,this.data.nickname, this.data.job, this.data.address, this.data.sex, this.data.info);
  }

  selectSex(sex: string){
    this.data.sex = sex;
  }

  copyPerson(p1: Person, p2: Person) {
    p1.info = p2.info;
    p1.address = p2.address;
    p1.nickname = p2.nickname;
    p1.url = p2.url;
    p1.job = p2.job;
    p1.sex = p2.sex;
  }

  onSave(flag: string): void{
    console.log("flag "+flag);
     if (flag === '1'){
       if (this.data.nickname!='' && this.data.job!='' && this.data.address!='' && this.data.info!=''){
         this.person = new Person(this.data.url,this.data.nickname, this.data.job, this.data.address, this.data.sex, this.data.info);
         console.log(this.person);
         this.dialogRef.close(this.person);
       } else {
         this.copyPerson(this.data, this.person2);
         this.flag = '1';
       }
     } else {
       this.copyPerson(this.data, this.person2);
       this.dialogRef.close(this.person2);
     }
    console.log("this flag "+this.flag);
  }

  ngOnInit() {

  }

}
