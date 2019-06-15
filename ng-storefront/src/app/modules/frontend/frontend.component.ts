import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {

  constructor(public _authService: AuthService, private _route: Router) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('token');
    this._route.navigate(['/login'])
  }

}
