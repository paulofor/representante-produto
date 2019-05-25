/* tslint:disable */

declare var Object: any;
export interface ContextoInterface {
  "nome": string;
  "id"?: number;
}

export class Contexto implements ContextoInterface {
  "nome": string;
  "id": number;
  constructor(data?: ContextoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contexto`.
   */
  public static getModelName() {
    return "Contexto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contexto for dynamic purposes.
  **/
  public static factory(data: ContextoInterface): Contexto{
    return new Contexto(data);
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
      name: 'Contexto',
      plural: 'Contextos',
      path: 'Contextos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
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
