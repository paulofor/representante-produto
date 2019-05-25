/* tslint:disable */
import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SDKModels } from './SDKModels';
import { BaseLoopBackApi } from '../core/base.service';
import { LoopBackConfig } from '../../lb.config';
import { LoopBackAuth } from '../core/auth.service';
import { LoopBackFilter,  } from '../../models/BaseModels';
import { ErrorHandler } from '../core/error.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PalavraChaveEstatistica } from '../../models/PalavraChaveEstatistica';
import { SocketConnection } from '../../sockets/socket.connections';
import { PalavraChaveRaiz } from '../../models/PalavraChaveRaiz';
import { PalavraChaveGoogle } from '../../models/PalavraChaveGoogle';


/**
 * Api services for the `PalavraChaveEstatistica` model.
 */
@Injectable()
export class PalavraChaveEstatisticaApi extends BaseLoopBackApi {

  constructor(
    @Inject(HttpClient) protected http: HttpClient,
    @Inject(SocketConnection) protected connection: SocketConnection,
    @Inject(SDKModels) protected models: SDKModels,
    @Inject(LoopBackAuth) protected auth: LoopBackAuth,
    @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler
  ) {
    super(http,  connection,  models, auth, errorHandler);
  }

  /**
   * Fetches belongsTo relation palavraChaveRaiz.
   *
   * @param {any} id PalavraChaveEstatistica id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PalavraChaveEstatistica` object.)
   * </em>
   */
  public getPalavraChaveRaiz(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/:id/palavraChaveRaiz";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Fetches belongsTo relation palavraChaveGoogle.
   *
   * @param {any} id PalavraChaveEstatistica id
   *
   * @param {boolean} refresh 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PalavraChaveEstatistica` object.)
   * </em>
   */
  public getPalavraChaveGoogle(id: any, refresh: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/:id/palavraChaveGoogle";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof refresh !== 'undefined' && refresh !== null) _urlParams.refresh = refresh;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - Model instance data
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PalavraChaveEstatistica` object.)
   * </em>
   */
  public patchOrCreate(data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas";
    let _routeParams: any = {};
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @param {any} id PalavraChaveEstatistica id
   *
   * @param {object} data Request data.
   *
   *  - `data` – `{object}` - An object of model property name/value pairs
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PalavraChaveEstatistica` object.)
   * </em>
   */
  public patchAttributes(id: any, data: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "PATCH";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/:id";
    let _routeParams: any = {
      id: id
    };
    let _postBody: any = {
      data: data
    };
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Insere uma lista de itens coletados pelo Java. Insere PalavraChaveGoogle se necessario, atualiza mais recente, insere PalavraChaveEstatistica
   *
   * @param {object} data Request data.
   *
   *  - `listaResultados` – `{any}` - 
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public InsereLista(listaResultados: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/insereLista";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof listaResultados !== 'undefined' && listaResultados !== null) _urlParams.listaResultados = listaResultados;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Insere uma lista de itens coletados
   *
   * @param {object} data Request data.
   *
   *  - `listaResultados` – `{any}` - Fake do InsereLista. Apenas mostra o console o total de itens recebidos.
   *
   * @returns {object} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * This method returns no data.
   */
  public InsereListaTeste(listaResultados: any, customHeaders?: Function): Observable<any> {
    let _method: string = "PUT";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/insereListaTeste";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof listaResultados !== 'undefined' && listaResultados !== null) _urlParams.listaResultados = listaResultados;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Lista os maisRecentes melhores, ordenados por indiceCompeticao. Considera volume maior que o informado e custo menor
   *
   * @param {number} limiteVolume valor minimo de volume mensal
   *
   * @param {number} limiteCpc valor maximo de cpc
   *
   * @param {number} idPalavraRaiz identificado da palavra raiz
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * Lista com os melhores
   */
  public ListaMelhores(limiteVolume: any, limiteCpc: any, idPalavraRaiz: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/listaMelhores";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof limiteVolume !== 'undefined' && limiteVolume !== null) _urlParams.limiteVolume = limiteVolume;
    if (typeof limiteCpc !== 'undefined' && limiteCpc !== null) _urlParams.limiteCpc = limiteCpc;
    if (typeof idPalavraRaiz !== 'undefined' && idPalavraRaiz !== null) _urlParams.idPalavraRaiz = idPalavraRaiz;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Lista de melhores casos com valores limites definidos no servidor. (Cpc: 0.9 , Volume: 5000)
   *
   * @param {number} idPalavraChaveRaiz 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PalavraChaveEstatistica` object.)
   * </em>
   */
  public ListaMelhoresPadrao(idPalavraChaveRaiz: any = {}, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/listaMelhoresPadrao";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof idPalavraChaveRaiz !== 'undefined' && idPalavraChaveRaiz !== null) _urlParams.idPalavraChaveRaiz = idPalavraChaveRaiz;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Lista de melhores casos com valores limites definidos no servidor. (Cpc: 0.4 , Volume: 5000)
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PalavraChaveEstatistica` object.)
   * </em>
   */
  public ListaMelhoresBaixoCusto(customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/listaMelhoresBaixoCusto";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * Retorna a lista de palavras em sua versao recente relacionadas a um projeto.
   *
   * @param {number} idProjeto 
   *
   * @returns {object[]} An empty reference that will be
   *   populated with the actual data once the response is returned
   *   from the server.
   *
   * <em>
   * (The remote method definition does not provide any description.
   * This usually means the response is a `PalavraChaveEstatistica` object.)
   * </em>
   */
  public ListaPorIdProjeto(idProjeto: any, customHeaders?: Function): Observable<any> {
    let _method: string = "GET";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
    "/PalavraChaveEstatisticas/listaPorIdProjeto";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof idProjeto !== 'undefined' && idProjeto !== null) _urlParams.idProjeto = idProjeto;
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraChaveEstatistica`.
   */
  public getModelName() {
    return "PalavraChaveEstatistica";
  }
}
