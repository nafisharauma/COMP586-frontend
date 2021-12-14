import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  AccountNumber:string;
  FullName:string;
  OpeningDate:string;
  Currentbalance:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.AccountNumber =  sessionStorage.getItem("AccountNumber");
    this.FullName = sessionStorage.getItem("FullName");
    this.OpeningDate = sessionStorage.getItem("OpeningDate");
    this.Currentbalance = sessionStorage.getItem("Currentbalance");

  }

  goToFundDeposit():void{
    this.router.navigate(['user/FundDeposit']);
  }

  goToFUndWithdrwal():void{
    this.router.navigate(['user/FundWithdrwal']);
  }

  gotToFundTransfer():void{
    this.router.navigate(['user/Fundtransfer']);
  }
  gotToChequeBookReq():void{
    this.router.navigate(['user/ChequeBookReq']);
  }

}
