import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) {

   }

  get(url: string) {
    console.log("no10",this.http.get(url));
    console.log("no10",url);
    console.log("no10",this.http);
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: "assets/question.json", name: 'JavaScript' },
    ];
  }

  getQuestionJson(){
    return this.http.get<any>("/assets/question.json");
   }

}
