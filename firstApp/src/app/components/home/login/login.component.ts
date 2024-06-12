import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Credential } from '../../../models/Credential';
import { BaseServiceService } from 'src/app/service/base-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential: Credential;
  errorAuth: boolean;

  constructor(private authService: AuthService,
    private baseService:BaseServiceService) {}

  ngOnInit() {
    this.authService.clearLoginData();
    this.credential = new Credential();
    this.baseService.getPrincipal().subscribe(princ=>{
      console.log(princ)
    })
  }

  login() {
    console.log(this.credential)
    this.authService.authenticate(this.credential, () => {
      this.errorAuth = true;
    });
  }
}


