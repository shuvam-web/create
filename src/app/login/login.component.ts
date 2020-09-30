import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { ResponseService } from '../response.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

getvalue;
user;
errorblock;


  constructor(private router:Router, private st:StorageService, private re:ResponseService) { }
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

}
  //Switch to Register Page
go(){
 this.router.navigate(['/register']);
}

//Switch to Dashboard

//formvalue
Update(formvalue){
  console.log(formvalue);
  this.getvalue=formvalue.value;
  this.st.Create1(this.getvalue).subscribe((userin)=>{
    this.user=userin;
    console.log(this.user);
    alert("Login Successful");
    // alert("Welcome to LINEROAD");
    //  alert("Enjoy your Shopping With Us");
      this.re.SetResponse(this.user.data.token);
    this.router.navigate(['/dashboard']); //navigate to login
     
  },(error)=>{
    this.errorblock=error.error.message;
    alert(this.errorblock);
    console.log(this.errorblock);
  })
  
}
 
}
