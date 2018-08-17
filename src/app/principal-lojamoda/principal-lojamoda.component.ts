import { Component, OnInit } from '@angular/core';
import { PaginaValidacaoWebApi } from '../shared/sdk';
import { PaginaValidacaoWeb } from 'src/app/shared/sdk/models';


@Component({
  selector: 'app-principal-lojamoda',
  templateUrl: './principal-lojamoda.component.html',
  styleUrls: ['./principal-lojamoda.component.css']
})



export class PrincipalLojamodaComponent implements OnInit {

  consulta = { "include" : { "relation" : "itemValidacaoPaginas" , "scope" : {"order" : "ordenacao"} } };

  pagina : PaginaValidacaoWeb;

  //cor = '13, 70, 83';
  //cor = '0,122,204';

  constructor(private srv :PaginaValidacaoWebApi) { }

  ngOnInit() {
    this.carregaPagina();
  }

  carregaPagina() {
    this.srv.findById(6,this.consulta)
      .subscribe((valor: PaginaValidacaoWeb) => {
        console.log('Pagina: ' + JSON.stringify(valor));
        this.pagina = valor;
      })
  }

  
}
