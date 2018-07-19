/* tslint:disable */

declare var Object: any;
export interface ProjetoCanvasInterface {
  "id"?: number;
  "descricao": string;
  "idProjeto": number;
  "tipo": string;
  "projetoId"?: number;
}

export class ProjetoCanvas implements ProjetoCanvasInterface {
  "id": number;
  "descricao": string;
  "idProjeto": number;
  "tipo": string;
  "projetoId": number;
  constructor(data?: ProjetoCanvasInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjetoCanvas`.
   */
  public static getModelName() {
    return "ProjetoCanvas";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjetoCanvas for dynamic purposes.
  **/
  public static factory(data: ProjetoCanvasInterface): ProjetoCanvas{
    return new ProjetoCanvas(data);
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
      name: 'ProjetoCanvas',
      plural: 'ProjetoCanvases',
      path: 'ProjetoCanvases',
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
        "idProjeto": {
          name: 'idProjeto',
          type: 'number'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "projetoId": {
          name: 'projetoId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
