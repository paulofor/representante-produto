/* tslint:disable */

declare var Object: any;
export interface DiaSemanaInterface {
  "nomeDia"?: string;
  "posicaoDia"?: number;
  "id"?: number;
}

export class DiaSemana implements DiaSemanaInterface {
  "nomeDia": string;
  "posicaoDia": number;
  "id": number;
  constructor(data?: DiaSemanaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DiaSemana`.
   */
  public static getModelName() {
    return "DiaSemana";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DiaSemana for dynamic purposes.
  **/
  public static factory(data: DiaSemanaInterface): DiaSemana{
    return new DiaSemana(data);
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
      name: 'DiaSemana',
      plural: 'DiaSemanas',
      path: 'DiaSemanas',
      idName: 'id',
      properties: {
        "nomeDia": {
          name: 'nomeDia',
          type: 'string'
        },
        "posicaoDia": {
          name: 'posicaoDia',
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
