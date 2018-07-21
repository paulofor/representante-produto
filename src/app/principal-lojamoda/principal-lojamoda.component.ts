import { Component, OnInit } from '@angular/core';
import { PaginaValidacaoWeb, PaginaValidacaoWebApi } from '../shared/sdk';

@Component({
  selector: 'app-principal-lojamoda',
  templateUrl: './principal-lojamoda.component.html',
  styleUrls: ['./principal-lojamoda.component.css']
})
export class PrincipalLojamodaComponent implements OnInit {

  pagina : PaginaValidacaoWeb;

  constructor(private paginaSrv: PaginaValidacaoWebApi) { }

  ngOnInit() {
  }

}
