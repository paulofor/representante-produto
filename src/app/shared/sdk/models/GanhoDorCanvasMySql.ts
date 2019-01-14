/* tslint:disable */
import {
  PalavraChaveAds
} from '../index';

declare var Object: any;
export interface GanhoDorCanvasMySqlInterface {
  "id"?: number;
  "descricao": string;
  "tipo": string;
  "projetoMySqlId"?: number;
  "projetoExemploId"?: number;
  palavraChaveAds?: PalavraChaveAds[];
}

export class GanhoDorCanvasMySql implements GanhoDorCanvasMySqlInterface {
  "id": number;
  "descricao": string;
  "tipo": string;
  "projetoMySqlId": number;
  "projetoExemploId": number;
  palavraChaveAds: PalavraChaveAds[];
  constructor(data?: GanhoDorCanvasMySqlInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "GanhoDorCanvasMySql";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GanhoDorCanvasMySql for dynamic purposes.
  **/
  public static factory(data: GanhoDorCanvasMySqlInterface): GanhoDorCanvasMySql{
    return new GanhoDorCanvasMySql(data);
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
      name: 'GanhoDorCanvasMySql',
      plural: 'GanhoDorCanvasMySqls',
      path: 'GanhoDorCanvasMySqls',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "projetoExemploId": {
          name: 'projetoExemploId',
          type: 'number'
        },
      },
      relations: {
        palavraChaveAds: {
          name: 'palavraChaveAds',
          type: 'PalavraChaveAds[]',
          model: 'PalavraChaveAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'ganhoDorCanvasMySqlId'
        },
      }
    }
  }
}
