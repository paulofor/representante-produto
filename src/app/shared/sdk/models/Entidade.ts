/* tslint:disable */
import {
  Atributo_entidade,
  ProjetoMySql,
  Relacionamento_entidade
} from '../index';

declare var Object: any;
export interface EntidadeInterface {
  "id_entidade"?: number;
  "nome"?: string;
  "id_chave"?: number;
  "classe_pai"?: string;
  "ordenacao"?: number;
  "associativa"?: boolean;
  "id_atributo_identificador"?: number;
  "id_entidade_pai"?: number;
  "projetoMySqlId"?: number;
  "id_aplicacao"?: number;
  atributoEntidades?: Atributo_entidade[];
  projetoMySql?: ProjetoMySql;
  atributoChave?: Atributo_entidade;
  atributoIdentificador?: Atributo_entidade;
  rel1?: Relacionamento_entidade[];
  rel2?: Relacionamento_entidade[];
}

export class Entidade implements EntidadeInterface {
  "id_entidade": number;
  "nome": string;
  "id_chave": number;
  "classe_pai": string;
  "ordenacao": number;
  "associativa": boolean;
  "id_atributo_identificador": number;
  "id_entidade_pai": number;
  "projetoMySqlId": number;
  "id_aplicacao": number;
  atributoEntidades: Atributo_entidade[];
  projetoMySql: ProjetoMySql;
  atributoChave: Atributo_entidade;
  atributoIdentificador: Atributo_entidade;
  rel1: Relacionamento_entidade[];
  rel2: Relacionamento_entidade[];
  constructor(data?: EntidadeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Entidade`.
   */
  public static getModelName() {
    return "Entidade";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Entidade for dynamic purposes.
  **/
  public static factory(data: EntidadeInterface): Entidade{
    return new Entidade(data);
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
      name: 'Entidade',
      plural: 'Entidades',
      path: 'Entidades',
      idName: 'id_entidade',
      properties: {
        "id_entidade": {
          name: 'id_entidade',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id_chave": {
          name: 'id_chave',
          type: 'number'
        },
        "classe_pai": {
          name: 'classe_pai',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "associativa": {
          name: 'associativa',
          type: 'boolean'
        },
        "id_atributo_identificador": {
          name: 'id_atributo_identificador',
          type: 'number'
        },
        "id_entidade_pai": {
          name: 'id_entidade_pai',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "id_aplicacao": {
          name: 'id_aplicacao',
          type: 'number'
        },
      },
      relations: {
        atributoEntidades: {
          name: 'atributoEntidades',
          type: 'Atributo_entidade[]',
          model: 'Atributo_entidade',
          relationType: 'hasMany',
                  keyFrom: 'id_entidade',
          keyTo: 'id_entidade'
        },
        projetoMySql: {
          name: 'projetoMySql',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        atributoChave: {
          name: 'atributoChave',
          type: 'Atributo_entidade',
          model: 'Atributo_entidade',
          relationType: 'belongsTo',
                  keyFrom: 'id_chave',
          keyTo: 'id_atributo_entidade'
        },
        atributoIdentificador: {
          name: 'atributoIdentificador',
          type: 'Atributo_entidade',
          model: 'Atributo_entidade',
          relationType: 'belongsTo',
                  keyFrom: 'id_atributo_identificador',
          keyTo: 'id_atributo_entidade'
        },
        rel1: {
          name: 'rel1',
          type: 'Relacionamento_entidade[]',
          model: 'Relacionamento_entidade',
          relationType: 'hasMany',
                  keyFrom: 'id_entidade',
          keyTo: 'id_entidade1'
        },
        rel2: {
          name: 'rel2',
          type: 'Relacionamento_entidade[]',
          model: 'Relacionamento_entidade',
          relationType: 'hasMany',
                  keyFrom: 'id_entidade',
          keyTo: 'id_entidade2'
        },
      }
    }
  }
}
