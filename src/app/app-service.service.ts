import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
// import {Http,Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(
    public http: HttpClient
  ) { }



  public saveData(param: any): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    // headers = headers.append('zumo-api-version', '2.0.0');

    return this.http.post("ab" + "apiFunction", headers, param)
      .map((resp) => resp);
  }

}


