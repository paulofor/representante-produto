/* tslint:disable */
import {
  IndicadorPerformanceProcesso
} from '../index';

declare var Object: any;
export interface MedidaIndicadorProcessoInterface {
  "data"?: Date;
  "valor"?: number;
  "unidade"?: string;
  "id"?: number;
  "indicadorPerformanceProcessoId"?: number;
  indicadorPerformanceProcesso?: IndicadorPerformanceProcesso;
}

export class MedidaIndicadorProcesso implements MedidaIndicadorProcessoInterface {
  "data": Date;
  "valor": number;
  "unidade": string;
  "id": number;
  "indicadorPerformanceProcessoId": number;
  indicadorPerformanceProcesso: IndicadorPerformanceProcesso;
  constructor(data?: MedidaIndicadorProcessoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MedidaIndicadorProcesso`.
   */
  public static getModelName() {
    return "MedidaIndicadorProcesso";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MedidaIndicadorProcesso for dynamic purposes.
  **/
  public static factory(data: MedidaIndicadorProcessoInterface): MedidaIndicadorProcesso{
    return new MedidaIndicadorProcesso(data);
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
      name: 'MedidaIndicadorProcesso',
      plural: 'MedidaIndicadorProcessos',
      path: 'MedidaIndicadorProcessos',
      idName: 'id',
      properties: {
        "data": {
          name: 'data',
          type: 'Date'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "unidade": {
          name: 'unidade',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "indicadorPerformanceProcessoId": {
          name: 'indicadorPerformanceProcessoId',
          type: 'number'
        },
      },
      relations: {
        indicadorPerformanceProcesso: {
          name: 'indicadorPerformanceProcesso',
          type: 'IndicadorPerformanceProcesso',
          model: 'IndicadorPerformanceProcesso',
          relationType: 'belongsTo',
                  keyFrom: 'indicadorPerformanceProcessoId',
          keyTo: 'id'
        },
      }
    }
  }
}
