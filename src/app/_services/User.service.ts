import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './Common/Common.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://127.0.0.1:8000';
constructor(private httpClient: HttpClient, private common: CommonService) { }

/**
 * Get deatil of user.
 */
public GetUserInfo() {
  const user = JSON.parse(localStorage.getItem('UserDetails'));
  const httpOptions = {
    headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(user.username + ':' + user.password))
  };
  return this.httpClient.get(this.baseUrl + '/api/get_user_info/');
}

/**
 * Get Schedule of a user.
 */
public GetUserSchedule() {
  const user = JSON.parse(localStorage.getItem('UserDetails'));
  const httpOptions = {
    headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(user.username + ':' + user.password))
  };
  return this.httpClient.get(this.baseUrl + '/api/get_user_schedule/', httpOptions);
}
}
