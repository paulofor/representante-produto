/* tslint:disable */

declare var Object: any;
export interface RecursoConceitoProdutoInterface {
  "nome"?: string;
  "descricao"?: string;
  "id"?: number;
}

export class RecursoConceitoProduto implements RecursoConceitoProdutoInterface {
  "nome": string;
  "descricao": string;
  "id": number;
  constructor(data?: RecursoConceitoProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RecursoConceitoProduto`.
   */
  public static getModelName() {
    return "RecursoConceitoProduto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RecursoConceitoProduto for dynamic purposes.
  **/
  public static factory(data: RecursoConceitoProdutoInterface): RecursoConceitoProduto{
    return new RecursoConceitoProduto(data);
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
      name: 'RecursoConceitoProduto',
      plural: 'RecursoConceitoProdutos',
      path: 'RecursoConceitoProdutos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
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
