import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  register(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/api/register', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }// end function createUser

}// end class RegisterService