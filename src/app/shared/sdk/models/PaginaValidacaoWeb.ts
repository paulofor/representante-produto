/* tslint:disable */
import {
  ProjetoMySql,
  ItemValidacaoPagina,
  RegistroInteresse
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
  "projetoMySqlId"?: number;
  projeto?: ProjetoMySql;
  itemValidacaoPaginas?: ItemValidacaoPagina[];
  registroInteresses?: RegistroInteresse[];
}

export class PaginaValidacaoWeb implements PaginaValidacaoWebInterface {
  "id": number;
  "mensagemPrincipal": string;
  "mensagemSecundaria": string;
  "botaoAcao": string;
  "imagemFundo": string;
  "corBase": string;
  "marcaLogo": string;
  "projetoMySqlId": number;
  projeto: ProjetoMySql;
  itemValidacaoPaginas: ItemValidacaoPagina[];
  registroInteresses: RegistroInteresse[];
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
        "projetoMySqlId": {
          name: 'projetoMySqlId',
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
      }
    }
  }
}
