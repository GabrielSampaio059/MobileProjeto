import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { userInfo } from 'os';
import { User } from '../shared/user';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alterar dados',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Digite a tarefa...'
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
            localStorage.setItem('user.displayName', JSON.stringify(form.nome));
          }
        } 
      ]
    });

    await alert.present();
  }

  goHome(){
    this.nv.navigateBack('home');
  }
}