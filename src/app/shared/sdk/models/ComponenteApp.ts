/* tslint:disable */

declare var Object: any;
export interface ComponenteAppInterface {
  "nome"?: string;
  "tipo"?: string;
  "id"?: number;
  "telaAppId"?: number;
}

export class ComponenteApp implements ComponenteAppInterface {
  "nome": string;
  "tipo": string;
  "id": number;
  "telaAppId": number;
  constructor(data?: ComponenteAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ComponenteApp`.
   */
  public static getModelName() {
    return "ComponenteApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ComponenteApp for dynamic purposes.
  **/
  public static factory(data: ComponenteAppInterface): ComponenteApp{
    return new ComponenteApp(data);
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
      name: 'ComponenteApp',
      plural: 'ComponenteApps',
      path: 'ComponenteApps',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "telaAppId": {
          name: 'telaAppId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
