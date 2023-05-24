import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// Viewchild take the element and store the element
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  @ViewChild('name') namekey!: ElementRef;
  // name is should match with input field ( example: #name)

  constructor(){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  startQuiz(){
    localStorage.setItem('name',this.namekey.nativeElement.value);
    // need to show the name on the question template
  }



}
