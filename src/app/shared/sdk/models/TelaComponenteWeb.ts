/* tslint:disable */
import {
  ComponenteWeb
} from '../index';

declare var Object: any;
export interface TelaComponenteWebInterface {
  "ordenacao"?: number;
  "id"?: number;
  "componenteWebId"?: number;
  "telaWebId"?: number;
  componenteWeb?: ComponenteWeb;
}

export class TelaComponenteWeb implements TelaComponenteWebInterface {
  "ordenacao": number;
  "id": number;
  "componenteWebId": number;
  "telaWebId": number;
  componenteWeb: ComponenteWeb;
  constructor(data?: TelaComponenteWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TelaComponenteWeb`.
   */
  public static getModelName() {
    return "TelaComponenteWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TelaComponenteWeb for dynamic purposes.
  **/
  public static factory(data: TelaComponenteWebInterface): TelaComponenteWeb{
    return new TelaComponenteWeb(data);
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
      name: 'TelaComponenteWeb',
      plural: 'TelaComponenteWebs',
      path: 'TelaComponenteWebs',
      idName: 'id',
      properties: {
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "componenteWebId": {
          name: 'componenteWebId',
          type: 'number'
        },
        "telaWebId": {
          name: 'telaWebId',
          type: 'number'
        },
      },
      relations: {
        componenteWeb: {
          name: 'componenteWeb',
          type: 'ComponenteWeb',
          model: 'ComponenteWeb',
          relationType: 'belongsTo',
                  keyFrom: 'componenteWebId',
          keyTo: 'id'
        },
      }
    }
  }
}
