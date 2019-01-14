/* tslint:disable */
import {
  Entidade
} from '../index';

declare var Object: any;
export interface Relacionamento_entidadeInterface {
  "id_relacionamento_entidade"?: number;
  "qtde_entidade1"?: string;
  "qtde_entidade2"?: string;
  "nome1"?: string;
  "nome2"?: string;
  "editavel"?: boolean;
  "label_tela"?: string;
  "tipo_apresentacao"?: string;
  "obrigatorio"?: boolean;
  "dependente"?: boolean;
  "id_entidade1"?: number;
  "id_entidade2"?: number;
  entidade1?: Entidade;
  entidade2?: Entidade;
}

export class Relacionamento_entidade implements Relacionamento_entidadeInterface {
  "id_relacionamento_entidade": number;
  "qtde_entidade1": string;
  "qtde_entidade2": string;
  "nome1": string;
  "nome2": string;
  "editavel": boolean;
  "label_tela": string;
  "tipo_apresentacao": string;
  "obrigatorio": boolean;
  "dependente": boolean;
  "id_entidade1": number;
  "id_entidade2": number;
  entidade1: Entidade;
  entidade2: Entidade;
  constructor(data?: Relacionamento_entidadeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Relacionamento_entidade`.
   */
  public static getModelName() {
    return "Relacionamento_entidade";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Relacionamento_entidade for dynamic purposes.
  **/
  public static factory(data: Relacionamento_entidadeInterface): Relacionamento_entidade{
    return new Relacionamento_entidade(data);
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
      name: 'Relacionamento_entidade',
      plural: 'Relacionamento_entidades',
      path: 'Relacionamento_entidades',
      idName: 'id_relacionamento_entidade',
      properties: {
        "id_relacionamento_entidade": {
          name: 'id_relacionamento_entidade',
          type: 'number'
        },
        "qtde_entidade1": {
          name: 'qtde_entidade1',
          type: 'string'
        },
        "qtde_entidade2": {
          name: 'qtde_entidade2',
          type: 'string'
        },
        "nome1": {
          name: 'nome1',
          type: 'string'
        },
        "nome2": {
          name: 'nome2',
          type: 'string'
        },
        "editavel": {
          name: 'editavel',
          type: 'boolean'
        },
        "label_tela": {
          name: 'label_tela',
          type: 'string'
        },
        "tipo_apresentacao": {
          name: 'tipo_apresentacao',
          type: 'string'
        },
        "obrigatorio": {
          name: 'obrigatorio',
          type: 'boolean'
        },
        "dependente": {
          name: 'dependente',
          type: 'boolean'
        },
        "id_entidade1": {
          name: 'id_entidade1',
          type: 'number'
        },
        "id_entidade2": {
          name: 'id_entidade2',
          type: 'number'
        },
      },
      relations: {
        entidade1: {
          name: 'entidade1',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'belongsTo',
                  keyFrom: 'id_entidade1',
          keyTo: 'id_entidade'
        },
        entidade2: {
          name: 'entidade2',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'belongsTo',
                  keyFrom: 'id_entidade2',
          keyTo: 'id_entidade'
        },
      }
    }
  }
}
