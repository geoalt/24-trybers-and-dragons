export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race._counter += 1;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
    // return Race._counter;
  }
}
