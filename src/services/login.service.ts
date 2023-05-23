import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl=environment.baseurl

  constructor(private httpClient:HttpClient) { }
  // getlogin():Observable<any>{
  //   return this.httpClient.get(this.baseurl+'utilisateurs/login')
  // }
  getLogin(email: string, password: string): Observable<any> {
    const loginUrl = this.baseurl + 'utilisateurs/login';

    // Set the query parameters
    let params = new HttpParams();
    params = params.append('email', email);
    params = params.append('password', password);

    return this.httpClient.get(loginUrl, { params: params });
  }
}

