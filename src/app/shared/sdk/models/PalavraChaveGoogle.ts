/* tslint:disable */
import {
  CampanhaPalavraChaveResultado,
  PalavraChaveEstatistica,
  PalavraGoogleProjeto
} from '../index';

declare var Object: any;
export interface PalavraChaveGoogleInterface {
  "palavra": string;
  campanhaPalavraChaveResultados?: CampanhaPalavraChaveResultado[];
  palavraChaveEstatisticas?: PalavraChaveEstatistica[];
  palavraGoogleProjetos?: PalavraGoogleProjeto[];
}

export class PalavraChaveGoogle implements PalavraChaveGoogleInterface {
  "palavra": string;
  campanhaPalavraChaveResultados: CampanhaPalavraChaveResultado[];
  palavraChaveEstatisticas: PalavraChaveEstatistica[];
  palavraGoogleProjetos: PalavraGoogleProjeto[];
  constructor(data?: PalavraChaveGoogleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PalavraChaveGoogle`.
   */
  public static getModelName() {
    return "PalavraChaveGoogle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PalavraChaveGoogle for dynamic purposes.
  **/
  public static factory(data: PalavraChaveGoogleInterface): PalavraChaveGoogle{
    return new PalavraChaveGoogle(data);
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
      name: 'PalavraChaveGoogle',
      plural: 'PalavraChaveGoogles',
      path: 'PalavraChaveGoogles',
      idName: 'palavra',
      properties: {
        "palavra": {
          name: 'palavra',
          type: 'string'
        },
      },
      relations: {
        campanhaPalavraChaveResultados: {
          name: 'campanhaPalavraChaveResultados',
          type: 'CampanhaPalavraChaveResultado[]',
          model: 'CampanhaPalavraChaveResultado',
          relationType: 'hasMany',
                  keyFrom: 'palavra',
          keyTo: 'palavraChaveGoogleId'
        },
        palavraChaveEstatisticas: {
          name: 'palavraChaveEstatisticas',
          type: 'PalavraChaveEstatistica[]',
          model: 'PalavraChaveEstatistica',
          relationType: 'hasMany',
                  keyFrom: 'palavra',
          keyTo: 'palavraChaveGoogleId'
        },
        palavraGoogleProjetos: {
          name: 'palavraGoogleProjetos',
          type: 'PalavraGoogleProjeto[]',
          model: 'PalavraGoogleProjeto',
          relationType: 'hasMany',
                  keyFrom: 'palavra',
          keyTo: 'palavraChaveGoogleId'
        },
      }
    }
  }
}
