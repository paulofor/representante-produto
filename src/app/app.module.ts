import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalLojamodaComponent } from './principal-lojamoda/principal-lojamoda.component';

import { RouterModule, Routes } from '@angular/router';
import { VantagemProdutoComponent } from './vantagem-produto/vantagem-produto.component';
import { VantagemProdutoEsquerdaComponent } from './vantagem-produto-esquerda/vantagem-produto-esquerda.component';
import { VantagemProdutoDireitaComponent } from './vantagem-produto-direita/vantagem-produto-direita.component';

const appRoutes: Routes = [
  { path: '', component: PrincipalLojamodaComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PrincipalLojamodaComponent,
    VantagemProdutoComponent,
    VantagemProdutoEsquerdaComponent,
    VantagemProdutoDireitaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
