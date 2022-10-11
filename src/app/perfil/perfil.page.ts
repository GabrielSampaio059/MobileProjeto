import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AlertController, NavController } from '@ionic/angular';
import { userInfo } from 'os';
import { User } from '../shared/user';
=======
import { NavController } from '@ionic/angular';

>>>>>>> 2d8cafbaac9b597a80ea3200fe96035a5182b91f
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

<<<<<<< HEAD
  usuario: any;

  constructor(
    private alertCtrl: AlertController,
    private nv: NavController
    ) { 
    let usu = localStorage.getItem('user');

    if (usu != null) {
      this.usuario = JSON.parse(usu);
    }
  }
=======
  constructor(private nv: NavController) { }
>>>>>>> 2d8cafbaac9b597a80ea3200fe96035a5182b91f

  ngOnInit() {
  }

<<<<<<< HEAD
  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alterar nome',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Digite o nome...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked cancel')
          }
        },
        {
          text: 'Alterar',
          handler: (form) => {

            console.log(form.nome);
            this.usuario.displayName = form.nome;
           // localStorage.setItem('user.displayName', JSON.stringify(form.nome));
            localStorage.setItem('user', JSON.stringify(this.usuario));
          }
        } 
      ]
    });

    await alert.present();
  }

  async mostraAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alterar foto',
      inputs: [
        {
          name: 'url_photo',
          type: 'text',
          placeholder: 'Insira a URL...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked cancel')
          }
        },
        {
          text: 'Alterar',
          handler: (form) => {

            console.log(form.url_photo);
            this.usuario.photoURL = form.url_photo;
           // localStorage.setItem('user.displayName', JSON.stringify(form.nome));
            localStorage.setItem('user', JSON.stringify(this.usuario));
          }
        } 
      ]
    });

    await alert.present();
  }

  goHome(){
    this.nv.navigateBack('home');
  }
=======
  voltar(){
    this.nv.navigateBack('home');
  }

>>>>>>> 2d8cafbaac9b597a80ea3200fe96035a5182b91f
}
