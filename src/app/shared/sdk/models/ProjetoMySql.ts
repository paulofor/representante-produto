/* tslint:disable */
import {
  ProjetoCanvasMySql,
  MvpCanvasMySql,
  GanhoDorCanvasMySql,
  PaginaValidacaoWeb,
  ItemValidacaoPagina,
  Aplicacao,
  EtapaProjeto,
  ConceitoProduto,
  PaginaInstalacaoApp
} from '../index';

declare var Object: any;
export interface ProjetoMySqlInterface {
  "id"?: number;
  "nome": string;
  "valor"?: string;
  "mercado"?: string;
  "dor"?: string;
  "codigo"?: string;
  "custoCampanha"?: number;
  "quantidadeCampanha"?: number;
  "tempoTotal"?: Date;
  "quantidadeAnuncio"?: number;
  "quantidadeCampanhaAberta"?: number;
  "quantidadePalavraChave"?: number;
  "etapaProjetoId"?: number;
  projetoCanvasMySqls?: ProjetoCanvasMySql[];
  mvpCanvasMySqls?: MvpCanvasMySql[];
  ganhoDorCanvasMySqls?: GanhoDorCanvasMySql[];
  paginaValidacaoWebs?: PaginaValidacaoWeb[];
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  aplicacaos?: Aplicacao[];
  etapaProjeto?: EtapaProjeto;
  conceitoProdutos?: ConceitoProduto[];
  paginaInstalacaoApps?: PaginaInstalacaoApp[];
}

export class ProjetoMySql implements ProjetoMySqlInterface {
  "id": number;
  "nome": string;
  "valor": string;
  "mercado": string;
  "dor": string;
  "codigo": string;
  "custoCampanha": number;
  "quantidadeCampanha": number;
  "tempoTotal": Date;
  "quantidadeAnuncio": number;
  "quantidadeCampanhaAberta": number;
  "quantidadePalavraChave": number;
  "etapaProjetoId": number;
  projetoCanvasMySqls: ProjetoCanvasMySql[];
  mvpCanvasMySqls: MvpCanvasMySql[];
  ganhoDorCanvasMySqls: GanhoDorCanvasMySql[];
  paginaValidacaoWebs: PaginaValidacaoWeb[];
  itemValidacaoPaginas: ItemValidacaoPagina[];
  aplicacaos: Aplicacao[];
  etapaProjeto: EtapaProjeto;
  conceitoProdutos: ConceitoProduto[];
  paginaInstalacaoApps: PaginaInstalacaoApp[];
  constructor(data?: ProjetoMySqlInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjetoMySql`.
   */
  public static getModelName() {
    return "ProjetoMySql";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjetoMySql for dynamic purposes.
  **/
  public static factory(data: ProjetoMySqlInterface): ProjetoMySql{
    return new ProjetoMySql(data);
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
      name: 'ProjetoMySql',
      plural: 'ProjetoMySqls',
      path: 'ProjetoMySqls',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "valor": {
          name: 'valor',
          type: 'string'
        },
        "mercado": {
          name: 'mercado',
          type: 'string'
        },
        "dor": {
          name: 'dor',
          type: 'string'
        },
        "codigo": {
          name: 'codigo',
          type: 'string'
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
        "quantidadeAnuncio": {
          name: 'quantidadeAnuncio',
          type: 'number'
        },
        "quantidadeCampanhaAberta": {
          name: 'quantidadeCampanhaAberta',
          type: 'number'
        },
        "quantidadePalavraChave": {
          name: 'quantidadePalavraChave',
          type: 'number'
        },
        "etapaProjetoId": {
          name: 'etapaProjetoId',
          type: 'number'
        },
      },
      relations: {
        projetoCanvasMySqls: {
          name: 'projetoCanvasMySqls',
          type: 'ProjetoCanvasMySql[]',
          model: 'ProjetoCanvasMySql',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
        mvpCanvasMySqls: {
          name: 'mvpCanvasMySqls',
          type: 'MvpCanvasMySql[]',
          model: 'MvpCanvasMySql',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
        ganhoDorCanvasMySqls: {
          name: 'ganhoDorCanvasMySqls',
          type: 'GanhoDorCanvasMySql[]',
          model: 'GanhoDorCanvasMySql',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
        paginaValidacaoWebs: {
          name: 'paginaValidacaoWebs',
          type: 'PaginaValidacaoWeb[]',
          model: 'PaginaValidacaoWeb',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
        itemValidacaoPaginas: {
          name: 'itemValidacaoPaginas',
          type: 'ItemValidacaoPagina[]',
          model: 'ItemValidacaoPagina',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
        aplicacaos: {
          name: 'aplicacaos',
          type: 'Aplicacao[]',
          model: 'Aplicacao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
        etapaProjeto: {
          name: 'etapaProjeto',
          type: 'EtapaProjeto',
          model: 'EtapaProjeto',
          relationType: 'belongsTo',
                  keyFrom: 'etapaProjetoId',
          keyTo: 'id'
        },
        conceitoProdutos: {
          name: 'conceitoProdutos',
          type: 'ConceitoProduto[]',
          model: 'ConceitoProduto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
        paginaInstalacaoApps: {
          name: 'paginaInstalacaoApps',
          type: 'PaginaInstalacaoApp[]',
          model: 'PaginaInstalacaoApp',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoMySqlId'
        },
      }
    }
  }
}
