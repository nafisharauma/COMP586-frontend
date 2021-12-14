import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  
  ngOnInit() {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["adminhome"]);
    }else {
      alert("Invalid credentials");
    }
  }
  }
