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


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string;

  constructor(private http:HttpClient,private loginService : LoginService) {
      this.url = loginService.url;
   }

  getTransactionHistory(AccountNumber:string):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.url+"user/transaction/"+AccountNumber).
    pipe(catchError(this.handleError));
  }

  getAccountDetails(UserID:string):Observable<AccountDetails[]>{
    return this.http.get<AccountDetails[]>(this.url+"user/accountdetails/"+UserID).
    pipe(catchError(this.handleError));
  }

  applyForFD(fd:FixedDeposit):Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>(this.url+"user/applyForFD",fd).
    pipe(catchError(this.handleError))
  }

  checkForFD(AccountNumber:string):Observable<ResponseMessage>{
    return this.http.get<ResponseMessage>(this.url+"user/checkFd/"+AccountNumber,).
    pipe(catchError(this.handleError))
  }

  appyForServices(services:AvailedService):Observable<ResponseMessage>{
    return this.http.post<ResponseMessage>(this.url+"user/applyForServices",services).
    pipe(catchError(this.handleError))
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
