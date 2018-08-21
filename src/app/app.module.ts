import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalLojamodaComponent } from './principal-lojamoda/principal-lojamoda.component';

import { RouterModule, Routes } from '@angular/router';

import { VantagemProdutoEsquerdaComponent } from './vantagem-produto-esquerda/vantagem-produto-esquerda.component';
import { VantagemProdutoDireitaComponent } from './vantagem-produto-direita/vantagem-produto-direita.component';
import { PaginaValidacaoWebApi, SDKModels, LoopBackAuth } from './shared/sdk/services/';
import { HttpClientModule } from '@angular/common/http';
import { SDKBrowserModule } from './shared/sdk';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { ItemDummyComponent } from './item-dummy/item-dummy.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


const appRoutes: Routes = [
  { path: '', component: PrincipalLojamodaComponent } ,
  { path: 'dummy', component: ItemDummyComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PrincipalLojamodaComponent,
    VantagemProdutoEsquerdaComponent,
    VantagemProdutoDireitaComponent,
    ItemDummyComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    FormsModule
  ],
  providers: [
    PaginaValidacaoWebApi,
    SocketDriver,
    CookieService 
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
