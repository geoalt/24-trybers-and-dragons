import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemies: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, enemies: (SimpleFighter | Fighter)[]) {
    super(player);
    this._enemies = enemies;
  }

  get enemies(): (SimpleFighter | Fighter)[] {
    return this._enemies;
  }

  playerTurn(): void {
    this.enemies.forEach((enemy) => {
      if (enemy.lifePoints !== -1) {
        this.player.attack(enemy);
      }
    });
  }

  enemyTurn(): void {
    this.enemies.forEach((enemy) => {
      enemy.attack(this.player);
    });
  }

  fight(): number {
    while (this.player.lifePoints !== -1 
      && this.enemies.every((enemy) => enemy.lifePoints !== -1)) {
      this.playerTurn();
      this.enemyTurn();
    }
    return this.player.lifePoints === -1 ? -1 : 1; 
  }
}
