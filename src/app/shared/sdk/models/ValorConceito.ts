/* tslint:disable */
import {
  AnuncioAds
} from '../index';

declare var Object: any;
export interface ValorConceitoInterface {
  "titulo"?: string;
  "descricao"?: string;
  "id"?: number;
  "conceitoProdutoId"?: number;
  anuncioAds?: AnuncioAds[];
}

export class ValorConceito implements ValorConceitoInterface {
  "titulo": string;
  "descricao": string;
  "id": number;
  "conceitoProdutoId": number;
  anuncioAds: AnuncioAds[];
  constructor(data?: ValorConceitoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ValorConceito`.
   */
  public static getModelName() {
    return "ValorConceito";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ValorConceito for dynamic purposes.
  **/
  public static factory(data: ValorConceitoInterface): ValorConceito{
    return new ValorConceito(data);
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
      name: 'ValorConceito',
      plural: 'ValorConceitos',
      path: 'ValorConceitos',
      idName: 'id',
      properties: {
        "titulo": {
          name: 'titulo',
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
        "conceitoProdutoId": {
          name: 'conceitoProdutoId',
          type: 'number'
        },
      },
      relations: {
        anuncioAds: {
          name: 'anuncioAds',
          type: 'AnuncioAds[]',
          model: 'AnuncioAds',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'valorConceitoId'
        },
      }
    }
  }
}
