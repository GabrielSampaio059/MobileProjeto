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
          window.alert('Email não verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  ionViewDidEnter() {
    this.storage.get('user')
      .then((resolve) => {
        if (resolve.length > 0) {
          this.nav.navigateForward('home');
        } else {
          return true;
        }
      })
      .catch((error) => {
        return true;
      })
  }
}