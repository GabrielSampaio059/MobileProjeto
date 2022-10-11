import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(
    private nv: NavController
  ) { }

  ngOnInit() {
  }

  goHome(){
    this.nv.navigateBack('home');
  }

}
