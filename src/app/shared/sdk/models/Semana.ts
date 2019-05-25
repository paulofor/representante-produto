/* tslint:disable */
import {
  PlanoExecucao
} from '../index';

declare var Object: any;
export interface SemanaInterface {
  "primeiroDia": Date;
  "ultimoDia": Date;
  "mes"?: number;
  "ano"?: number;
  "seqAno"?: number;
  "id"?: number;
  planoExecucaos?: PlanoExecucao[];
}

export class Semana implements SemanaInterface {
  "primeiroDia": Date;
  "ultimoDia": Date;
  "mes": number;
  "ano": number;
  "seqAno": number;
  "id": number;
  planoExecucaos: PlanoExecucao[];
  constructor(data?: SemanaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Semana`.
   */
  public static getModelName() {
    return "Semana";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Semana for dynamic purposes.
  **/
  public static factory(data: SemanaInterface): Semana{
    return new Semana(data);
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
      name: 'Semana',
      plural: 'Semanas',
      path: 'Semanas',
      idName: 'id',
      properties: {
        "primeiroDia": {
          name: 'primeiroDia',
          type: 'Date'
        },
        "ultimoDia": {
          name: 'ultimoDia',
          type: 'Date'
        },
        "mes": {
          name: 'mes',
          type: 'number'
        },
        "ano": {
          name: 'ano',
          type: 'number'
        },
        "seqAno": {
          name: 'seqAno',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        planoExecucaos: {
          name: 'planoExecucaos',
          type: 'PlanoExecucao[]',
          model: 'PlanoExecucao',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'semanaId'
        },
      }
    }
  }
}
