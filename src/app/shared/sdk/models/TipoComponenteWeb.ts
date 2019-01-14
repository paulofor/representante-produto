/* tslint:disable */

declare var Object: any;
export interface TipoComponenteWebInterface {
  "nome"?: string;
  "id"?: number;
}

export class TipoComponenteWeb implements TipoComponenteWebInterface {
  "nome": string;
  "id": number;
  constructor(data?: TipoComponenteWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoComponenteWeb`.
   */
  public static getModelName() {
    return "TipoComponenteWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoComponenteWeb for dynamic purposes.
  **/
  public static factory(data: TipoComponenteWebInterface): TipoComponenteWeb{
    return new TipoComponenteWeb(data);
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
      name: 'TipoComponenteWeb',
      plural: 'TipoComponenteWebs',
      path: 'TipoComponenteWebs',
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
