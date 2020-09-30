import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  constructor(private re:ResponseService, private router:Router) { }

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

  // logout
    logout(){
     this.re.removeToken();
    this.router.navigate(['/login']);

  }
   //terminate to cart
   cart(){
     this.router.navigate(['/mycart']);
   }
   //terminate to order
   order(){
     this.router.navigate(['/myorder']);
   }
   feedback(){
     this.router.navigate(['/feedback']);
   }
   go(){
     this.router.navigate(['/women']);
   }

   //MYARRAY

   myArray=[
    { id:'1', image:'../../assets/shirt2.jpg', button:'Details',title:'RoadSter',text:'Varsity Graphic T-shirt',price:'Rs.359',price1:'Rs.599',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'2', image:'../../assets/shirt3.jpg', button:'Details',title:'Levis',text:'Varsity Graphic T-shirt',price:'Rs.1799',price1:'Rs.2999',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'3', image:'../../assets/shirt4.jpg', button:'Details',title:'Nautica',text:'Varsity Graphic T-shirt',price:'Rs.1649',price1:'Rs.3299',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'4', image:'../../assets/shirt5.jpg', button:'Details',title:'RoadSter',text:'Varsity Graphic T-shirt',price:'Rs.459',price1:'Rs.699',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'5', image:'../../assets/shirt7.webp', button:'Details',title:'Tommy Hilfiger',text:'Varsity Graphic T-shirt',price:'Rs.559',price1:'Rs.699',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'6', image:'../../assets/shirt9.jpg', button:'Details',title:'Wrangler',text:'Varsity Graphic T-shirt',price:'Rs.459',price1:'Rs.659',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'7', image:'../../assets/shirt12.jpg', button:'Details',title:'Lee',text:'Varsity Graphic T-shirt',price:'Rs.459',price1:'Rs.1359',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'8', image:'../../assets/shirt13.webp', button:'Details',title:'Nautica',text:'Varsity Graphic T-shirt',price:'Rs.459',price1:'Rs.1759',price2:'(40%OFF)',button1:'Add To Bag'},   
   ]

}
