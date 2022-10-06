import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  constructor(public authService: AuthenticationService, private nav: NavController) {}
  ngOnInit() {}
  voltaHome(){
    this.nav.navigateForward('home');
    }
}