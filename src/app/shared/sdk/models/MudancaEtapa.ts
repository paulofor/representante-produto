/* tslint:disable */
import {
  ProjetoMySql,
  EtapaProjeto
} from '../index';

declare var Object: any;
export interface MudancaEtapaInterface {
  "dataInicio": Date;
  "id"?: number;
  "projetoMySqlId"?: number;
  "etapaProjetoId"?: number;
  projetoMySql?: ProjetoMySql;
  etapaProjeto?: EtapaProjeto;
}

export class MudancaEtapa implements MudancaEtapaInterface {
  "dataInicio": Date;
  "id": number;
  "projetoMySqlId": number;
  "etapaProjetoId": number;
  projetoMySql: ProjetoMySql;
  etapaProjeto: EtapaProjeto;
  constructor(data?: MudancaEtapaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MudancaEtapa`.
   */
  public static getModelName() {
    return "MudancaEtapa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MudancaEtapa for dynamic purposes.
  **/
  public static factory(data: MudancaEtapaInterface): MudancaEtapa{
    return new MudancaEtapa(data);
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
      name: 'MudancaEtapa',
      plural: 'MudancaEtapas',
      path: 'MudancaEtapas',
      idName: 'id',
      properties: {
        "dataInicio": {
          name: 'dataInicio',
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
        "etapaProjetoId": {
          name: 'etapaProjetoId',
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
        etapaProjeto: {
          name: 'etapaProjeto',
          type: 'EtapaProjeto',
          model: 'EtapaProjeto',
          relationType: 'belongsTo',
                  keyFrom: 'etapaProjetoId',
          keyTo: 'id'
        },
      }
    }
  }
}
