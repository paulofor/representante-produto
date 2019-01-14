/* tslint:disable */

declare var Object: any;
export interface ModeloCampanhaAdsInterface {
  "id"?: number;
  "periodo"?: string;
  "custoDia"?: number;
}

export class ModeloCampanhaAds implements ModeloCampanhaAdsInterface {
  "id": number;
  "periodo": string;
  "custoDia": number;
  constructor(data?: ModeloCampanhaAdsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ModeloCampanhaAds`.
   */
  public static getModelName() {
    return "ModeloCampanhaAds";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ModeloCampanhaAds for dynamic purposes.
  **/
  public static factory(data: ModeloCampanhaAdsInterface): ModeloCampanhaAds{
    return new ModeloCampanhaAds(data);
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
      name: 'ModeloCampanhaAds',
      plural: 'ModeloCampanhaAds',
      path: 'ModeloCampanhaAds',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "periodo": {
          name: 'periodo',
          type: 'string'
        },
        "custoDia": {
          name: 'custoDia',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
