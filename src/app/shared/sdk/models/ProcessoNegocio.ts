/* tslint:disable */

declare var Object: any;
export interface ProcessoNegocioInterface {
  "nome"?: string;
  "descricao"?: string;
  "url"?: string;
  "id"?: number;
}

export class ProcessoNegocio implements ProcessoNegocioInterface {
  "nome": string;
  "descricao": string;
  "url": string;
  "id": number;
  constructor(data?: ProcessoNegocioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProcessoNegocio`.
   */
  public static getModelName() {
    return "ProcessoNegocio";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProcessoNegocio for dynamic purposes.
  **/
  public static factory(data: ProcessoNegocioInterface): ProcessoNegocio{
    return new ProcessoNegocio(data);
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
      name: 'ProcessoNegocio',
      plural: 'ProcessoNegocios',
      path: 'ProcessoNegocios',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "url": {
          name: 'url',
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
