import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMasterComponent } from './user-master.component';
import { UserHomeComponent } from './user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [UserMasterComponent, UserHomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    NgxSpinnerModule
  ]
})
export class UserModule { }
