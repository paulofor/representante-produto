import { Component, OnInit, Input } from '@angular/core';
import { ItemValidacaoPagina } from '../shared/sdk';

@Component({
  selector: 'app-vantagem-produto-esquerda',
  templateUrl: './vantagem-produto-esquerda.component.html',
  styleUrls: ['./vantagem-produto-esquerda.component.css']
})
export class VantagemProdutoEsquerdaComponent implements OnInit {

  //itemPagina: ItemValidacaoPagina;

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
    this.titulo = "Exibir Produtos";
    this.subtitulo = "Você vai poder rapidamente disponibilizar aos clientes toda sua coleção de peças";
    this.idItem = "produto1";
    this.imagem = "assets/img/tela01.jpg";
  }

}
