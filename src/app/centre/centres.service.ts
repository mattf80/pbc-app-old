import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CentresService {

  constructor(private http:Http) { }


  getCentres() {
    return this.http.get('/api/organizations')
      .map(res => res.json().organizations);
  }

}
