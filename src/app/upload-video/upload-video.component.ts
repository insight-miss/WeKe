import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  constructor(private msg: NzMessageService) {
  }

  // tslint:disable-next-line:typedef
  handleChange({file, fileList}): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    // if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    // } else if (status === 'error') {
    //   this.msg.error(`${file.name} file upload failed.`);
    // }
  }

  ngOnInit(): void {
  }

}
