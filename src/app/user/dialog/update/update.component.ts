import {Component, Inject, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Photo} from "../../domian/photo";

/**
 * 上传头像
 */
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['../../user.component.css']
})
export class UpdateComponent implements OnInit {

  file: File = null;
  imgUrl: any;
  fileName = '头像上传';

  constructor(private sanitizer : DomSanitizer, private dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.imgUrl = data;
  }

  changePic(event) {
    const file = event.target.files[0];
    this.file = file;
    this.fileName = this.file.name;
    const imhUrl = window.URL.createObjectURL(file);
    const sanUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imhUrl);
    this.imgUrl = sanUrl.valueOf();
  }

  onSave(kind: string, file: HTMLInputElement) {
    console.log("cc"+file);
    const photo = new Photo(kind, file);
    this.dialogRef.close(photo);
  }

  ngOnInit() { }

}
