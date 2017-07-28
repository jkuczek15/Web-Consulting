import { Injectable } from '@angular/core';
import { HttpClient } from '../../../includes/http-client.service';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/profile/')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }// end function getChatByRoom

}// end class ProfileService
