import { CentresService } from './centres.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent implements OnInit {

  centres: any = [];

  constructor(private centresService: CentresService) { }

  ngOnInit() {
    this.centresService.getCentres()
      .subscribe(centres => {
        this.centres = centres;
        console.log(centres);
      });
  }

}
