import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  myobj: any = {
    name: "",
    qty: "",
    price: ""
  };

  titleMessage = false;

  constructor(private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }

  resetForm() {
    this.myobj = {name: "", qty: "", price: "" };
  }

  submitForm() {
    if (this.myobj.name.length < 3) {
      this.titleMessage = true;
    }
    if (this.myobj.qty < 0) {
      this.titleMessage = true;
    }
    if (this.myobj.price < 0) {
      this.titleMessage = true;
    } else {
      let obs = this._http.createOne(this.myobj);
      obs.subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }
  }
}


// const objectSchema = new mongoose.Schema({
//   name: { type: String, required: true, minlength: [3, "Name must be longer than 3 characters!" ]},
//   desc: { type: String, required: [true, "Must provide a description"] },
//   reviews: [{
//       rating: Number, 
//       comment: String
//   }]
// }, { timestamps: true });