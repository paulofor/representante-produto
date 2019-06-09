import { Component, OnInit } from '@angular/core';
import { PaginaValidacaoWeb, PaginaValidacaoWebApi, VisitanteApi, Visitante, PaginaInstalacaoAppApi, PaginaInstalacaoApp } from 'src/app/shared/sdk';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Params } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

declare var $: any

@Component({
  selector: 'app-instalacao-app',
  templateUrl: './instalacao-app.component.html',
  styleUrls: ['./instalacao-app.component.css']
})
export class InstalacaoAppComponent implements OnInit {

  consulta = { "include": { "relation": "itemValidacaoPaginas", "scope": { "order": "ordenacao" } } };

  pagina: PaginaInstalacaoApp;
  cookieValue = 'UNKNOWN';
  visitanteCorrente = null;


  //cor = '13, 70, 83';
  //cor = '0,122,204';

  constructor(private route: ActivatedRoute, private srv: PaginaInstalacaoAppApi,
    private cookieService: CookieService,
    private visitanteSrv: VisitanteApi, private router: Router,private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.carregaPagina();
  }

  trataCookie() {
    this.cookieValue = this.cookieService.get('idDigicom');
    if (!this.cookieValue) {
      this.visitanteSrv.proximoCookie()
        .subscribe((result: any) => {
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
    visita.paginaInstalacaoAppId = this.pagina.id;
    visita.dispositivo = this.deviceService.device;
    this.visitanteSrv.create(visita)
      .subscribe((resultado: any) => {
        this.visitanteCorrente = resultado;
      })
  }




  carregaPagina() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      let filtro = { "where": { "codigoHash": id }, "include": { "relation": "itemValidacaoPaginas", "scope": { "order": "ordenacao" } } };
      console.log('Filtro: ' , filtro);
      this.srv.findOne(filtro)
        .subscribe((paginaResult: PaginaInstalacaoApp) => {
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
