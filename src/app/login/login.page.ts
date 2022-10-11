import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private nav: NavController,
    public storage: Storage
  ) { }
  ngOnInit() { }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          window.alert('Email verificado');
        } else {
          window.alert('Email não verificado')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  ionViewWillEnter() {
    if (this.authService.isLoggedIn) {
      this.nav.navigateForward('home')
    } else {
      return true;
    }
  }

  goRegistration(){
    this.nav.navigateForward('registration');
  }
}