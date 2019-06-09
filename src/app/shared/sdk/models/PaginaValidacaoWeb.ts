/* tslint:disable */
import {
  ProjetoMySql,
  ItemValidacaoPagina,
  RegistroInteresse,
  Visitante,
  CampanhaAds,
  ConceitoProduto
} from '../index';

declare var Object: any;
export interface PaginaValidacaoWebInterface {
  "id"?: number;
  "mensagemPrincipal"?: string;
  "mensagemSecundaria"?: string;
  "botaoAcao"?: string;
  "imagemFundo"?: string;
  "corBase"?: string;
  "marcaLogo"?: string;
  "codigoHash"?: string;
  "permiteEdicao"?: number;
  "totalVisualizacao"?: number;
  "totalInteresse"?: number;
  "quantidadeCampanha"?: number;
  "taxaConversao"?: number;
  "mediaVisualizacaoCampanha"?: number;
  "mediaInteresseCampanha"?: number;
  "projetoMySqlId"?: number;
  "conceitoProdutoId"?: number;
  projeto?: ProjetoMySql;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  registroInteresses?: RegistroInteresse[];
  visitantes?: Visitante[];
  campanhaAds?: CampanhaAds[];
  conceitoProduto?: ConceitoProduto;
}

export class PaginaValidacaoWeb implements PaginaValidacaoWebInterface {
  "id": number;
  "mensagemPrincipal": string;
  "mensagemSecundaria": string;
  "botaoAcao": string;
  "imagemFundo": string;
  "corBase": string;
  "marcaLogo": string;
  "codigoHash": string;
  "permiteEdicao": number;
  "totalVisualizacao": number;
  "totalInteresse": number;
  "quantidadeCampanha": number;
  "taxaConversao": number;
  "mediaVisualizacaoCampanha": number;
  "mediaInteresseCampanha": number;
  "projetoMySqlId": number;
  "conceitoProdutoId": number;
  projeto: ProjetoMySql;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  registroInteresses: RegistroInteresse[];
  visitantes: Visitante[];
  campanhaAds: CampanhaAds[];
  conceitoProduto: ConceitoProduto;
  constructor(data?: PaginaValidacaoWebInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaginaValidacaoWeb`.
   */
  public static getModelName() {
    return "PaginaValidacaoWeb";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaginaValidacaoWeb for dynamic purposes.
  **/
  public static factory(data: PaginaValidacaoWebInterface): PaginaValidacaoWeb{
    return new PaginaValidacaoWeb(data);
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
      name: 'PaginaValidacaoWeb',
      plural: 'PaginaValidacaoWebs',
      path: 'PaginaValidacaoWebs',
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
        "totalVisualizacao": {
          name: 'totalVisualizacao',
          type: 'number'
        },
        "totalInteresse": {
          name: 'totalInteresse',
          type: 'number'
        },
        "quantidadeCampanha": {
          name: 'quantidadeCampanha',
          type: 'number'
        },
        "taxaConversao": {
          name: 'taxaConversao',
          type: 'number'
        },
        "mediaVisualizacaoCampanha": {
          name: 'mediaVisualizacaoCampanha',
          type: 'number'
        },
        "mediaInteresseCampanha": {
          name: 'mediaInteresseCampanha',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
      },
      relations: {
        projeto: {
          name: 'projeto',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
        itemValidacaoPaginas: {
          name: 'itemValidacaoPaginas',
          type: 'ItemValidacaoPagina[]',
          model: 'ItemValidacaoPagina',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaValidacaoWebId'
        },
        registroInteresses: {
          name: 'registroInteresses',
          type: 'RegistroInteresse[]',
          model: 'RegistroInteresse',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaValidacaoWebId'
        },
        visitantes: {
          name: 'visitantes',
          type: 'Visitante[]',
          model: 'Visitante',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaValidacaoWebId'
        },
        campanhaAds: {
          name: 'campanhaAds',
          type: 'CampanhaAds[]',
          model: 'CampanhaAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'paginaValidacaoWebId'
        },
        conceitoProduto: {
          name: 'conceitoProduto',
          type: 'ConceitoProduto',
          model: 'ConceitoProduto',
          relationType: 'belongsTo',
                  keyFrom: 'conceitoProdutoId',
          keyTo: 'id'
        },
      }
    }
  }
}
