/* tslint:disable */
import {
  PalavraChaveGoogle,
  ProjetoMySql
} from '../index';

declare var Object: any;
export interface PalavraGoogleProjetoInterface {
  "mediaImpressao"?: number;
  "desvioImpressao"?: number;
  "mediaCtr"?: number;
  "desvioCtr"?: number;
  "mediaConversao"?: number;
  "desvioConversao"?: number;
  "ocorrencias"?: number;
  "ativo"?: number;
  "id"?: number;
  "palavraChaveGoogleId"?: string;
  "projetoMySqlId"?: number;
  palavraChaveGoogle?: PalavraChaveGoogle;
  projetoMySql?: ProjetoMySql;
}

export class PalavraGoogleProjeto implements PalavraGoogleProjetoInterface {
  "mediaImpressao": number;
  "desvioImpressao": number;
  "mediaCtr": number;
  "desvioCtr": number;
  "mediaConversao": number;
  "desvioConversao": number;
  "ocorrencias": number;
  "ativo": number;
  "id": number;
  "palavraChaveGoogleId": string;
  "projetoMySqlId": number;
  palavraChaveGoogle: PalavraChaveGoogle;
  projetoMySql: ProjetoMySql;
  constructor(data?: PalavraGoogleProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraGoogleProjeto`.
   */
  public static getModelName() {
    return "PalavraGoogleProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraGoogleProjeto for dynamic purposes.
  **/
  public static factory(data: PalavraGoogleProjetoInterface): PalavraGoogleProjeto{
    return new PalavraGoogleProjeto(data);
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
      name: 'PalavraGoogleProjeto',
      plural: 'PalavraGoogleProjetos',
      path: 'PalavraGoogleProjetos',
      idName: 'id',
      properties: {
        "mediaImpressao": {
          name: 'mediaImpressao',
          type: 'number'
        },
        "desvioImpressao": {
          name: 'desvioImpressao',
          type: 'number'
        },
        "mediaCtr": {
          name: 'mediaCtr',
          type: 'number'
        },
        "desvioCtr": {
          name: 'desvioCtr',
          type: 'number'
        },
        "mediaConversao": {
          name: 'mediaConversao',
          type: 'number'
        },
        "desvioConversao": {
          name: 'desvioConversao',
          type: 'number'
        },
        "ocorrencias": {
          name: 'ocorrencias',
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
        "palavraChaveGoogleId": {
          name: 'palavraChaveGoogleId',
          type: 'string'
        },
        "projetoMySqlId": {
          name: 'projetoMySqlId',
          type: 'number'
        },
      },
      relations: {
        palavraChaveGoogle: {
          name: 'palavraChaveGoogle',
          type: 'PalavraChaveGoogle',
          model: 'PalavraChaveGoogle',
          relationType: 'belongsTo',
                  keyFrom: 'palavraChaveGoogleId',
          keyTo: 'palavra'
        },
        projetoMySql: {
          name: 'projetoMySql',
          type: 'ProjetoMySql',
          model: 'ProjetoMySql',
          relationType: 'belongsTo',
                  keyFrom: 'projetoMySqlId',
          keyTo: 'id'
        },
      }
    }
  }
}
