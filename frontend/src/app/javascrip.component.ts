import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-javascript',
  template: '<!-- Your template here -->',
})
export class JavaScriptComponent implements OnInit {
  jsonData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('').subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
      // Handle the JSON data as needed
    });
  }
}
