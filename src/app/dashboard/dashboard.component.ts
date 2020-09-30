import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private re:ResponseService) { }

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
        }
  // Navigate to Prouct page(men)
  myFun(){
    this.router.navigate(['/product']);
  }
  women(){
    this.router.navigate(['/women']);
  }
  //Navigate to Cart page
  cart(){
    this.router.navigate(['/mycart']);
  }
  order(){
    this.router.navigate(['/myorder']);
  }

  logout(){
    this.re.removeToken();
    this.router.navigate(['/login']);
  }
  feedback(){
    this.router.navigate(['/feedback']);
  }

}
