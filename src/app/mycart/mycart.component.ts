import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  address(){
    this.router.navigate(['/dashboard']);
  }

}
