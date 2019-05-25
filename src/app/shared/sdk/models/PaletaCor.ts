/* tslint:disable */

declare var Object: any;
export interface PaletaCorInterface {
  "cor1"?: string;
  "cor2"?: string;
  "cor3"?: string;
  "cor4"?: string;
  "cor5"?: string;
  "nome"?: string;
  "id"?: number;
}

export class PaletaCor implements PaletaCorInterface {
  "cor1": string;
  "cor2": string;
  "cor3": string;
  "cor4": string;
  "cor5": string;
  "nome": string;
  "id": number;
  constructor(data?: PaletaCorInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaletaCor`.
   */
  public static getModelName() {
    return "PaletaCor";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaletaCor for dynamic purposes.
  **/
  public static factory(data: PaletaCorInterface): PaletaCor{
    return new PaletaCor(data);
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
      name: 'PaletaCor',
      plural: 'PaletaCors',
      path: 'PaletaCors',
      idName: 'id',
      properties: {
        "cor1": {
          name: 'cor1',
          type: 'string'
        },
        "cor2": {
          name: 'cor2',
          type: 'string'
        },
        "cor3": {
          name: 'cor3',
          type: 'string'
        },
        "cor4": {
          name: 'cor4',
          type: 'string'
        },
        "cor5": {
          name: 'cor5',
          type: 'string'
        },
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
