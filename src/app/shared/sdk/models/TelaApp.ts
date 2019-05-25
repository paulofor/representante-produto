/* tslint:disable */
import {
  ItemValidacaoPagina,
  Entidade,
  ConceitoProduto,
  ModeloTelaApp,
  ComponenteApp
} from '../index';

declare var Object: any;
export interface TelaAppInterface {
  "nome"?: string;
  "tipo"?: string;
  "sobrescreveHtml"?: number;
  "sobrescreveTs"?: number;
  "nomeMenu"?: string;
  "posicaoMenu"?: number;
  "ativo"?: number;
  "id"?: number;
  "entidadeId"?: number;
  "entidadePutId"?: number;
  "telaAppEdicaoId"?: number;
  "telaAppDisplayId"?: number;
  "aplicacaoId"?: number;
  "conceitoProdutoId"?: number;
  "modeloTelaAppId"?: number;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  entidade?: Entidade;
  entidadePut?: Entidade;
  telaEdicao?: TelaApp;
  telaDisplay?: TelaApp;
  conceitoProduto?: ConceitoProduto;
  modeloTelaApp?: ModeloTelaApp;
  componenteApps?: ComponenteApp[];
}

export class TelaApp implements TelaAppInterface {
  "nome": string;
  "tipo": string;
  "sobrescreveHtml": number;
  "sobrescreveTs": number;
  "nomeMenu": string;
  "posicaoMenu": number;
  "ativo": number;
  "id": number;
  "entidadeId": number;
  "entidadePutId": number;
  "telaAppEdicaoId": number;
  "telaAppDisplayId": number;
  "aplicacaoId": number;
  "conceitoProdutoId": number;
  "modeloTelaAppId": number;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  entidade: Entidade;
  entidadePut: Entidade;
  telaEdicao: TelaApp;
  telaDisplay: TelaApp;
  conceitoProduto: ConceitoProduto;
  modeloTelaApp: ModeloTelaApp;
  componenteApps: ComponenteApp[];
  constructor(data?: TelaAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TelaApp`.
   */
  public static getModelName() {
    return "TelaApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TelaApp for dynamic purposes.
  **/
  public static factory(data: TelaAppInterface): TelaApp{
    return new TelaApp(data);
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
      name: 'TelaApp',
      plural: 'TelaApps',
      path: 'TelaApps',
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
        "sobrescreveHtml": {
          name: 'sobrescreveHtml',
          type: 'number'
        },
        "sobrescreveTs": {
          name: 'sobrescreveTs',
          type: 'number'
        },
        "nomeMenu": {
          name: 'nomeMenu',
          type: 'string'
        },
        "posicaoMenu": {
          name: 'posicaoMenu',
          type: 'number'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "entidadeId": {
          name: 'entidadeId',
          type: 'number'
        },
        "entidadePutId": {
          name: 'entidadePutId',
          type: 'number'
        },
        "telaAppEdicaoId": {
          name: 'telaAppEdicaoId',
          type: 'number'
        },
        "telaAppDisplayId": {
          name: 'telaAppDisplayId',
          type: 'number'
        },
        "aplicacaoId": {
          name: 'aplicacaoId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
        "modeloTelaAppId": {
          name: 'modeloTelaAppId',
          type: 'number'
        },
      },
      relations: {
        itemValidacaoPaginas: {
          name: 'itemValidacaoPaginas',
          type: 'ItemValidacaoPagina[]',
          model: 'ItemValidacaoPagina',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'telaAppId'
        },
        entidade: {
          name: 'entidade',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'belongsTo',
                  keyFrom: 'entidadeId',
          keyTo: 'id_entidade'
        },
        entidadePut: {
          name: 'entidadePut',
          type: 'Entidade',
          model: 'Entidade',
          relationType: 'belongsTo',
                  keyFrom: 'entidadePutId',
          keyTo: 'id_entidade'
        },
        telaEdicao: {
          name: 'telaEdicao',
          type: 'TelaApp',
          model: 'TelaApp',
          relationType: 'belongsTo',
                  keyFrom: 'telaAppEdicaoId',
          keyTo: 'id'
        },
        telaDisplay: {
          name: 'telaDisplay',
          type: 'TelaApp',
          model: 'TelaApp',
          relationType: 'belongsTo',
                  keyFrom: 'telaAppDisplayId',
          keyTo: 'id'
        },
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
          keyTo: 'id'
        },
        modeloTelaApp: {
          name: 'modeloTelaApp',
          type: 'ModeloTelaApp',
          model: 'ModeloTelaApp',
          relationType: 'belongsTo',
                  keyFrom: 'modeloTelaAppId',
          keyTo: 'id'
        },
        componenteApps: {
          name: 'componenteApps',
          type: 'ComponenteApp[]',
          model: 'ComponenteApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'telaAppId'
        },
      }
    }
  }
}
