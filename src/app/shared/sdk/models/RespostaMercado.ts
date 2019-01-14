/* tslint:disable */

declare var Object: any;
export interface RespostaMercadoInterface {
  "nome": string;
  "ordenacao": number;
  "id"?: number;
}

export class RespostaMercado implements RespostaMercadoInterface {
  "nome": string;
  "ordenacao": number;
  "id": number;
  constructor(data?: RespostaMercadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RespostaMercado`.
   */
  public static getModelName() {
    return "RespostaMercado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RespostaMercado for dynamic purposes.
  **/
  public static factory(data: RespostaMercadoInterface): RespostaMercado{
    return new RespostaMercado(data);
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
      name: 'RespostaMercado',
      plural: 'RespostaMercados',
      path: 'RespostaMercados',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
