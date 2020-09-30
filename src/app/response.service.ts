import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor() { }

  SetResponse(token:string){
    window.sessionStorage.setItem('token',token);

  }
  getToken(){
    return window.sessionStorage.getItem('token');
  }

  removeToken(){
    window.sessionStorage.clear();
    }
}
