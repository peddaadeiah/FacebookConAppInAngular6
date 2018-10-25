import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {
  AuthService,
  FacebookLoginProvider
} from 'angular-6-social-login';


@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.css']
})
export class LoginFacebookComponent implements OnInit {

  constructor(private socialAuthService: AuthService,private router:Router) { }

  ngOnInit() {
  }
  signInWithFB(): void {
    let socialPlatformProvider;
    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(userData);
        this.router.navigate(['/addDetail']);
      }
    ); 
    }
}
