/* tslint:disable */
import {
  AnuncioAds,
  CampanhaAds
} from '../index';

declare var Object: any;
export interface CampanhaAnuncioResultadoInterface {
  "idAds"?: string;
  "quantidadeImpressao"?: number;
  "quantidadeClique"?: number;
  "custo"?: number;
  "ctr"?: number;
  "cpcMedio"?: number;
  "conversao"?: number;
  "custoConversao"?: number;
  "taxaConversao"?: number;
  "id"?: number;
  "anuncioAdsId"?: number;
  "campanhaAdsId"?: number;
  anuncioAds?: AnuncioAds;
  campanhaAds?: CampanhaAds;
}

export class CampanhaAnuncioResultado implements CampanhaAnuncioResultadoInterface {
  "idAds": string;
  "quantidadeImpressao": number;
  "quantidadeClique": number;
  "custo": number;
  "ctr": number;
  "cpcMedio": number;
  "conversao": number;
  "custoConversao": number;
  "taxaConversao": number;
  "id": number;
  "anuncioAdsId": number;
  "campanhaAdsId": number;
  anuncioAds: AnuncioAds;
  campanhaAds: CampanhaAds;
  constructor(data?: CampanhaAnuncioResultadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampanhaAnuncioResultado`.
   */
  public static getModelName() {
    return "CampanhaAnuncioResultado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampanhaAnuncioResultado for dynamic purposes.
  **/
  public static factory(data: CampanhaAnuncioResultadoInterface): CampanhaAnuncioResultado{
    return new CampanhaAnuncioResultado(data);
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
      name: 'CampanhaAnuncioResultado',
      plural: 'CampanhaAnuncioResultados',
      path: 'CampanhaAnuncioResultados',
      idName: 'id',
      properties: {
        "idAds": {
          name: 'idAds',
          type: 'string'
        },
        "quantidadeImpressao": {
          name: 'quantidadeImpressao',
          type: 'number'
        },
        "quantidadeClique": {
          name: 'quantidadeClique',
          type: 'number'
        },
        "custo": {
          name: 'custo',
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "anuncioAdsId": {
          name: 'anuncioAdsId',
          type: 'number'
        },
        "campanhaAdsId": {
          name: 'campanhaAdsId',
          type: 'number'
        },
      },
      relations: {
        anuncioAds: {
          name: 'anuncioAds',
          type: 'AnuncioAds',
          model: 'AnuncioAds',
          relationType: 'belongsTo',
                  keyFrom: 'anuncioAdsId',
          keyTo: 'id'
        },
        campanhaAds: {
          name: 'campanhaAds',
          type: 'CampanhaAds',
          model: 'CampanhaAds',
          relationType: 'belongsTo',
                  keyFrom: 'campanhaAdsId',
          keyTo: 'id'
        },
      }
    }
  }
}
