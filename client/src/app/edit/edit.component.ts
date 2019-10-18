import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myobj: any = {
    name: "",
    qty: "",
    price: ""
  };


  titleMessage = false;



  constructor(private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.getOneObject();
  }

  resetForm() {
    this.getOneObject();
  }

  getOneObject() {
    let obs = this._http.getOne(this.route.snapshot.params.id)
    obs.subscribe(data => {
      console.log(data);
      this.myobj = data;
      // this.dup = this.myobj;
    });
  }

  submitForm() {
    if (this.myobj.name.length < 3) {
      this.titleMessage = true;
    }
    if (this.myobj.qty) {
      this.titleMessage = true;
    }
    if (this.myobj.price == null) {
      this.titleMessage = true;
    } else {
      let obs = this._http.editOne(this.myobj._id, this.myobj);
      obs.subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }
  }

}

