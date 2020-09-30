import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  ReactiveForm:FormGroup;
  a;

  constructor( private fb:FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.ReactiveForm=this.fb.group({
      name:[null, Validators.required],
      email:[null, Validators.required],
      phone:[null, Validators.required],
      comment:this.fb.array([''])
    })
  }
  addAlter(){
   this.comment.push(this.fb.control(''));
  }
  get comment(){
    return this.ReactiveForm.get('comment') as FormArray;

  }
  remove(i){
    this.comment.removeAt(i);
  }
  
  go(){
  console.log("Feedback submitted");
  this.a=confirm("Would you like to submit your feedback?");
  if(this.a){
    alert("Thanks for your feedback");
  }
  else{
    alert("sorry your feedback is not submitted");
    
  }
  this.route.navigate(['/dashboard']);
  
  }

}
