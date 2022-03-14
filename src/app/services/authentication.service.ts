import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(username:string, password:string){
    let baseUrl:string = environment.baseUrl;
    return this.http.post<any>(`${baseUrl}Login`, {username, password} );
  }

  logout(username:string){

  }
}

