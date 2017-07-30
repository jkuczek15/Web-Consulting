import { Injectable } from '@angular/core';
import { HttpClient } from '../../../includes/http-client.service';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

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