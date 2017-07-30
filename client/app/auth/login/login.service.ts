import { Injectable } from '@angular/core';
import { HttpClient } from '../../../includes/http-client.service';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/api/login', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }// end function getUser

}// end class RegisterService