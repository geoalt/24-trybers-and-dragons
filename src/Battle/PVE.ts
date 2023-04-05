import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _enemiesAlive: number;
  private _enemies: (SimpleFighter | Fighter)[];

  player: Fighter = new Character('Um');

  constructor(player: Fighter, enemies: (SimpleFighter | Fighter)[]) {
    super(player);
    this._enemies = enemies;
    this._enemiesAlive = enemies.length;
  }

  get enemies(): (SimpleFighter | Fighter)[] {
    return this._enemies;
  }

  get enemiesAlive(): number {
    return this._enemiesAlive;
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
      && this.enemies.some((enemy) => enemy.lifePoints > 0)) {
      this.playerTurn();
      this.enemyTurn();
    }
    return this.player.lifePoints === -1 ? -1 : 1; 
  }
}
