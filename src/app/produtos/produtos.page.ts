import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

<<<<<<< HEAD
  constructor(
    private nv: NavController
  ) { }
=======
  constructor(private nav: NavController) { }
>>>>>>> 2d8cafbaac9b597a80ea3200fe96035a5182b91f

  ngOnInit() {
  }

<<<<<<< HEAD
  goHome(){
    this.nv.navigateBack('home');
=======
  voltar(){
    this.nav.navigateBack('home');
>>>>>>> 2d8cafbaac9b597a80ea3200fe96035a5182b91f
  }

}
