import { Component, OnInit } from '@angular/core';
import { Fundwithdrawal } from 'src/model/Fundwithdrawal';
import {fundwithdrwalservice} from './fundwithdrwalservice';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-withdrawl',
  templateUrl: './fund-withdrawl.component.html',
  styleUrls: ['./fund-withdrawl.component.css']
})
export class FundWithdrawlComponent implements OnInit {

  Fundwithdrawal:Fundwithdrawal = new Fundwithdrawal(); 
  
  constructor(private fundwithdrwalservice:fundwithdrwalservice, private toastr:ToastrService,
    private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
  }
  FundWithdrawl():void{
    this.fundwithdrwalservice.Fundwithdrwal(this.Fundwithdrawal).subscribe((data)=>
    {
      let message = data.message;
      if(message == 'Fund withdrawl successfully.'){
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
    console.log(this.FundWithdrawl); 
  }
}

