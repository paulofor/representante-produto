/* tslint:disable */

declare var Object: any;
export interface ReceitaInterface {
  "id"?: number;
  "precoUnitario"?: number;
  "quantidadeMes"?: number;
  "tipo"?: string;
  "precentualItem"?: number;
  "nomeItem"?: string;
  "valorMedioItem"?: number;
  "quantidadeItemMes"?: number;
  "projetoCanvasMySqlId"?: number;
}

export class Receita implements ReceitaInterface {
  "id": number;
  "precoUnitario": number;
  "quantidadeMes": number;
  "tipo": string;
  "precentualItem": number;
  "nomeItem": string;
  "valorMedioItem": number;
  "quantidadeItemMes": number;
  "projetoCanvasMySqlId": number;
  constructor(data?: ReceitaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Receita`.
   */
  public static getModelName() {
    return "Receita";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Receita for dynamic purposes.
  **/
  public static factory(data: ReceitaInterface): Receita{
    return new Receita(data);
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
      name: 'Receita',
      plural: 'Receita',
      path: 'Receita',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "precoUnitario": {
          name: 'precoUnitario',
          type: 'number'
        },
        "quantidadeMes": {
          name: 'quantidadeMes',
          type: 'number'
        },
        "tipo": {
          name: 'tipo',
          type: 'string'
        },
        "precentualItem": {
          name: 'precentualItem',
          type: 'number'
        },
        "nomeItem": {
          name: 'nomeItem',
          type: 'string'
        },
        "valorMedioItem": {
          name: 'valorMedioItem',
          type: 'number'
        },
        "quantidadeItemMes": {
          name: 'quantidadeItemMes',
          type: 'number'
        },
        "projetoCanvasMySqlId": {
          name: 'projetoCanvasMySqlId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
