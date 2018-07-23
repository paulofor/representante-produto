import { Component, OnInit, Input } from '@angular/core';
import { ItemValidacaoPagina } from '../shared/sdk';

@Component({
  selector: 'app-vantagem-produto-direita',
  templateUrl: './vantagem-produto-direita.component.html',
  styleUrls: ['./vantagem-produto-direita.component.css']
})
export class VantagemProdutoDireitaComponent implements OnInit {


  bullet1 : string;
  bullet2 : string;
  bullet3 : string;
  titulo: string;
  subtitulo: string;
  idItem : string;
  imagem : string;

  @Input() itemPagina: ItemValidacaoPagina; 

  constructor() { }

  ngOnInit() {
    this.criaItemFake();
  }



  criaItemFake() {
    //this.itemPagina = new ItemValidacaoPagina();
    this.bullet1 = "Mostrar sua coleção de peças para os clientes.";
    this.bullet2 = "Lançar novos modelos.";
    this.bullet3 = "Organizar a coleção no celular do seu cliente.";
    this.titulo = "Receber Pedidos";
    this.subtitulo = "Você vai poder rapidamente disponibilizar aos clientes toda sua coleção de peças";
    this.idItem = "produto2";
    this.imagem = "assets/img/tela01.jpg";
  }

}
