/* tslint:disable */
import {
  GanhoDorCanvasMySql
} from '../index';

declare var Object: any;
export interface PalavraChaveAdsInterface {
  "id"?: number;
  "palavra": string;
  "ganhoDorCanvasMySqlId"?: number;
  ganhoDorCanvasMySql?: GanhoDorCanvasMySql;
}

export class PalavraChaveAds implements PalavraChaveAdsInterface {
  "id": number;
  "palavra": string;
  "ganhoDorCanvasMySqlId": number;
  ganhoDorCanvasMySql: GanhoDorCanvasMySql;
  constructor(data?: PalavraChaveAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraChaveAds`.
   */
  public static getModelName() {
    return "PalavraChaveAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraChaveAds for dynamic purposes.
  **/
  public static factory(data: PalavraChaveAdsInterface): PalavraChaveAds{
    return new PalavraChaveAds(data);
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
      name: 'PalavraChaveAds',
      plural: 'PalavraChaveAds',
      path: 'PalavraChaveAds',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "palavra": {
          name: 'palavra',
          type: 'string'
        },
        "ganhoDorCanvasMySqlId": {
          name: 'ganhoDorCanvasMySqlId',
          type: 'number'
        },
      },
      relations: {
        ganhoDorCanvasMySql: {
          name: 'ganhoDorCanvasMySql',
          type: 'GanhoDorCanvasMySql',
          model: 'GanhoDorCanvasMySql',
          relationType: 'belongsTo',
                  keyFrom: 'ganhoDorCanvasMySqlId',
          keyTo: 'id'
        },
      }
    }
  }
}
