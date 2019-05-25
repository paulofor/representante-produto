/* tslint:disable */

declare var Object: any;
export interface PaletaAplicacaoInterface {
  "ativo"?: number;
  "id"?: number;
  "aplicacaoId"?: number;
}

export class PaletaAplicacao implements PaletaAplicacaoInterface {
  "ativo": number;
  "id": number;
  "aplicacaoId": number;
  constructor(data?: PaletaAplicacaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaletaAplicacao`.
   */
  public static getModelName() {
    return "PaletaAplicacao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaletaAplicacao for dynamic purposes.
  **/
  public static factory(data: PaletaAplicacaoInterface): PaletaAplicacao{
    return new PaletaAplicacao(data);
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
      name: 'PaletaAplicacao',
      plural: 'PaletaAplicacaos',
      path: 'PaletaAplicacaos',
      idName: 'id',
      properties: {
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "aplicacaoId": {
          name: 'aplicacaoId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
