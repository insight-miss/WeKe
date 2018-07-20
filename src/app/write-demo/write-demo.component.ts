import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-write-demo',
  templateUrl: './write-demo.component.html',
  styleUrls: ['./write-demo.component.css']
})
export class WriteDemoComponent implements OnInit {

  contents: Content;
  content: string;
  title: string;
  conf: any = {
    extraPlugins: `clipboard,lineutils,lineheight,widget,dialog,codesnippet`,
    codeSnippet_theme: 'monokai_sublime',
    filebrowserImageUploadUrl: ''
  };

  change(event): void {

  }

  constructor(private dialogRef: MatDialogRef<WriteDemoComponent>) {
  }

  onSave(): void {
    this.contents = new Content(this.title, this.content);
    this.dialogRef.close(this.contents);
  }

  ngOnInit() {
  }

}

export class Content {
  title: string;
  content: string;
  constructor(title: string, content: string){
    this.title = title;
    this.content = content;
  }

}
