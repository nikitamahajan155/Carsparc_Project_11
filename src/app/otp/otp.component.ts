import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'otp-comp',
    templateUrl: './otp.component.html',
    styleUrls: ['./otp.component.css']
})

export class OtpComponent implements OnInit{
  
  
  codeGenerated = '';
  randomString() {
 const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ';
 const stringLength = 8;
 let randomstring = '';
 for (let i = 0; i < stringLength; i++) {
 const rnum = Math.floor(Math.random() * chars.length);
 randomstring += chars.substring(rnum, rnum + 1);
}
 this.codeGenerated = randomstring;
 return 0;
  }

 ngOnInit(){
    this.randomString()

}
}