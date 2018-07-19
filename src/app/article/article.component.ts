import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  content = '<p>Hello <strong>World !</strong></p>';
  conf: any = {
    extraPlugins: `clipboard,lineutils,lineheight,widget,dialog,codesnippet`,
    codeSnippet_theme: 'monokai_sublime',
    filebrowserImageUploadUrl: ''
  };

  change(event): void {
    console.log(event);
  }

  ngOnInit(): void {
  }
}
