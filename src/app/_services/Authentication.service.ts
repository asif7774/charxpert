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

  /**
   * Sign up User
   * @param username
   * @param password
   */
  public SignInUser(username: string, password: string) {
    const httpOptions = {
    headers: new HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password)),
    observe: 'response' as 'response'
  };
    return this.httpClient.get(this.baseUrl + '/api/login/', httpOptions);
  }

  /**
   * Get OTP for validating phone number.
   */
  public GetOTP() {
    const request = {
      valid_from: '',
      valid_to: ''
    };
    return this.httpClient.post(this.baseUrl + '/api/twilio_token/', request);
  }

  /**
   * Logged out a user.
   */
  public Logout() {
    return this.httpClient.get(this.baseUrl + '/api/logout/');
  }
}
