import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {};
  showSpinner = false;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
    this._auth.loginUser(this.loginData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/dashboard']);
        },
        err => console.log(err)
      );
  }

}
