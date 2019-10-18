import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  myObjects: any = [];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    let observable = this._http.getAll()
    observable.subscribe((data: any) => {
      console.log('Got ALL Objects', data);
      this.myObjects = data;
      let counter = 0;
      if (this.myObjects.reviews) {
        for (let x of this.myObjects.reviews) {
          counter += x.rating;
        }
        this.myObjects.average = counter / this.myObjects.reviews.length;
      }
    });
  }

  deleteClick(id) {
    let observable = this._http.delete(id)
    observable.subscribe(data => {
      console.log("SUCCESSFULLY DELETED", data);
      this.getAll();
    });
  }
}
