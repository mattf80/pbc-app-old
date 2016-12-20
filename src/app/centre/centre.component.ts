import { CentresService } from './centres.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {

  centres: any = [];
  private searchTerms = new Subject<string>();


  constructor(private centresService: CentresService) { }

  ngOnInit():void {
    this.centres = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.centresService.getCentres(term) : Observable.of<any[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<any[]>([]);
      })
      

  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  Onsearch(term: string) {
    this.centresService.getCentres(term)
      .subscribe(centres => {
        this.centres = centres;
        console.log(centres);
      });
  }

}
