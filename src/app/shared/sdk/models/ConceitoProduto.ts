/* tslint:disable */
import {
  TelaApp,
  TelaWeb,
  PaginaValidacaoWeb,
  ItemValidacaoPagina,
  ValorConceito
} from '../index';

declare var Object: any;
export interface ConceitoProdutoInterface {
  "descricao"?: string;
  "titulo"?: string;
  "ativo"?: number;
  "dataCriacao"?: Date;
  "custoCampanha"?: number;
  "quantidadeCampanha"?: number;
  "tempoTotal"?: Date;
  "id"?: number;
  "projetoMySqlId"?: number;
  telaApps?: TelaApp[];
  telaWebs?: TelaWeb[];
  paginaValidacaoWebs?: PaginaValidacaoWeb[];
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  valorConceitos?: ValorConceito[];
}

export class ConceitoProduto implements ConceitoProdutoInterface {
  "descricao": string;
  "titulo": string;
  "ativo": number;
  "dataCriacao": Date;
  "custoCampanha": number;
  "quantidadeCampanha": number;
  "tempoTotal": Date;
  "id": number;
  "projetoMySqlId": number;
  telaApps: TelaApp[];
  telaWebs: TelaWeb[];
  paginaValidacaoWebs: PaginaValidacaoWeb[];
  itemValidacaoPaginas: ItemValidacaoPagina[];
  valorConceitos: ValorConceito[];
  constructor(data?: ConceitoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConceitoProduto`.
   */
  public static getModelName() {
    return "ConceitoProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConceitoProduto for dynamic purposes.
  **/
  public static factory(data: ConceitoProdutoInterface): ConceitoProduto{
    return new ConceitoProduto(data);
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
      name: 'ConceitoProduto',
      plural: 'ConceitoProdutos',
      path: 'ConceitoProdutos',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "titulo": {
          name: 'titulo',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'number'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "custoCampanha": {
          name: 'custoCampanha',
          type: 'number'
        },
        "quantidadeCampanha": {
          name: 'quantidadeCampanha',
          type: 'number'
        },
        "tempoTotal": {
          name: 'tempoTotal',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
      },
      relations: {
        telaApps: {
          name: 'telaApps',
          type: 'TelaApp[]',
          model: 'TelaApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conceitoProdutoId'
        },
        telaWebs: {
          name: 'telaWebs',
          type: 'TelaWeb[]',
          model: 'TelaWeb',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conceitoProdutoId'
        },
        paginaValidacaoWebs: {
          name: 'paginaValidacaoWebs',
          type: 'PaginaValidacaoWeb[]',
          model: 'PaginaValidacaoWeb',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conceitoProdutoId'
        },
        itemValidacaoPaginas: {
          name: 'itemValidacaoPaginas',
          type: 'ItemValidacaoPagina[]',
          model: 'ItemValidacaoPagina',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conceitoProdutoId'
        },
        valorConceitos: {
          name: 'valorConceitos',
          type: 'ValorConceito[]',
          model: 'ValorConceito',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'conceitoProdutoId'
        },
      }
    }
  }
}
