import { Component, OnInit } from '@angular/core';
import { RegistroInteresse, RegistroInteresseApi } from '../shared/sdk';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registro: RegistroInteresse = new RegistroInteresse();
  submitted = false;


  visitante;

  constructor(private srv:RegistroInteresseApi) { }

  ngOnInit() {
   this.registro.email = '';
   console.log(this.registro.nome);
  }

  onSubmit() {
    console.log('Registro' , this.registro);
    this.submitted = true;
  }

}
