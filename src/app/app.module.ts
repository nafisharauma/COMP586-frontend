import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import { LoginComponent } from './login.component'
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginService } from './login.service';
import { HomeComponent } from './home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { RegisterComponent } from './register.component';
import { UserModule } from './user/user.module';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FundDepositComponent } from './fund-deposit/fund-deposit.component';
import { FundWithdrawlComponent } from './fund-withdrawl/fund-withdrawl.component';
import { AccountTransferComponent } from './account-transfer/account-transfer.component';
import { ChequeBookRequestComponent } from './cheque-book-request/cheque-book-request.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { funddepositService } from './fund-deposit/funddepositservice';
import { fundwithdrwalservice } from './fund-withdrawl/fundwithdrwalservice';
import { adminhomeService } from './admin-home/admin-home-service';
import { ChequeBookRequestService } from './cheque-book-request/ChequeBookRequestService';
import { FundtransferComponent } from './fundtransfer/fundtransfer-component';
import { JwtInterceptor } from './jwt-interceptor';
 



const appRotues:Routes=[];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminloginComponent,
    FundDepositComponent,
    FundWithdrawlComponent,
    AccountTransferComponent,
    ChequeBookRequestComponent,
    AdminHomeComponent,
    FundtransferComponent
    ],
  imports: [
    BrowserModule,
    MatDialogModule,
    HttpClientModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRotues,{useHash:true}),
    ToastrModule.forRoot(),
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxSpinnerModule,
    UserModule,
    IvyCarouselModule,
    DateInputsModule,
    NgxSpinnerModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers:[LoginService,funddepositService,fundwithdrwalservice,adminhomeService,
    ChequeBookRequestService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }]
})
export class AppModule { }
