/* tslint:disable */

declare var Object: any;
export interface MvpCanvasMySqlInterface {
  "id"?: number;
  "descricao": string;
  "tipo": string;
  "projetoMySqlId"?: number;
  "projetoExemploId"?: number;
}

export class MvpCanvasMySql implements MvpCanvasMySqlInterface {
  "id": number;
  "descricao": string;
  "tipo": string;
  "projetoMySqlId": number;
  "projetoExemploId": number;
  constructor(data?: MvpCanvasMySqlInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MvpCanvasMySql`.
   */
  public static getModelName() {
    return "MvpCanvasMySql";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MvpCanvasMySql for dynamic purposes.
  **/
  public static factory(data: MvpCanvasMySqlInterface): MvpCanvasMySql{
    return new MvpCanvasMySql(data);
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
      name: 'MvpCanvasMySql',
      plural: 'MvpCanvasMySqls',
      path: 'MvpCanvasMySqls',
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
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "projetoExemploId": {
          name: 'projetoExemploId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
