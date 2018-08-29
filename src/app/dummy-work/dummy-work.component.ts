import { Component, OnInit } from '@angular/core';
import { Visitante, PaginaValidacaoWeb, PaginaValidacaoWebApi, VisitanteApi } from 'src/app/shared/sdk';
import { CookieService } from 'ngx-cookie-service';

declare var $: any

@Component({
  selector: 'app-dummy-work',
  templateUrl: './dummy-work.component.html',
  styleUrls: ['./dummy-work.component.css']
})
export class DummyWorkComponent implements OnInit {


 
  consulta = { "include" : { "relation" : "itemValidacaoPaginas" , "scope" : {"order" : "ordenacao"} } };

  pagina : PaginaValidacaoWeb;
  cookieValue = 'UNKNOWN';
  visitanteCorrente = null;

  codigoPagina = 6;

  //cor = '13, 70, 83';
  //cor = '0,122,204';

  constructor(private srv :PaginaValidacaoWebApi,  
                private cookieService: CookieService, 
                private visitanteSrv: VisitanteApi) { }

  ngOnInit() {
    this.carregaPagina();
    this.cookieValue = this.cookieService.get('idDigicom');
    console.log('Cookie: ' , this.cookieValue);
    if (!this.cookieValue) {
      console.log('Cookie vazio');
      this.visitanteSrv.proximoCookie()
        .subscribe((result:any) => {
        console.log('Result Cookie: ', result);
        this.cookieService.set('idDigicom',result.codigoCookie);
        this.cookieValue = result.codigoCookie;
        this.registraVisita();
      })
    } else {
      console.log('Meu Cookie:' , this.cookieValue);
      this.registraVisita();
    }
  }

  registraVisita() {
    let visita = new Visitante();
    visita.codigoCookie = this.cookieValue;
    visita.paginaValidacaoWebId = this.codigoPagina;
    console.log('Visita: ' , visita);
    this.visitanteSrv.create(visita)
      .subscribe((resultado:any) => {
        console.log('Resultado visitante: ' , resultado);  
        this.visitanteCorrente = resultado;     
      })
  }

  carregaPagina() {
    this.srv.findById(this.codigoPagina,this.consulta)
      .subscribe((valor: PaginaValidacaoWeb) => {
        console.log('Pagina: ' + JSON.stringify(valor));
        this.pagina = valor;
        this.chamaLoader();
      })
  }

  chamaLoader(){
    $.getScript('../assets-medilab/js/custom.js');
  }

}
