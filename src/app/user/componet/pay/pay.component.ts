import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {OrderMsg} from "../../domian/orderMsg";
import {PayService} from "./service/pay.service";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  msg: string = '未完成支付';

  constructor(private dialogRef: MatDialogRef<PayComponent>, @Inject(MAT_DIALOG_DATA) public orderMsg: OrderMsg,public payService: PayService) {
    console.log(orderMsg.qrCode);
  }

  jungleOrder() {
    this.payService.jungleOrder("让让群", this.orderMsg.orderNo).subscribe(result => {
      if (result.msg === 'success') {
        this.msg = "交易成功";
        this.close();
      }else {
        this.msg = '你还未付款';
      }
    });
  }

  close() {
    this.dialogRef.close("true");
  }
  ngOnInit() {
  }

}
