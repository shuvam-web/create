import { Component, OnInit } from '@angular/core';
import { ResponseService } from '../response.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

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
    this.router.navigate(['/product']);
  }

  myArray=[
    { id:'1', image:'../../assets/kurti1.jpg', button:'Details',title:'RoadSter',text:'Women Printed A-Line',price:'Rs.859',price1:'Rs.1099',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'2', image:'../../assets/kurti2.jpg', button:'Details',title:'Levis',text:'Women Kurta Set',price:'Rs.1799',price1:'Rs.2999',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'3', image:'../../assets/kurti5.jpg', button:'Details',title:'Nautica',text:'Women Printed A-Line',price:'Rs.1649',price1:'Rs.3299',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'4', image:'../../assets/kurti4.jpg', button:'Details',title:'RoadSter',text:'Women Kurta Set',price:'Rs.659',price1:'Rs.899',price2:'(50%OFF)',button1:'Add To Bag'},
    { id:'5', image:'../../assets/kurti11.jpg', button:'Details',title:'Tommy Hilfiger',text:'Women Printed A-Line',price:'Rs.1059',price1:'Rs.1599',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'6', image:'../../assets/kurti6.jpg', button:'Details',title:'Wrangler',text:'Women Kurta Set',price:'Rs.1459',price1:'Rs.1659',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'7', image:'../../assets/kurti3.jpg', button:'Details',title:'Lee',text:'Women Kurta Set',price:'Rs.859',price1:'Rs.1759',price2:'(40%OFF)',button1:'Add To Bag'},
    { id:'8', image:'../../assets/kurti9.jpg', button:'Details',title:'Nautica',text:'Women Printed A-Line',price:'Rs.1059',price1:'Rs.1759',price2:'(50%OFF)',button1:'Add To Bag'},   
   ]


}
