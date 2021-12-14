import { Component, OnInit } from '@angular/core';
import { ChequeBookReq } from 'src/model/ChequeBookReq';
import { ChequeBookRequestService } from './ChequeBookRequestService';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cheque-book-request',
  templateUrl: './cheque-book-request.component.html',
  styleUrls: ['./cheque-book-request.component.css']
})
export class ChequeBookRequestComponent implements OnInit {

  chequeBk:ChequeBookReq = new ChequeBookReq();

  constructor(private ChequeBookRequestService:ChequeBookRequestService, private toastr:ToastrService,
    private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
  }
  ChequeBookRequests():void{ 
    this.ChequeBookRequestService.getChequeBookRequest(this.chequeBk).subscribe((data)=>
    {
      let message = data.message;
      if(message == 'Chequebook Request sent Successfully'){
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
    console.log(this.chequeBk); 
  }

}
