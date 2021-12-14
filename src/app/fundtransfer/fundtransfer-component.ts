import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FundTransfer } from 'src/model/FundTransfer';
import { fundwithdrwalservice } from '../fund-withdrawl/fundwithdrwalservice';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer-component.html',
  styleUrls: ['./fundtransfer-component.css']
})
export class FundtransferComponent implements OnInit { 
   
  FundTransfer:FundTransfer = new FundTransfer(); 

  
  constructor(private fundwithdrwalservice:fundwithdrwalservice, private toastr:ToastrService,
    private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
  }
  FundTransfers():void{
    this.fundwithdrwalservice.FundTransfer(this.FundTransfer).subscribe((data)=>
    {
      let message = data.message;
      if(message == 'Money Transfered successfully'){
        this.toastr.success(data.message,'Alert');
        this.router.navigate(['user/home']);
      }
      else
        this.toastr.error(data.message,'Alert');
      this.spinner.hide();
    },(err)=>{
      this.toastr.error(err,'Alert');
      this.spinner.hide();
    })
    console.log(this.FundTransfer); 
  }
}
