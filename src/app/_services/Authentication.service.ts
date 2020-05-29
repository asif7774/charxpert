import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpUserModel } from '../_models/SignUpUserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = 'http://35.208.129.61:80';

  /**
   * This Service is used for calling sign up of a user API.
   * Takes a parameter containing details of user in an array.
   */
  public SignUpUser(signUpDetails: SignUpUserModel) {
    const signupData = {
      email: signUpDetails.Email,
      first_name: signUpDetails.FirstName,
      last_name: signUpDetails.LastName,
      password: signUpDetails.Password,
      is_expert: 'false',
      location: signUpDetails.Country,
      phone_number: signUpDetails.PhoneNumber,
    };
    return this.httpClient.post(this.baseUrl + '/api/signup/', signupData);
  }

  public SignInUser(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('username:password')
      })
    };
    return this.httpClient.get(this.baseUrl + '/api/signup/', httpOptions);
  }
}
