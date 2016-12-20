import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CentresService {

  constructor(private http:Http) { }


  getCentres(term: string): Observable<any[]> {
    return this.http.get(`http://localhost:3000/api/organizations/?name=${term}`)
      .map(res => res.json().organizations);
  }

  addVersion(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/centres`);
  }
}
