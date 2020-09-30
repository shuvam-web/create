import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
userdata;

  //ARRAY
  myArray1=[
    {id:'1',image:'../../assets/shirt2.jpg',title:'Roadster',price:'Rs.359'},
    {id:'2',image:'../../assets/shirt3.jpg',title:'Levis',price:'Rs.1799'},
    {id:'3',image:'../../assets/shirt4.jpg',title:'Nautica',price:'Rs.1649'},
    {id:'4',image:'../../assets/shirt5.jpg',title:'Roadster',price:'Rs.459'},
    {id:'5',image:'../../assets/shirt7.webp',title:'Tommy Hilfiger',price:'Rs.559'},
    {id:'6',image:'../../assets/shirt9.jpg',title:'Wrangler',price:'Rs.659'},
    {id:'7',image:'../../assets/shirt12.jpg',title:'Lee',price:'Rs.1359'},
    {id:'8',image:'../../assets/shirt13.webp',title:'Nautica',price:'Rs.1759'},
  ]
  constructor(private route:ActivatedRoute,private router:Router, private re:ResponseService) { }

  ngOnInit(): void {

    this.route.params.subscribe((paramsvalue)=>{
      console.log(paramsvalue);
      this.userdata=this.myArray1.filter((userinfo)=>{
        return userinfo.id==paramsvalue.id;
      })[0];
    })
  }

  logout(){
  this.re.removeToken();
  this.router.navigate(['/login']);
  }
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




}
