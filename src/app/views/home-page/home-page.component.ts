import { Component, OnInit } from '@angular/core';
import { BussineService } from '../../service/bussineService';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ BussineService ]
})
export class HomePageComponent implements OnInit {

  constructor(public bussineService: BussineService) { }

  ngOnInit() {
    /*//this.getData();*/
  }
  public getData() {
    /*this.bussineService.getBussineAll()
      .subscribe( result => {
        console.log(result);
      });*/
  }
}
