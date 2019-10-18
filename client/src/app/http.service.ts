import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getAll() {
    return this._http.get('/api');
  }

  getOne(id) {
    return this._http.get('/api/' + id);
  }

  createOne(newObject) {
    return this._http.post('/api', newObject);
  }

  addReivew(id, review) {
    return this._http.put('/api/' + id, review);
  }

  editOne(id, thisObject) {
    return this._http.put('/api/edit/' + id, thisObject);
  }

  delete(id) {
    return this._http.delete('/api/' + id);
  }



}
