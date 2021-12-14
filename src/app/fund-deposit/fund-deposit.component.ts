import { Component, OnInit } from '@angular/core';
import { FundDeposit } from 'src/model/FundDeposit';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { funddepositService } from './funddepositservice';

@Component({
  selector: 'app-fund-deposit',
  templateUrl: './fund-deposit.component.html',
  styleUrls: ['./fund-deposit.component.css']
})
export class FundDepositComponent implements OnInit {

  FundDeposit:FundDeposit = new FundDeposit();
  
  constructor(private fundepsoitService:funddepositService, private toastr:ToastrService,
    private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
  }
  FundDeposits():void{ 
    this.fundepsoitService.Funddepositact(this.FundDeposit).subscribe((data)=>
    {
      let message = data.message;
      if(message == 'Fund deposit successfully'){
        this.toastr.success(data.message,'Alert');
        this.router.navigate(['login']);
      }
      else
        this.toastr.error(data.message,'Alert');
      this.spinner.hide();
    },(err)=>{
      this.toastr.error(err,'Alert');
      this.spinner.hide();
    })
    console.log(this.FundDeposit); 
  }
}
  