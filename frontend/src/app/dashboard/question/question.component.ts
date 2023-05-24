import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{

  public name: string | null = "" ; //initallay empty
  public questionList : any  = [] ;
  public currentQuestion : number  = 0;
  public points : number = 0;
  counter : number = 60;
  correctAnswer : number  = 0;
  inCorrectAnswer : number  = 0;
  interval$:any;
  progress:string = "0" ;
  isCorrect!:Boolean;
  isQuizCompleted: Boolean = false;

  constructor(private questionService:QuestionService){}

  ngOnInit(): void {
    // setitem initialized in weclome.ts
    this.name = localStorage.getItem('name');
    this.getAllQuestion();
    this.startCounter();
  }

  getAllQuestion(){
    this.questionService.getQuestionJson()
      .subscribe(res => {
        console.log("QuestionJson::",res);
        this.questionList = res.questions;
      })
  }

  nextQuestion(){
    this.currentQuestion++;
    this.counter=60;
  }

  previousQuestion(){
    this.currentQuestion--;
  }


  answer(currentQno:number, option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }

    if(option.correct){
      this.points += 10; // add points if answer correct
      this.correctAnswer++;
      setTimeout(()=>{
        // making delay for changing bg color for red or green
        // this.currentQuestion ++; //goto nxt question
        this.resetCounter();
        // this.getProgressPercent(); //for progress bar
      },1000)

    }else{
      setTimeout(()=>{
        // this.currentQuestion ++; //goto nxt question
        this.inCorrectAnswer++;
        this.resetCounter();
        // this.getProgressPercent(); //for progress bar
      },1000)
      // this.points -= 10; // add points if answer inCorrect
    }

  }

  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        // this.currentQuestion++;
        this.counter = 60;
        // this.points -= 10;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
      //each question has 1 min time
      //after 10 mins stop the couter
    },600000);
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter(){
   this.stopCounter();
   this.counter =60;
   this.startCounter();
  }

  resetQuiz(){
    this.currentQuestion=0;
    this.resetCounter();
    this.getAllQuestion();
    this.points =0 ;
    this.counter = 60;
    // this.progress = "0";
  }
  // For progress bar
  /*
  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
  */


}
// reference: https://morioh.com/p/06fa2830bfd1
