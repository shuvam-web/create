import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StorageService } from "../storage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myReactiveForm:FormGroup;
  find='^[a-zA-Z ]{2,20}$';
  find1='^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$';
  find2='^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$';
  formobj;
  userdata;
  errorblock;

  constructor(private router:Router, private fb:FormBuilder, private st:StorageService) { }

  ngOnInit(): void {

         //navbar
         window.onscroll = function() {myFunction()};
         var navbar = document.getElementById("details");
         var sticky = navbar.offsetTop;
         function myFunction() {
           if (window.pageYOffset >= sticky) {
             navbar.classList.add("sticky")
           } else {
             navbar.classList.remove("sticky");
           }
         }
     
         //toggle password
     
     const togglePassword = document.querySelector('#togglePassword');
     const password = document.querySelector('#password');
     togglePassword.addEventListener('click', function (e) {
       // toggle the type attribute
       const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
       password.setAttribute('type', type);
       // toggle the eye slash icon
       this.classList.toggle('fa-eye-slash');
     });
     
     this.myReactiveForm=this.fb.group({
       'fname':[null,[Validators.required,Validators.pattern(this.find)]],
       'lname':[null,[Validators.required,Validators.pattern(this.find)]],
       'email':[null,[Validators.required,Validators.pattern(this.find1)]],
       'password':[null,[Validators.required,Validators.pattern(this.find2)]]
     })
     
       }

       // terminate to ligin page
       
       switch(){
         this.router.navigate(['/login']);
       }

       //formvalue
       take(){
         console.log(this.myReactiveForm.value);
         this.formobj=this.myReactiveForm.value;
         this.st.Create(this.formobj).subscribe((userinfo)=>{
           this.userdata=userinfo;
           console.log(this.userdata);
           alert("Registration Successful" + " "+ this.myReactiveForm.value.fname);
           this.router.navigate(['/login']);//terminate to login page
         },(error)=>{
           this.errorblock=error.error.message;
           alert(this.errorblock);
           console.log(this.errorblock);
         })
         
       }
     
  }


