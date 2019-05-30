import { Component, OnInit } from '@angular/core';
import { PaginaValidacaoWebApi, VisitanteApi, Visitante } from '../shared/sdk';
import { PaginaValidacaoWeb } from 'src/app/shared/sdk/models';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/router';
import { Params } from '@angular/router';

declare var $: any

@Component({
  selector: 'app-principal-lojamoda',
  templateUrl: './principal-lojamoda.component.html',
  styleUrls: ['./principal-lojamoda.component.css']
})


export class PrincipalLojamodaComponent implements OnInit {

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
    this.identificaAcao();
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

  identificaAcao() {
    this.route.queryParams.subscribe((params: Params) => {
      let id = params['id'];
      console.log('id: ' , id);
      if (id) {
        this.carregaPagina(id);
      } else {
        let inst = params['inst'];
        console.log('inst: ' , id);
        if (inst) {
          this.router.navigate(['/inst/' + inst]);
        } else {
          let mob = params['mob'];
          console.log('mob: ' , mob);
          if (mob) {
            this.router.navigate(['/mob/' + mob]);
          } else {
            this.router.navigate(['/home']);
          }
        }
      }
    });
  }

  carregaPagina(id) {
    console.log('Id: ', id);
    let filtro = {"where" : {"codigoHash":id} , "include": { "relation": "itemValidacaoPaginas", "scope": { "order": "ordenacao" } } };
    this.srv.findOne(filtro)
      .subscribe((paginaResult: PaginaValidacaoWeb) => {
        this.pagina = paginaResult;
        this.trataCookie();
        this.chamaLoader();
      })
  }




  chamaLoader() {
    $.getScript('assets-medilab/js/custom.js');
  }

}
