/* tslint:disable */
import {
  ProjetoMySql,
  Entidade,
  TelaWeb,
  ComponenteWeb
} from '../index';

declare var Object: any;
export interface AplicacaoInterface {
  "id_aplicacao"?: number;
  "nome"?: string;
  "diretorio"?: string;
  "namespace"?: string;
  "diretorio_java"?: string;
  "projetoMySqlId"?: number;
  projetoMySql?: ProjetoMySql;
  entidades?: Entidade[];
  telaWebs?: TelaWeb[];
  componenteWebs?: ComponenteWeb[];
}

export class Aplicacao implements AplicacaoInterface {
  "id_aplicacao": number;
  "nome": string;
  "diretorio": string;
  "namespace": string;
  "diretorio_java": string;
  "projetoMySqlId": number;
  projetoMySql: ProjetoMySql;
  entidades: Entidade[];
  telaWebs: TelaWeb[];
  componenteWebs: ComponenteWeb[];
  constructor(data?: AplicacaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Aplicacao`.
   */
  public static getModelName() {
    return "Aplicacao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Aplicacao for dynamic purposes.
  **/
  public static factory(data: AplicacaoInterface): Aplicacao{
    return new Aplicacao(data);
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
      name: 'Aplicacao',
      plural: 'Aplicacaos',
      path: 'Aplicacaos',
      idName: 'id_aplicacao',
      properties: {
        "id_aplicacao": {
          name: 'id_aplicacao',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "diretorio": {
          name: 'diretorio',
          type: 'string'
        },
        "namespace": {
          name: 'namespace',
          type: 'string'
        },
        "diretorio_java": {
          name: 'diretorio_java',
          type: 'string'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
      },
      relations: {
        projetoMySql: {
          name: 'projetoMySql',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        entidades: {
          name: 'entidades',
          type: 'Entidade[]',
          model: 'Entidade',
          relationType: 'hasMany',
                  keyFrom: 'id_aplicacao',
          keyTo: 'id_aplicacao'
        },
        telaWebs: {
          name: 'telaWebs',
          type: 'TelaWeb[]',
          model: 'TelaWeb',
          relationType: 'hasMany',
                  keyFrom: 'id_aplicacao',
          keyTo: 'aplicacaoId'
        },
        componenteWebs: {
          name: 'componenteWebs',
          type: 'ComponenteWeb[]',
          model: 'ComponenteWeb',
          relationType: 'hasMany',
                  keyFrom: 'id_aplicacao',
          keyTo: 'aplicacaoId'
        },
      }
    }
  }
}
