/* tslint:disable */

declare var Object: any;
export interface EstatisticaMesInterface {
  "MediaPessoaTestePagina"?: number;
  "TotalPessoaTestePagina"?: number;
  "CpcMedio"?: number;
  "TotalPagina"?: number;
  "CustoMedioTeste"?: number;
  "CustoMesTotal"?: number;
  "MesAno"?: Date;
  "id"?: number;
}

export class EstatisticaMes implements EstatisticaMesInterface {
  "MediaPessoaTestePagina": number;
  "TotalPessoaTestePagina": number;
  "CpcMedio": number;
  "TotalPagina": number;
  "CustoMedioTeste": number;
  "CustoMesTotal": number;
  "MesAno": Date;
  "id": number;
  constructor(data?: EstatisticaMesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EstatisticaMes`.
   */
  public static getModelName() {
    return "EstatisticaMes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EstatisticaMes for dynamic purposes.
  **/
  public static factory(data: EstatisticaMesInterface): EstatisticaMes{
    return new EstatisticaMes(data);
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
      name: 'EstatisticaMes',
      plural: 'EstatisticaMes',
      path: 'EstatisticaMes',
      idName: 'id',
      properties: {
        "MediaPessoaTestePagina": {
          name: 'MediaPessoaTestePagina',
          type: 'number'
        },
        "TotalPessoaTestePagina": {
          name: 'TotalPessoaTestePagina',
          type: 'number'
        },
        "CpcMedio": {
          name: 'CpcMedio',
          type: 'number'
        },
        "TotalPagina": {
          name: 'TotalPagina',
          type: 'number'
        },
        "CustoMedioTeste": {
          name: 'CustoMedioTeste',
          type: 'number'
        },
        "CustoMesTotal": {
          name: 'CustoMesTotal',
          type: 'number'
        },
        "MesAno": {
          name: 'MesAno',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
