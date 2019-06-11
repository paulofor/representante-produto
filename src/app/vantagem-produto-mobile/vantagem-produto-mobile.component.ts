import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ItemValidacaoPagina } from 'src/app/shared/sdk';

@Component({
  selector: 'app-vantagem-produto-mobile',
  templateUrl: './vantagem-produto-mobile.component.html',
  styleUrls: ['./vantagem-produto-mobile.component.css']
})
export class VantagemProdutoMobileComponent implements OnInit {

  @Input() itemPagina: ItemValidacaoPagina; 

  constructor() { }

  ngOnInit() {
    console.log('Mostrando ' , this.itemPagina.titulo);
  }

}
