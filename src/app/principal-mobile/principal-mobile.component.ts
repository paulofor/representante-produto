import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginaValidacaoWebApi, VisitanteApi, Visitante, PaginaValidacaoWeb } from '../shared/sdk';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Params } from '@angular/router';

declare var $: any

@Component({
  selector: 'app-principal-mobile',
  templateUrl: './principal-mobile.component.html',
  styleUrls: ['./principal-mobile.component.css']
})




export class PrincipalMobileComponent implements OnInit {


  consulta = { "include": { "relation": "itemValidacaoPaginas", "scope": { "order": "ordenacao" } } };

  pagina: PaginaValidacaoWeb;
  cookieValue = 'UNKNOWN';
  visitanteCorrente = null;


  //cor = '13, 70, 83';
  //cor = '0,122,204';

  constructor(private route: ActivatedRoute, private srv: PaginaValidacaoWebApi,
    private cookieService: CookieService,
    private visitanteSrv: VisitanteApi, private router: Router) { }

  ngOnInit() {
    this.carregaPagina();
  }

  trataCookie() {
    this.cookieValue = this.cookieService.get('idDigicom');
    console.log('Cookie: ', this.cookieValue);
    if (!this.cookieValue) {
      console.log('Cookie vazio');
      this.visitanteSrv.proximoCookie()
        .subscribe((result: any) => {
          console.log('Result Cookie: ', result);
          this.cookieService.set('idDigicom', result.codigoCookie);
          this.cookieValue = result.codigoCookie;
          this.registraVisita();
        })
    } else {
      console.log('Meu Cookie:', this.cookieValue);
      this.registraVisita();
    }
  }

  registraVisita() {
    let visita = new Visitante();
    visita.codigoCookie = this.cookieValue;
    visita.paginaValidacaoWebId = this.pagina.id;
    console.log('Visita: ', visita);
    this.visitanteSrv.create(visita)
      .subscribe((resultado: any) => {
        console.log('Resultado visitante: ', resultado);
        this.visitanteCorrente = resultado;
      })
  }

  carregaPagina() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      console.log('Id-Mobile: ', id);
      let filtro = { "where": { "codigoHash": id }, "include": { "relation": "itemValidacaoPaginas", "scope": { "order": "ordenacao" } } };
      console.log('Filtro: ' , filtro);
      this.srv.findOne(filtro)
        .subscribe((paginaResult: PaginaValidacaoWeb) => {
          this.pagina = paginaResult;
          this.trataCookie();
          this.chamaLoader();
        })
    });
  }


  chamaLoader() {
    $.getScript('assets-medilab/js/custom.js');
  }


}
