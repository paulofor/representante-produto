import { Component, OnInit } from '@angular/core';
import { RegistroInteresse, RegistroInteresseApi } from '../shared/sdk';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registro: RegistroInteresse;

  constructor(private srv:RegistroInteresseApi) { }

  ngOnInit() {
    this.registro = new RegistroInteresse();
  }

  onSubmit() {
    console.log('Registro' , this.registro);
  }

}
