import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/model/login.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ResponseLogin } from 'src/model/ResponseLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  EmailID:string;
  Password:string;
  type:string;
  response:ResponseLogin;


  constructor(private logService:LoginService,private spinner:NgxSpinnerService,
    private toastr:ToastrService,private router:Router,private dialog:MatDialog) {
     
     }

  ngOnInit(): void {
  }

  login():void{

    // this.router.navigate(['/user/home']);
    this.spinner.show();
     this.logService.userLogin(this.EmailID,this.Password).subscribe((data)=>{
      this.response = data as ResponseLogin
      let message = this.response.Message;
       if(message == 'Login successful'){
         sessionStorage.setItem("UserID",this.response.UserID);
         sessionStorage.setItem("AccountNumber",this.response.AccountNumber);
        sessionStorage.setItem("FullName",this.response.FullName);
        sessionStorage.setItem("OpeningDate",this.response.OpeningDate);
        sessionStorage.setItem("Currentbalance",this.response.Currentbalance);
        sessionStorage.setItem("Token",this.response.Token);
        //console.log(this.response.Token);
        this.toastr.success(message,'Alert');
        this.spinner.hide();
        this.router.navigate(['user/home']);
      }
       else{
         this.toastr.error(message,'Alert');
        this.spinner.hide();
      }
     },(err)=>{
       this.toastr.error(err,'Alert');
       this.spinner.hide();
     }); 

    // this.logService.userLogin(this.email,this.password,this.type).subscribe((data)=>{
    //     this.response = data as Login|string;
    //     if(this.response.emp_id != null){
    //         let emp_id = this.response.emp_id;
    //         sessionStorage.setItem("emp_id",emp_id);
    //         this.toastr.success(this.response.message,'Alert');
    //         this.router.navigate(['/user']);
    //     }
    //     else
    //     { 
    //         let msg = this.response;
    //         if(msg == "Login successful")
    //         {
    //           this.toastr.success(msg,'Alert');
    //           sessionStorage.setItem("username","admin");
    //           this.router.navigate(['/master']);
    //         }
    //         else
    //           this.toastr.warning(msg,'Alert');
    //     }  
    //     this.spinner.hide();   
    // },(err)=>{
    //     this.toastr.error(err,'Alert'),
    //     this.spinner.hide();
    // });
  }

  openDialog():void{
    // const dialogRef = this.dialog.open(ResetPasswordComponent,{height:'300px',data: {
    //   dataKey: "Are you sure you want to disapprove the leave ?",
    // }});    
    // dialogRef.afterClosed().subscribe(result => {
    //   if(result == "true")
    //     {
          
    //     }
    // });   
  }

  goToRegister():void{
    this.router.navigate(['register']);
  }

}
