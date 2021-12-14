import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confPassword:string;
  gender:string= 'Male';
  user:User = new User();
  noMatch:boolean = false;

  constructor(private loginService:LoginService, private toastr:ToastrService,
    private spinner:NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {
  }

  register():void{
    this.spinner.show();
    this.loginService.userRegister(this.user).subscribe((data)=>
    {
      let message = data.message;
      if(message == 'Registration successful'){
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
    console.log(this.user);
  }

  validatePassword(){
    //console.log(this.noMatch);
    if (this.user.Password != this.confPassword){
      this.noMatch = true;
    }
    else
      this.noMatch = false;
  }

  selectGender(){
    this.user.Gender = this.gender;
    console.log(this.user.Gender);
  }

}
