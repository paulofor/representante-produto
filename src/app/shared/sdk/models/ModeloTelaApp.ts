/* tslint:disable */

declare var Object: any;
export interface ModeloTelaAppInterface {
  "nome": string;
  "descricao"?: string;
  "id"?: number;
}

export class ModeloTelaApp implements ModeloTelaAppInterface {
  "nome": string;
  "descricao": string;
  "id": number;
  constructor(data?: ModeloTelaAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ModeloTelaApp`.
   */
  public static getModelName() {
    return "ModeloTelaApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ModeloTelaApp for dynamic purposes.
  **/
  public static factory(data: ModeloTelaAppInterface): ModeloTelaApp{
    return new ModeloTelaApp(data);
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
      name: 'ModeloTelaApp',
      plural: 'ModeloTelaApps',
      path: 'ModeloTelaApps',
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
