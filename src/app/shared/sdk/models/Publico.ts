/* tslint:disable */

declare var Object: any;
export interface PublicoInterface {
  "id"?: number;
}

export class Publico implements PublicoInterface {
  "id": number;
  constructor(data?: PublicoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Publico`.
   */
  public static getModelName() {
    return "Publico";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Publico for dynamic purposes.
  **/
  public static factory(data: PublicoInterface): Publico{
    return new Publico(data);
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
      name: 'Publico',
      plural: 'Publicos',
      path: 'Publicos',
      idName: 'id',
      properties: {
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
