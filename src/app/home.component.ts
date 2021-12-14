import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    {path: 'assets/images/avatar.png'},
    {path: 'assets/images/avatar2.png'}
];   

imagesForSlider = [
  {path: 'assets/images/avatar.png'},
  {path: 'assets/images/avatar2.png'}
];



  handleCarouselEvents(event:any) {
  console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
