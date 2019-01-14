/* tslint:disable */
import {
  ProcessoNegocio
} from '../index';

declare var Object: any;
export interface IndicadorPerformanceProcessoInterface {
  "nome"?: string;
  "periodo"?: Date;
  "id"?: number;
  "processoNegocioId"?: number;
  processoNegocio?: ProcessoNegocio;
}

export class IndicadorPerformanceProcesso implements IndicadorPerformanceProcessoInterface {
  "nome": string;
  "periodo": Date;
  "id": number;
  "processoNegocioId": number;
  processoNegocio: ProcessoNegocio;
  constructor(data?: IndicadorPerformanceProcessoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `IndicadorPerformanceProcesso`.
   */
  public static getModelName() {
    return "IndicadorPerformanceProcesso";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of IndicadorPerformanceProcesso for dynamic purposes.
  **/
  public static factory(data: IndicadorPerformanceProcessoInterface): IndicadorPerformanceProcesso{
    return new IndicadorPerformanceProcesso(data);
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
      name: 'IndicadorPerformanceProcesso',
      plural: 'IndicadorPerformanceProcessos',
      path: 'IndicadorPerformanceProcessos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "periodo": {
          name: 'periodo',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "processoNegocioId": {
          name: 'processoNegocioId',
          type: 'number'
        },
      },
      relations: {
        processoNegocio: {
          name: 'processoNegocio',
          type: 'ProcessoNegocio',
          model: 'ProcessoNegocio',
          relationType: 'belongsTo',
                  keyFrom: 'processoNegocioId',
          keyTo: 'id'
        },
      }
    }
  }
}
