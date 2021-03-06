/* tslint:disable */
import {
  AnuncioAds,
  PaginaValidacaoWeb,
  PalavraChaveAds,
  ModeloCampanhaAds,
  CampanhaAnuncioResultado,
  CampanhaPalavraChaveResultado,
  SetupCampanha,
  PaginaInstalacaoApp
} from '../index';

declare var Object: any;
export interface CampanhaAdsInterface {
  "id"?: number;
  "idAds"?: string;
  "nome"?: string;
  "dataInicial"?: Date;
  "dataFinal"?: Date;
  "dataCriacao"?: Date;
  "dataPublicacao"?: Date;
  "dataResultado"?: Date;
  "dataFechamento"?: Date;
  "quantidadeImpressao"?: number;
  "quantidadeClique"?: number;
  "quantidadeConversao"?: number;
  "orcamentoDia"?: number;
  "orcamentoTotalPlanejado"?: number;
  "orcamentoTotalExecutado"?: number;
  "urlAlvo"?: string;
  "urlAlvoMobile"?: string;
  "finalizadaProducao"?: boolean;
  "permiteEdicao"?: number;
  "ctr"?: number;
  "cpcMedio"?: number;
  "conversao"?: number;
  "custoConversao"?: number;
  "taxaConversao"?: number;
  "cliquePlanejado"?: number;
  "objetivo"?: string;
  "paginaValidacaoWebId"?: number;
  "modeloCampanhaAdsId"?: number;
  "setupCampanhaId"?: number;
  "paginaInstalacaoAppId"?: number;
  anuncioAds?: AnuncioAds[];
  paginaValidacaoWeb?: PaginaValidacaoWeb;
  palavraChaveAds?: PalavraChaveAds[];
  modeloCampanhaAds?: ModeloCampanhaAds;
  campanhaAnuncioResultados?: CampanhaAnuncioResultado[];
  campanhaPalavraChaveResultados?: CampanhaPalavraChaveResultado[];
  setupCampanha?: SetupCampanha;
  paginaInstalacaoApp?: PaginaInstalacaoApp;
}

export class CampanhaAds implements CampanhaAdsInterface {
  "id": number;
  "idAds": string;
  "nome": string;
  "dataInicial": Date;
  "dataFinal": Date;
  "dataCriacao": Date;
  "dataPublicacao": Date;
  "dataResultado": Date;
  "dataFechamento": Date;
  "quantidadeImpressao": number;
  "quantidadeClique": number;
  "quantidadeConversao": number;
  "orcamentoDia": number;
  "orcamentoTotalPlanejado": number;
  "orcamentoTotalExecutado": number;
  "urlAlvo": string;
  "urlAlvoMobile": string;
  "finalizadaProducao": boolean;
  "permiteEdicao": number;
  "ctr": number;
  "cpcMedio": number;
  "conversao": number;
  "custoConversao": number;
  "taxaConversao": number;
  "cliquePlanejado": number;
  "objetivo": string;
  "paginaValidacaoWebId": number;
  "modeloCampanhaAdsId": number;
  "setupCampanhaId": number;
  "paginaInstalacaoAppId": number;
  anuncioAds: AnuncioAds[];
  paginaValidacaoWeb: PaginaValidacaoWeb;
  palavraChaveAds: PalavraChaveAds[];
  modeloCampanhaAds: ModeloCampanhaAds;
  campanhaAnuncioResultados: CampanhaAnuncioResultado[];
  campanhaPalavraChaveResultados: CampanhaPalavraChaveResultado[];
  setupCampanha: SetupCampanha;
  paginaInstalacaoApp: PaginaInstalacaoApp;
  constructor(data?: CampanhaAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAds`.
   */
  public static getModelName() {
    return "CampanhaAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAds for dynamic purposes.
  **/
  public static factory(data: CampanhaAdsInterface): CampanhaAds{
    return new CampanhaAds(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CampanhaAds',
      plural: 'CampanhaAds',
      path: 'CampanhaAds',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "dataInicial": {
          name: 'dataInicial',
          type: 'Date'
        },
        "dataFinal": {
          name: 'dataFinal',
          type: 'Date'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "dataPublicacao": {
          name: 'dataPublicacao',
          type: 'Date'
        },
        "dataResultado": {
          name: 'dataResultado',
          type: 'Date'
        },
        "dataFechamento": {
          name: 'dataFechamento',
          type: 'Date'
        },
        "quantidadeImpressao": {
          name: 'quantidadeImpressao',
          type: 'number'
        },
        "quantidadeClique": {
          name: 'quantidadeClique',
          type: 'number'
        },
        "quantidadeConversao": {
          name: 'quantidadeConversao',
          type: 'number'
        },
        "orcamentoDia": {
          name: 'orcamentoDia',
          type: 'number'
        },
        "orcamentoTotalPlanejado": {
          name: 'orcamentoTotalPlanejado',
          type: 'number'
        },
        "orcamentoTotalExecutado": {
          name: 'orcamentoTotalExecutado',
          type: 'number'
        },
        "urlAlvo": {
          name: 'urlAlvo',
          type: 'string'
        },
        "urlAlvoMobile": {
          name: 'urlAlvoMobile',
          type: 'string'
        },
        "finalizadaProducao": {
          name: 'finalizadaProducao',
          type: 'boolean'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "ctr": {
          name: 'ctr',
          type: 'number'
        },
        "cpcMedio": {
          name: 'cpcMedio',
          type: 'number'
        },
        "conversao": {
          name: 'conversao',
          type: 'number'
        },
        "custoConversao": {
          name: 'custoConversao',
          type: 'number'
        },
        "taxaConversao": {
          name: 'taxaConversao',
          type: 'number'
        },
        "cliquePlanejado": {
          name: 'cliquePlanejado',
          type: 'number'
        },
        "objetivo": {
          name: 'objetivo',
          type: 'string'
        },
        "paginaValidacaoWebId": {
          name: 'paginaValidacaoWebId',
          type: 'number'
        },
        "modeloCampanhaAdsId": {
          name: 'modeloCampanhaAdsId',
          type: 'number'
        },
        "setupCampanhaId": {
          name: 'setupCampanhaId',
          type: 'number'
        },
        "paginaInstalacaoAppId": {
          name: 'paginaInstalacaoAppId',
          type: 'number'
        },
      },
      relations: {
        anuncioAds: {
          name: 'anuncioAds',
          type: 'AnuncioAds[]',
          model: 'AnuncioAds',
          relationType: 'hasMany',
          modelThrough: 'CampanhaAdsAnuncioAds',
          keyThrough: 'anuncioAdsId',
          keyFrom: 'id',
          keyTo: 'campanhaAdsId'
        },
        paginaValidacaoWeb: {
          name: 'paginaValidacaoWeb',
          type: 'PaginaValidacaoWeb',
          model: 'PaginaValidacaoWeb',
          relationType: 'belongsTo',
                  keyFrom: 'paginaValidacaoWebId',
          keyTo: 'id'
        },
        palavraChaveAds: {
          name: 'palavraChaveAds',
          type: 'PalavraChaveAds[]',
          model: 'PalavraChaveAds',
          relationType: 'hasMany',
          modelThrough: 'CampanhaAdsPalavraChaveAds',
          keyThrough: 'palavraChaveAdsId',
          keyFrom: 'id',
          keyTo: 'campanhaAdsId'
        },
        modeloCampanhaAds: {
          name: 'modeloCampanhaAds',
          type: 'ModeloCampanhaAds',
          model: 'ModeloCampanhaAds',
          relationType: 'belongsTo',
                  keyFrom: 'modeloCampanhaAdsId',
          keyTo: 'id'
        },
        campanhaAnuncioResultados: {
          name: 'campanhaAnuncioResultados',
          type: 'CampanhaAnuncioResultado[]',
          model: 'CampanhaAnuncioResultado',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsId'
        },
        campanhaPalavraChaveResultados: {
          name: 'campanhaPalavraChaveResultados',
          type: 'CampanhaPalavraChaveResultado[]',
          model: 'CampanhaPalavraChaveResultado',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'campanhaAdsId'
        },
        setupCampanha: {
          name: 'setupCampanha',
          type: 'SetupCampanha',
          model: 'SetupCampanha',
          relationType: 'belongsTo',
                  keyFrom: 'setupCampanhaId',
          keyTo: 'id'
        },
        paginaInstalacaoApp: {
          name: 'paginaInstalacaoApp',
          type: 'PaginaInstalacaoApp',
          model: 'PaginaInstalacaoApp',
          relationType: 'belongsTo',
                  keyFrom: 'paginaInstalacaoAppId',
          keyTo: 'id'
        },
      }
    }
  }
}
