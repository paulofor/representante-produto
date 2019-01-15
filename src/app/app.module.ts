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
import { DummyWorkComponent } from './dummy-work/dummy-work.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { VantagemProdutoDireitaAppComponent } from './vantagem-produto-direita-app/vantagem-produto-direita-app.component';
import { VantagemProdutoEsquerdaAppComponent } from './vantagem-produto-esquerda-app/vantagem-produto-esquerda-app.component';


// dummy funciona perfeitamente bem.
// work vou tentando para identificar os problemas

const appRoutes: Routes = [
  { path: '', component: PrincipalLojamodaComponent } ,
  { path: 'dummy', component: ItemDummyComponent }, 
  { path: 'work', component: DummyWorkComponent },
  { path: 'display/:id' , component: PrincipalLojamodaComponent },
  { path: 'erro' , component: PaginaNaoEncontradaComponent},
  { path: '**' , component: PaginaNaoEncontradaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PrincipalLojamodaComponent,
    VantagemProdutoEsquerdaComponent,
    VantagemProdutoDireitaComponent,
    ItemDummyComponent,
    FormComponent,
    DummyWorkComponent,
    PaginaNaoEncontradaComponent,
    VantagemProdutoDireitaAppComponent,
    VantagemProdutoEsquerdaAppComponent
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
