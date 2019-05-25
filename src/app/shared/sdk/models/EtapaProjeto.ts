/* tslint:disable */
import {
  ProjetoMySql,
  ProcessoNegocioEtapaProjeto
} from '../index';

declare var Object: any;
export interface EtapaProjetoInterface {
  "nome"?: string;
  "codigo"?: string;
  "ordenacao"?: number;
  "ativo"?: number;
  "id"?: number;
  projetoMySqls?: ProjetoMySql[];
  processoNegocioEtapaProjetos?: ProcessoNegocioEtapaProjeto;
}

export class EtapaProjeto implements EtapaProjetoInterface {
  "nome": string;
  "codigo": string;
  "ordenacao": number;
  "ativo": number;
  "id": number;
  projetoMySqls: ProjetoMySql[];
  processoNegocioEtapaProjetos: ProcessoNegocioEtapaProjeto;
  constructor(data?: EtapaProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EtapaProjeto`.
   */
  public static getModelName() {
    return "EtapaProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EtapaProjeto for dynamic purposes.
  **/
  public static factory(data: EtapaProjetoInterface): EtapaProjeto{
    return new EtapaProjeto(data);
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
      name: 'EtapaProjeto',
      plural: 'EtapaProjetos',
      path: 'EtapaProjetos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "codigo": {
          name: 'codigo',
          type: 'string'
        },
        "ordenacao": {
          name: 'ordenacao',
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
      },
      relations: {
        projetoMySqls: {
          name: 'projetoMySqls',
          type: 'ProjetoMySql[]',
          model: 'ProjetoMySql',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'etapaProjetoId'
        },
        processoNegocioEtapaProjetos: {
          name: 'processoNegocioEtapaProjetos',
          type: 'ProcessoNegocioEtapaProjeto',
          model: 'ProcessoNegocioEtapaProjeto',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'etapaProjetoId'
        },
      }
    }
  }
}
