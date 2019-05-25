/* tslint:disable */
import {
  ProjetoCanvasMySql
} from '../index';

declare var Object: any;
export interface AnuncioAdsInterface {
  "id"?: number;
  "titulo1"?: string;
  "titulo2"?: string;
  "titulo3"?: string;
  "descricao1"?: string;
  "descricao2"?: string;
  "permiteEdicao"?: number;
  "mediaImpressao"?: number;
  "desvioImpressao"?: number;
  "mediaCtr"?: number;
  "desvioCtr"?: number;
  "mediaConversao"?: number;
  "desvioConversao"?: number;
  "ocorrencias"?: number;
  "projetoCanvasMySqlId"?: number;
  "valorConceitoId"?: number;
  projetoCanvasMySql?: ProjetoCanvasMySql;
}

export class AnuncioAds implements AnuncioAdsInterface {
  "id": number;
  "titulo1": string;
  "titulo2": string;
  "titulo3": string;
  "descricao1": string;
  "descricao2": string;
  "permiteEdicao": number;
  "mediaImpressao": number;
  "desvioImpressao": number;
  "mediaCtr": number;
  "desvioCtr": number;
  "mediaConversao": number;
  "desvioConversao": number;
  "ocorrencias": number;
  "projetoCanvasMySqlId": number;
  "valorConceitoId": number;
  projetoCanvasMySql: ProjetoCanvasMySql;
  constructor(data?: AnuncioAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AnuncioAds`.
   */
  public static getModelName() {
    return "AnuncioAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AnuncioAds for dynamic purposes.
  **/
  public static factory(data: AnuncioAdsInterface): AnuncioAds{
    return new AnuncioAds(data);
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
      name: 'AnuncioAds',
      plural: 'AnuncioAds',
      path: 'AnuncioAds',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "titulo1": {
          name: 'titulo1',
          type: 'string'
        },
        "titulo2": {
          name: 'titulo2',
          type: 'string'
        },
        "titulo3": {
          name: 'titulo3',
          type: 'string'
        },
        "descricao1": {
          name: 'descricao1',
          type: 'string'
        },
        "descricao2": {
          name: 'descricao2',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "mediaImpressao": {
          name: 'mediaImpressao',
          type: 'number'
        },
        "desvioImpressao": {
          name: 'desvioImpressao',
          type: 'number'
        },
        "mediaCtr": {
          name: 'mediaCtr',
          type: 'number'
        },
        "desvioCtr": {
          name: 'desvioCtr',
          type: 'number'
        },
        "mediaConversao": {
          name: 'mediaConversao',
          type: 'number'
        },
        "desvioConversao": {
          name: 'desvioConversao',
          type: 'number'
        },
        "ocorrencias": {
          name: 'ocorrencias',
          type: 'number'
        },
        "projetoCanvasMySqlId": {
          name: 'projetoCanvasMySqlId',
          type: 'number'
        },
        "valorConceitoId": {
          name: 'valorConceitoId',
          type: 'number'
        },
      },
      relations: {
        projetoCanvasMySql: {
          name: 'projetoCanvasMySql',
          type: 'ProjetoCanvasMySql',
          model: 'ProjetoCanvasMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoCanvasMySqlId',
          keyTo: 'id'
        },
      }
    }
  }
}
