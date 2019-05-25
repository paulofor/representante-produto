/* tslint:disable */
import {
  ProjetoCanvasMySql
} from '../index';

declare var Object: any;
export interface ItemValidacaoPaginaInterface {
  "id"?: number;
  "urlImagem"?: string;
  "urlImagem2"?: string;
  "ordenacao"?: number;
  "titulo"?: string;
  "descricaoSimples"?: string;
  "bullet1"?: string;
  "bullet2"?: string;
  "bullet3"?: string;
  "mensagemImagem"?: string;
  "permiteEdicao"?: number;
  "projetoCanvasMySqlId"?: number;
  "projetoMySqlId"?: number;
  "paginaValidacaoWebId"?: number;
  "telaWebId"?: number;
  "telaAppId"?: number;
  "conceitoProdutoId"?: number;
  "paginaInstalacaoAppId"?: number;
  projetoCanvasMySql?: ProjetoCanvasMySql;
}

export class ItemValidacaoPagina implements ItemValidacaoPaginaInterface {
  "id": number;
  "urlImagem": string;
  "urlImagem2": string;
  "ordenacao": number;
  "titulo": string;
  "descricaoSimples": string;
  "bullet1": string;
  "bullet2": string;
  "bullet3": string;
  "mensagemImagem": string;
  "permiteEdicao": number;
  "projetoCanvasMySqlId": number;
  "projetoMySqlId": number;
  "paginaValidacaoWebId": number;
  "telaWebId": number;
  "telaAppId": number;
  "conceitoProdutoId": number;
  "paginaInstalacaoAppId": number;
  projetoCanvasMySql: ProjetoCanvasMySql;
  constructor(data?: ItemValidacaoPaginaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemValidacaoPagina`.
   */
  public static getModelName() {
    return "ItemValidacaoPagina";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemValidacaoPagina for dynamic purposes.
  **/
  public static factory(data: ItemValidacaoPaginaInterface): ItemValidacaoPagina{
    return new ItemValidacaoPagina(data);
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
      name: 'ItemValidacaoPagina',
      plural: 'ItemValidacaoPaginas',
      path: 'ItemValidacaoPaginas',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "urlImagem": {
          name: 'urlImagem',
          type: 'string'
        },
        "urlImagem2": {
          name: 'urlImagem2',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "descricaoSimples": {
          name: 'descricaoSimples',
          type: 'string'
        },
        "bullet1": {
          name: 'bullet1',
          type: 'string'
        },
        "bullet2": {
          name: 'bullet2',
          type: 'string'
        },
        "bullet3": {
          name: 'bullet3',
          type: 'string'
        },
        "mensagemImagem": {
          name: 'mensagemImagem',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "projetoCanvasMySqlId": {
          name: 'projetoCanvasMySqlId',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "paginaValidacaoWebId": {
          name: 'paginaValidacaoWebId',
          type: 'number'
        },
        "telaWebId": {
          name: 'telaWebId',
          type: 'number'
        },
        "telaAppId": {
          name: 'telaAppId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
        "paginaInstalacaoAppId": {
          name: 'paginaInstalacaoAppId',
          type: 'number'
        },
      },
      relations: {
        projetoCanvasMySql: {
          name: 'projetoCanvasMySql',
          type: 'ProjetoCanvasMySql',
          model: 'ProjetoCanvasMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoCanvasMySqlId',
          keyTo: 'id'
        },
      }
    }
  }
}
