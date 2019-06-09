/* tslint:disable */
import {
  ItemValidacaoPagina,
  CampanhaAds,
  ProjetoMySql,
  PaginaValidacaoWeb,
  ConceitoProduto,
  Visitante
} from '../index';

declare var Object: any;
export interface PaginaInstalacaoAppInterface {
  "id"?: number;
  "mensagemPrincipal"?: string;
  "mensagemSecundaria"?: string;
  "botaoAcao"?: string;
  "imagemFundo"?: string;
  "corBase"?: string;
  "marcaLogo"?: string;
  "codigoHash"?: string;
  "permiteEdicao"?: number;
  "urlInstalacao"?: string;
  "projetoMySqlId"?: number;
  "paginaValidacaoWebId"?: number;
  "conceitoProdutoId"?: number;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  campanhaAds?: CampanhaAds[];
  projeto?: ProjetoMySql;
  paginaValidacaoWeb?: PaginaValidacaoWeb;
  conceitoProduto?: ConceitoProduto;
  visitantes?: Visitante[];
}

export class PaginaInstalacaoApp implements PaginaInstalacaoAppInterface {
  "id": number;
  "mensagemPrincipal": string;
  "mensagemSecundaria": string;
  "botaoAcao": string;
  "imagemFundo": string;
  "corBase": string;
  "marcaLogo": string;
  "codigoHash": string;
  "permiteEdicao": number;
  "urlInstalacao": string;
  "projetoMySqlId": number;
  "paginaValidacaoWebId": number;
  "conceitoProdutoId": number;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  campanhaAds: CampanhaAds[];
  projeto: ProjetoMySql;
  paginaValidacaoWeb: PaginaValidacaoWeb;
  conceitoProduto: ConceitoProduto;
  visitantes: Visitante[];
  constructor(data?: PaginaInstalacaoAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaInstalacaoApp`.
   */
  public static getModelName() {
    return "PaginaInstalacaoApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaInstalacaoApp for dynamic purposes.
  **/
  public static factory(data: PaginaInstalacaoAppInterface): PaginaInstalacaoApp{
    return new PaginaInstalacaoApp(data);
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
      name: 'PaginaInstalacaoApp',
      plural: 'PaginaInstalacaoApps',
      path: 'PaginaInstalacaoApps',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "mensagemPrincipal": {
          name: 'mensagemPrincipal',
          type: 'string'
        },
        "mensagemSecundaria": {
          name: 'mensagemSecundaria',
          type: 'string'
        },
        "botaoAcao": {
          name: 'botaoAcao',
          type: 'string'
        },
        "imagemFundo": {
          name: 'imagemFundo',
          type: 'string'
        },
        "corBase": {
          name: 'corBase',
          type: 'string'
        },
        "marcaLogo": {
          name: 'marcaLogo',
          type: 'string'
        },
        "codigoHash": {
          name: 'codigoHash',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
        },
        "urlInstalacao": {
          name: 'urlInstalacao',
          type: 'string'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "paginaValidacaoWebId": {
          name: 'paginaValidacaoWebId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
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
          keyTo: 'paginaInstalacaoAppId'
        },
        campanhaAds: {
          name: 'campanhaAds',
          type: 'CampanhaAds[]',
          model: 'CampanhaAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaInstalacaoAppId'
        },
        projeto: {
          name: 'projeto',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        paginaValidacaoWeb: {
          name: 'paginaValidacaoWeb',
          type: 'PaginaValidacaoWeb',
          model: 'PaginaValidacaoWeb',
          relationType: 'belongsTo',
                  keyFrom: 'paginaValidacaoWebId',
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
        visitantes: {
          name: 'visitantes',
          type: 'Visitante[]',
          model: 'Visitante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaInstalacaoAppId'
        },
      }
    }
  }
}
