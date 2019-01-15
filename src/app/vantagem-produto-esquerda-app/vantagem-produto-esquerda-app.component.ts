import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ItemValidacaoPagina } from 'src/app/shared/sdk';

@Component({
  selector: 'app-vantagem-produto-esquerda-app',
  templateUrl: './vantagem-produto-esquerda-app.component.html',
  styleUrls: ['./vantagem-produto-esquerda-app.component.css']
})
export class VantagemProdutoEsquerdaAppComponent implements OnInit {

  @Input() itemPagina: ItemValidacaoPagina;

  constructor() { }

  ngOnInit() {
  }

}
