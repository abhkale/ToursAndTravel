import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private http:Http) { }

  // public saveData(apiFunction: string, param: any): Observable<any> {
  //   return this.http.post("ab" + "apiFunction", param)
  //     .map((resp) => resp.json());
  // }
}


