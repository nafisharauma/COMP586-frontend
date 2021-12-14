import { Component, OnInit } from '@angular/core';
import { AccountDetails } from 'src/model/AccountDetails.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/model/login.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from 'src/model/employee';
import { User } from 'src/model/user.model';
import { ResponseMessage } from 'src/model/ResponseMessage.model';
import { ResponseLogin } from 'src/model/ResponseLogin.model';
import { adminhomeService } from './admin-home-service';
import { Router } from '@angular/router';
import { ChequeBookReq } from 'src/model/ChequeBookReq';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
 
@Injectable()
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  //url = 'http://localhost:33580/api/';  
   
  accountDetails:AccountDetails[] = [];
  chqdetails:ChequeBookReq[] = [];
  constructor(private adminhomeservice:adminhomeService,private router:Router
    ,private spinner:NgxSpinnerService, private toastr:ToastrService) { }

  ngOnInit(): void { 
    this.showAccountlist();
    this.showchqbookreq();
  }

  showAccountlist():void{  
    this.spinner.show();
    this.adminhomeservice.getAccountlist().subscribe((data)=>{
      this.accountDetails = data as AccountDetails[]; 
    },(err)=>{
      this.toastr.error(err,'Alert'),
      this.spinner.hide();
    });
  }
  showchqbookreq():void{  
    this.spinner.show();
    this.adminhomeservice.getchqreq().subscribe((data)=>{
      this.chqdetails = data as ChequeBookReq []; 
    },(err)=>{
      this.toastr.error(err,'Alert'),
      this.spinner.hide();
    });
  }

  logout():void{
    sessionStorage.clear();
    this.router.navigate(['adminlogin']);
  }


}
 
