import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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


}
