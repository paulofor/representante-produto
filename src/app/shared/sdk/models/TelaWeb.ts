/* tslint:disable */
import {
  Aplicacao,
  ItemValidacaoPagina,
  TelaComponenteWeb
} from '../index';

declare var Object: any;
export interface TelaWebInterface {
  "id"?: number;
  "objetivo"?: string;
  "nome"?: string;
  "nomeMenu"?: string;
  "aplicacaoId"?: number;
  "conceitoProdutoId"?: number;
  aplicacao?: Aplicacao;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  telaComponenteWebs?: TelaComponenteWeb[];
}

export class TelaWeb implements TelaWebInterface {
  "id": number;
  "objetivo": string;
  "nome": string;
  "nomeMenu": string;
  "aplicacaoId": number;
  "conceitoProdutoId": number;
  aplicacao: Aplicacao;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  telaComponenteWebs: TelaComponenteWeb[];
  constructor(data?: TelaWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TelaWeb`.
   */
  public static getModelName() {
    return "TelaWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TelaWeb for dynamic purposes.
  **/
  public static factory(data: TelaWebInterface): TelaWeb{
    return new TelaWeb(data);
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
      name: 'TelaWeb',
      plural: 'TelaWebs',
      path: 'TelaWebs',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "objetivo": {
          name: 'objetivo',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "nomeMenu": {
          name: 'nomeMenu',
          type: 'string'
        },
        "aplicacaoId": {
          name: 'aplicacaoId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
      },
      relations: {
        aplicacao: {
          name: 'aplicacao',
          type: 'Aplicacao',
          model: 'Aplicacao',
          relationType: 'belongsTo',
                  keyFrom: 'aplicacaoId',
          keyTo: 'id_aplicacao'
        },
        itemValidacaoPaginas: {
          name: 'itemValidacaoPaginas',
          type: 'ItemValidacaoPagina[]',
          model: 'ItemValidacaoPagina',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'telaWebId'
        },
        telaComponenteWebs: {
          name: 'telaComponenteWebs',
          type: 'TelaComponenteWeb[]',
          model: 'TelaComponenteWeb',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'telaWebId'
        },
      }
    }
  }
}
