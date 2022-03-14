import { Component, OnInit } from '@angular/core';
import { IUserCredential } from 'src/app/interfaces/userCredential';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userCredential: IUserCredential = {userName:"", password: ""}

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.login(this.userCredential);
  }

  login(user: IUserCredential){
    console.log('-********************INFINITO************************')
    this.authService.login(user.userName, user.password).subscribe(res => console.log(res))
  }

}
