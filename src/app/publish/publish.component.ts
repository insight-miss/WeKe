import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {CommentComponent} from '../comment/comment.component';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css','../comment/comment.component.css']
})
export class PublishComponent implements OnInit {

  content: string;
  flag: string = '0';
  havato: string;

  constructor(private dialogRef: MatDialogRef<PublishComponent>,
              private dialog: MatDialog) {
  }

  changeStatu(flag: string): void{
    this.flag = flag;
  }


  onSure() {
    if (this.content){
      this.dialogRef.close(this.content);
    } else {
      this.havato = '1';
    }
  }

  ngOnInit() {
  }

}
