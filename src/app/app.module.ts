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


const appRoutes: Routes = [
  { path: '', component: PrincipalLojamodaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PrincipalLojamodaComponent,
    VantagemProdutoEsquerdaComponent,
    VantagemProdutoDireitaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
  ],
  providers: [
    PaginaValidacaoWebApi,
    SocketDriver
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
