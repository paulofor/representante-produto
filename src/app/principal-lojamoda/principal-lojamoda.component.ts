import { Component, OnInit } from '@angular/core';
import { PaginaValidacaoWebApi } from '../shared/sdk';
import { PaginaValidacaoWeb } from 'src/app/shared/sdk/models';


@Component({
  selector: 'app-principal-lojamoda',
  templateUrl: './principal-lojamoda.component.html',
  styleUrls: ['./principal-lojamoda.component.css']
})



export class PrincipalLojamodaComponent implements OnInit {


  pagina : PaginaValidacaoWeb;

  constructor(private srv :PaginaValidacaoWebApi) { }

  ngOnInit() {
    this.carregaPagina();
  }

  carregaPagina() {
    this.srv.findById(1,{ "include" : "itemValidacaoPaginas" })
      .subscribe((valor: PaginaValidacaoWeb) => {
        console.log('Pagina: ' + JSON.stringify(valor));
        this.pagina = valor;
      })
  }

  
}
