import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FundDepositComponent } from './fund-deposit/fund-deposit.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component'; 
import { RegisterComponent } from './register.component';
import { UserHomeComponent } from './user/user-home.component';
import { ChequeBookRequestComponent } from './cheque-book-request/cheque-book-request.component';
import { ChequeBookRequestService } from './cheque-book-request/ChequeBookRequestService';

const routes: Routes = [
  {path:'adminlogin',component:AdminloginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'adminhome',component:AdminHomeComponent},
  {path:'login',component:LoginComponent},
  {path:'fund-deposit',component:FundDepositComponent},
  {path:'UserHome',component:UserHomeComponent},
  {path:'cheque-book-request',component:ChequeBookRequestComponent},
  {path:'adminhome',component:AdminHomeComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
