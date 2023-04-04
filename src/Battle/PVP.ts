import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  p1: Fighter = new Character('Um');
  p2: Fighter = new Character('Dois');

  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this.p2 = p2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.p2.lifePoints !== -1) {
      this.player.attack(this.p2);
      this.p2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}