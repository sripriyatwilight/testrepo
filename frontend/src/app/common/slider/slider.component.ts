import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  images:any[] = [
  //  {img:'assets/images/img1.jpg',text:"dfdaffdf1"} ,
  //  {img:'assets/images/img2.jpg',text:"dfafadf2"} ,
  //  {img:'assets/images/img3.jpg',text:"dfaff3"},
   {img:'assets/images/img1.svg',text:"dfdaffdf1"} ,
   {img:'assets/images/img2.svg',text:"dfafadf2"} ,
   {img:'assets/images/IMG3.svg',text:"dfaff3"}
  ];
}
