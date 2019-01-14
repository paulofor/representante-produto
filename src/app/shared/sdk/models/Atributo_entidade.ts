/* tslint:disable */

declare var Object: any;
export interface Atributo_entidadeInterface {
  "id_atributo_entidade"?: number;
  "nome"?: string;
  "tipo"?: string;
  "obrigatorio"?: boolean;
  "editavel"?: boolean;
  "label_tela"?: string;
  "ordenacao_tela"?: number;
  "id_entidade"?: number;
}

export class Atributo_entidade implements Atributo_entidadeInterface {
  "id_atributo_entidade": number;
  "nome": string;
  "tipo": string;
  "obrigatorio": boolean;
  "editavel": boolean;
  "label_tela": string;
  "ordenacao_tela": number;
  "id_entidade": number;
  constructor(data?: Atributo_entidadeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Atributo_entidade`.
   */
  public static getModelName() {
    return "Atributo_entidade";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Atributo_entidade for dynamic purposes.
  **/
  public static factory(data: Atributo_entidadeInterface): Atributo_entidade{
    return new Atributo_entidade(data);
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
      name: 'Atributo_entidade',
      plural: 'Atributo_entidades',
      path: 'Atributo_entidades',
      idName: 'id_atributo_entidade',
      properties: {
        "id_atributo_entidade": {
          name: 'id_atributo_entidade',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "obrigatorio": {
          name: 'obrigatorio',
          type: 'boolean'
        },
        "editavel": {
          name: 'editavel',
          type: 'boolean'
        },
        "label_tela": {
          name: 'label_tela',
          type: 'string'
        },
        "ordenacao_tela": {
          name: 'ordenacao_tela',
          type: 'number'
        },
        "id_entidade": {
          name: 'id_entidade',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
