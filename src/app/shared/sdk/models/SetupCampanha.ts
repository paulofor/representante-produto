/* tslint:disable */

declare var Object: any;
export interface SetupCampanhaInterface {
  "nome": string;
  "budgetDiario": number;
  "estrategia": string;
  "diaSemanaInicio"?: string;
  "diaSemanaFinal"?: string;
  "plataforma"?: string;
  "matchPalavra"?: string;
  "rotacaoAnuncio"?: string;
  "permiteEdicao"?: number;
  "id"?: number;
}

export class SetupCampanha implements SetupCampanhaInterface {
  "nome": string;
  "budgetDiario": number;
  "estrategia": string;
  "diaSemanaInicio": string;
  "diaSemanaFinal": string;
  "plataforma": string;
  "matchPalavra": string;
  "rotacaoAnuncio": string;
  "permiteEdicao": number;
  "id": number;
  constructor(data?: SetupCampanhaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SetupCampanha`.
   */
  public static getModelName() {
    return "SetupCampanha";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SetupCampanha for dynamic purposes.
  **/
  public static factory(data: SetupCampanhaInterface): SetupCampanha{
    return new SetupCampanha(data);
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
      name: 'SetupCampanha',
      plural: 'SetupCampanhas',
      path: 'SetupCampanhas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "budgetDiario": {
          name: 'budgetDiario',
          type: 'number'
        },
        "estrategia": {
          name: 'estrategia',
          type: 'string'
        },
        "diaSemanaInicio": {
          name: 'diaSemanaInicio',
          type: 'string'
        },
        "diaSemanaFinal": {
          name: 'diaSemanaFinal',
          type: 'string'
        },
        "plataforma": {
          name: 'plataforma',
          type: 'string'
        },
        "matchPalavra": {
          name: 'matchPalavra',
          type: 'string'
        },
        "rotacaoAnuncio": {
          name: 'rotacaoAnuncio',
          type: 'string'
        },
        "permiteEdicao": {
          name: 'permiteEdicao',
          type: 'number'
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
