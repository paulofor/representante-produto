import { Component, OnInit, Input } from '@angular/core';
import { RegistroInteresse, RegistroInteresseApi, Visitante } from '../shared/sdk';


declare var gtag:Function;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registro: RegistroInteresse = new RegistroInteresse();
  submitted = false;


  @Input() visitante: Visitante;

  constructor(private srv: RegistroInteresseApi) { }

  ngOnInit() {
    this.registro.email = '';
    console.log(this.registro.nome);
  }

  onSubmit() {
    console.log('Registro', this.registro);
    this.registro.visitanteId = this.visitante.id;
    this.registro.paginaValidacaoWebId = this.visitante.paginaValidacaoWebId;
    this.srv.create(this.registro)
      .subscribe((result: any) => {
        console.log('Resultado:', result);
        this.submitted = true;
        this.registro = new RegistroInteresse();
        this.chamaConversao()
      })
  }

  
  chamaConversao() {
    console.log('Chamou converte');
   
    gtag('event', 'conversion', {
      'send_to': 'AW-853405762/YhUOCJ7CsYgBEMLg95YD'
    });
  }


}
