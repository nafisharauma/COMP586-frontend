import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Transaction } from 'src/model/Transaction.model';
import { LoginService } from '../login.service';
import { catchError } from 'rxjs/operators';
import { AccountDetails } from 'src/model/AccountDetails.model';
import { FixedDeposit } from 'src/model/FixedDeposit.model';
import { ResponseMessage } from 'src/model/ResponseMessage.model';
import { AvailedService } from 'src/model/AvailedService.model';
import { ChequeBookReq } from 'src/model/ChequeBookReq';


@Injectable({
  providedIn: 'root'
})
export class adminhomeService {

  url = 'https://onlinebanking.azurewebsites.net/api/';

  constructor(private http:HttpClient) {
      
   }

   getAccountlist():Observable<AccountDetails[]>{
    return this.http.get<AccountDetails[]>(this.url+"project/GetUsers").pipe(catchError(this.handleError));
  }

  getchqreq():Observable<ChequeBookReq[]>{
    return this.http.get<ChequeBookReq[]>(this.url+"project/GetChqrequest").pipe(catchError(this.handleError));
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
