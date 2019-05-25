/* tslint:disable */

declare var Object: any;
export interface ProcessoNegocioEtapaProjetoInterface {
  "id"?: number;
  "etapaProjetoId"?: number;
  "processoNegocioId"?: number;
}

export class ProcessoNegocioEtapaProjeto implements ProcessoNegocioEtapaProjetoInterface {
  "id": number;
  "etapaProjetoId": number;
  "processoNegocioId": number;
  constructor(data?: ProcessoNegocioEtapaProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProcessoNegocioEtapaProjeto`.
   */
  public static getModelName() {
    return "ProcessoNegocioEtapaProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProcessoNegocioEtapaProjeto for dynamic purposes.
  **/
  public static factory(data: ProcessoNegocioEtapaProjetoInterface): ProcessoNegocioEtapaProjeto{
    return new ProcessoNegocioEtapaProjeto(data);
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
      name: 'ProcessoNegocioEtapaProjeto',
      plural: 'ProcessoNegocioEtapaProjetos',
      path: 'ProcessoNegocioEtapaProjetos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "etapaProjetoId": {
          name: 'etapaProjetoId',
          type: 'number'
        },
        "processoNegocioId": {
          name: 'processoNegocioId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
