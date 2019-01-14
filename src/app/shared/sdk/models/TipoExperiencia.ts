/* tslint:disable */

declare var Object: any;
export interface TipoExperienciaInterface {
  "nome": string;
  "descricao"?: string;
  "id"?: number;
}

export class TipoExperiencia implements TipoExperienciaInterface {
  "nome": string;
  "descricao": string;
  "id": number;
  constructor(data?: TipoExperienciaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoExperiencia`.
   */
  public static getModelName() {
    return "TipoExperiencia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoExperiencia for dynamic purposes.
  **/
  public static factory(data: TipoExperienciaInterface): TipoExperiencia{
    return new TipoExperiencia(data);
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
      name: 'TipoExperiencia',
      plural: 'TipoExperiencia',
      path: 'TipoExperiencia',
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
