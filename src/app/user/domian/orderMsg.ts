export class OrderMsg {

  orderNo: string;
  qrCode: string;
  totleFee: string;// 支付金额
  subject: string;


  constructor(orderNo: string, qrCode: string, totleFee: string, subject: string) {
    this.orderNo = orderNo;
    this.qrCode = qrCode;
    this.totleFee = totleFee;
    this.subject = subject;
  }
}
