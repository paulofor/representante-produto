import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ItemValidacaoPagina } from 'src/app/shared/sdk';

@Component({
  selector: 'app-vantagem-produto-direita-app',
  templateUrl: './vantagem-produto-direita-app.component.html',
  styleUrls: ['./vantagem-produto-direita-app.component.css']
})
export class VantagemProdutoDireitaAppComponent implements OnInit {


  @Input() itemPagina: ItemValidacaoPagina;
  
  constructor() { }

  ngOnInit() {
  }

}
