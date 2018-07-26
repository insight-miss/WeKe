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
  flag: string = '0';

  constructor(private dialogRef: MatDialogRef<PersonComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Person) { }

  selectSex(sex: string){
    this.data.sex = sex;
  }

  onSave(flag: string): void{
    // console.log(this.nickname+" "+this.job+ " "+this.address+" "+this.sex+ " "+this.info);
     if (flag === '1'){
       if (this.data.nickname!=null && this.data.job!=null && this.data.address!=null && this.data.info!=null){
         this.person = new Person("",this.data.nickname, this.data.job, this.data.address, this.data.sex, this.data.info);
         console.log(this.person);
         this.dialogRef.close(this.person);
       } else {
         this.flag = '1';
       }
     } else {
       this.dialogRef.close(null);
     }
  }

  ngOnInit() {
  }

}
