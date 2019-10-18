import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  objects = [];

  constructor(private _http: HttpService) {
  }

  ngOnInit() {
    // this.getAll();
  }


  // getAll() {
  //   let observable = this._http.getAll()
  //   observable.subscribe((data: any) => {
  //     console.log('Got ALL Objects', data)
  //     this.objects = data;
  //   });
  // }




}








