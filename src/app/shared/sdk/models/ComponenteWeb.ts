/* tslint:disable */
import {
  Entidade,
  TipoComponenteWeb
} from '../index';

declare var Object: any;
export interface ComponenteWebInterface {
  "nome"?: string;
  "id"?: number;
  "entidadeId"?: number;
  "aplicacaoId"?: number;
  "tipoComponenteWebId"?: number;
  entidade?: Entidade;
  tipoComponenteWeb?: TipoComponenteWeb;
}

export class ComponenteWeb implements ComponenteWebInterface {
  "nome": string;
  "id": number;
  "entidadeId": number;
  "aplicacaoId": number;
  "tipoComponenteWebId": number;
  entidade: Entidade;
  tipoComponenteWeb: TipoComponenteWeb;
  constructor(data?: ComponenteWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ComponenteWeb`.
   */
  public static getModelName() {
    return "ComponenteWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ComponenteWeb for dynamic purposes.
  **/
  public static factory(data: ComponenteWebInterface): ComponenteWeb{
    return new ComponenteWeb(data);
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
      name: 'ComponenteWeb',
      plural: 'ComponenteWebs',
      path: 'ComponenteWebs',
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
        "entidadeId": {
          name: 'entidadeId',
          type: 'number'
        },
        "aplicacaoId": {
          name: 'aplicacaoId',
          type: 'number'
        },
        "tipoComponenteWebId": {
          name: 'tipoComponenteWebId',
          type: 'number'
        },
      },
      relations: {
        entidade: {
          name: 'entidade',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'belongsTo',
                  keyFrom: 'entidadeId',
          keyTo: 'id_entidade'
        },
        tipoComponenteWeb: {
          name: 'tipoComponenteWeb',
          type: 'TipoComponenteWeb',
          model: 'TipoComponenteWeb',
          relationType: 'belongsTo',
                  keyFrom: 'tipoComponenteWebId',
          keyTo: 'id'
        },
      }
    }
  }
}
