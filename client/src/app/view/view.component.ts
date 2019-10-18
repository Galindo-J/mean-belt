import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  myobj: any = {
    name: "",
    qty: "",
    price: ""
  };

  messageTitle = true;
  errorMessage = false;

  constructor(private _http: HttpService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.getOneObject();
  }

  getOneObject() {
    console.log(this.route.snapshot.params.id);
    let obs = this._http.getOne(this.route.snapshot.params.id)
    obs.subscribe(data => {
      console.log(data);
      this.myobj = data;
      if (this.myobj.qty > 0) {
        this.messageTitle = false;
      }
    });
  }

  deleteClick(id) {
    if (this.messageTitle !== true) {
       this.errorMessage = true;
    } else {
      let observable = this._http.delete(id)
      observable.subscribe(data => {
        console.log("SUCCESSFULLY DELETED", data);
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
