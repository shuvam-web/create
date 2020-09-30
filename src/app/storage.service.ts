import { Injectable } from '@angular/core';
import { Data } from "./data";
import { Datas } from "./datas";
import { Observable, throwError } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

 

  constructor( private http:HttpClient) { }
  //passing register value
api_url="https://nodeprojectapi.herokuapp.com/register";
  Create(formobj:Data):Observable<Data>{
    return this.http.post<Data>(this.api_url,formobj).pipe(catchError(this.errorHandler));

  }
  // passing login value
 apii_url="https://nodeprojectapi.herokuapp.com/login";
 Create1(getvalue:Datas):Observable<Datas>{
   return this.http.post<Datas>(this.apii_url,getvalue).pipe(catchError(this.errorHandler));;
 }
 errorHandler(error:HttpErrorResponse){
  return throwError(error);
}
}
