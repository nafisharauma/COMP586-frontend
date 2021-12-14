import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/model/login.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from 'src/model/employee';
import { User } from 'src/model/user.model';
import { ResponseMessage } from 'src/model/ResponseMessage.model';
import { ResponseLogin } from 'src/model/ResponseLogin.model';
import { FundDeposit } from 'src/model/FundDeposit';
import { FundWithdrawlComponent } from './fund-withdrawl.component';
import { Fundwithdrawal } from 'src/model/Fundwithdrawal';
import { FundTransfer } from 'src/model/FundTransfer';

@Injectable()
export class fundwithdrwalservice{

     
    url = 'https://onlinebanking.azurewebsites.net/api/';
 
    constructor(private http:HttpClient){ 
    }
 
    Fundwithdrwal(Fundwithdrwal:Fundwithdrawal):Observable<ResponseMessage>{
        return this.http.post<ResponseMessage>(this.url+'project/FundWithdrawl',Fundwithdrwal).pipe(catchError(this.handleError));
    }

    FundTransfer(Fundtransfer:FundTransfer):Observable<ResponseMessage>{
        return this.http.post<ResponseMessage>(this.url+'project/AccountTransfer',Fundtransfer).pipe(catchError(this.handleError));
    }

 

    private handleError(errorResponse : HttpErrorResponse)
    {
       if(errorResponse.error instanceof ErrorEvent)
       {
          // console.log("Client side Error: ",errorResponse.error.message);
       }
       else
       {
           //console.error("Server Side Error: ",errorResponse.error.message);
       }
       return throwError("There is a problem with the service.We are notified & working on it.Please try again later");
   }
}