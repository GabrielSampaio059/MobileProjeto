import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AlertController, NavController } from '@ionic/angular';
import { Console } from 'console';
import { signOut } from 'firebase/auth';
import { Appointment } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';
import { AuthenticationService } from '../shared/authentication-service';
=======
import { NavController } from '@ionic/angular';

>>>>>>> 2d8cafbaac9b597a80ea3200fe96035a5182b91f
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
<<<<<<< HEAD

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService:  AuthenticationService,
    ) { }
  ngOnInit() {
=======

  constructor(private navCtrl: NavController) {}
  ngOnInit()
  {

  }

  showLogin(){
this.navCtrl.navigateForward('login');

  }

  showProdutos(){
this.navCtrl.navigateForward('produtos');
  }
  showPerfil(){
this.navCtrl.navigateForward('perfil');

  }

>>>>>>> 2d8cafbaac9b597a80ea3200fe96035a5182b91f

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Deseja desconectar?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log("Cancelado");
          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
              this.authService.SignOut();
              window.alert('Email desconectado');
          },
        },
      ],
    });

    await alert.present();
  }

  showProdutos() {
    this.navCtrl.navigateForward('produtos');
  }
  showPerfil() {
    this.navCtrl.navigateForward('perfil');
  }

  ionViewWillEnter() {
    if (!this.authService.isLoggedIn) {
      this.navCtrl.navigateForward('login')
    } else {
      return true;
    }
  }
}