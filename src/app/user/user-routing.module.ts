import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMasterComponent } from './user-master.component';
import { UserHomeComponent } from './user-home.component';
import { FundWithdrawlComponent } from '../fund-withdrawl/fund-withdrawl.component';
import { FundDepositComponent } from '../fund-deposit/fund-deposit.component';
import { ChequeBookRequestComponent } from '../cheque-book-request/cheque-book-request.component';
import { FundtransferComponent } from '../fundtransfer/fundtransfer-component';


const routes: Routes = [
  {path:'user',component:UserMasterComponent,children:
    [
      {path:'home',component:UserHomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'FundWithdrwal',component:FundWithdrawlComponent},
      {path:'FundDeposit',component:FundDepositComponent} ,
      {path:'ChequeBookReq',component:ChequeBookRequestComponent},
      {path:'Fundtransfer',component:FundtransferComponent}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
