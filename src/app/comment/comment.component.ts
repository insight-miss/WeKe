import { Component, OnInit } from '@angular/core';
import {PublishComponent} from '../publish/publish.component';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  content: string;
  constructor(private dialogRef: MatDialogRef<CommentComponent>) { }

  onSure() {
    this.dialogRef.close(this.content);
    console.log("comm"+this.content);
  }

  ngOnInit() {
  }

}
