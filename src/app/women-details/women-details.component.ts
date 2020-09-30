import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-women-details',
  templateUrl: './women-details.component.html',
  styleUrls: ['./women-details.component.scss']
})
export class WomenDetailsComponent implements OnInit {
userdata;
  constructor(private route:ActivatedRoute, private router:Router, private re:ResponseService) { }

  ngOnInit(): void {

    this.route.params.subscribe((paramsvalue)=>{
      console.log(paramsvalue);
      this.userdata=this.myArray1.filter((userinfo)=>{
        return userinfo.id==paramsvalue.id;
      })[0];
    })
  }

  // Array
  myArray1=[
    {id:'1', image:'../../assets/kurti1.jpg', title:'RoadSter', price:'Rs.859'},
    {id:'2', image:'../../assets/kurti2.jpg', title:'Levis', price:'Rs.1799'},
    {id:'3', image:'../../assets/kurti5.jpg', title:'Nautica', price:'Rs.1649'},
    {id:'4', image:'../../assets/kurti4.jpg', title:'RoadSter', price:'Rs.659'},
    {id:'5', image:'../../assets/kurti11.jpg', title:'Tommy Hilfiger', price:'Rs.1059'},
    {id:'6', image:'../../assets/kurti6.jpg', title:'Wrangler', price:'Rs.1459'},
    {id:'7', image:'../../assets/kurti3.jpg', title:'Lee', price:'Rs.859'},
    {id:'8', image:'../../assets/kurti9.jpg', title:'Nautica', price:'Rs.1059'},
  ]

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
      this.router.navigate(['feedback']);
    }
    go(){
      this.router.navigate(['/product']);
    }
  

}
