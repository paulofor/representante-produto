/* tslint:disable */
import {
  ProjetoCanvasMySql,
  MvpCanvasMySql,
  GanhoDorCanvasMySql
} from '../index';

declare var Object: any;
export interface ProjetoExemploInterface {
  "id"?: number;
  "nome"?: string;
  "mercado"?: string;
  projetoCanvasMySqls?: ProjetoCanvasMySql[];
  mvpCanvasMySqls?: MvpCanvasMySql[];
  ganhoDorCanvasMySqls?: GanhoDorCanvasMySql[];
}

export class ProjetoExemplo implements ProjetoExemploInterface {
  "id": number;
  "nome": string;
  "mercado": string;
  projetoCanvasMySqls: ProjetoCanvasMySql[];
  mvpCanvasMySqls: MvpCanvasMySql[];
  ganhoDorCanvasMySqls: GanhoDorCanvasMySql[];
  constructor(data?: ProjetoExemploInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProjetoExemplo`.
   */
  public static getModelName() {
    return "ProjetoExemplo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProjetoExemplo for dynamic purposes.
  **/
  public static factory(data: ProjetoExemploInterface): ProjetoExemplo{
    return new ProjetoExemplo(data);
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
      name: 'ProjetoExemplo',
      plural: 'ProjetoExemplos',
      path: 'ProjetoExemplos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "mercado": {
          name: 'mercado',
          type: 'string'
        },
      },
      relations: {
        projetoCanvasMySqls: {
          name: 'projetoCanvasMySqls',
          type: 'ProjetoCanvasMySql[]',
          model: 'ProjetoCanvasMySql',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoExemploId'
        },
        mvpCanvasMySqls: {
          name: 'mvpCanvasMySqls',
          type: 'MvpCanvasMySql[]',
          model: 'MvpCanvasMySql',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoExemploId'
        },
        ganhoDorCanvasMySqls: {
          name: 'ganhoDorCanvasMySqls',
          type: 'GanhoDorCanvasMySql[]',
          model: 'GanhoDorCanvasMySql',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'projetoExemploId'
        },
      }
    }
  }
}
