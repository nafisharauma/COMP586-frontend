import { Component, OnInit } from '@angular/core';
import { Accounttransfer } from 'src/model/Accounttransfer';

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css']
})
export class AccountTransferComponent implements OnInit {
  
  AccountTransfer : Accounttransfer = new Accounttransfer();
  constructor() { }

  ngOnInit(): void {
  }
  AccountTransfers():void{
  }
}
