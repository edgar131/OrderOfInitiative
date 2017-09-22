export default class CombatData {
  initiative: number;
  hp: number;

  constructor(initiative?: number, hp?: number) {
    this.initiative = initiative;
    this.hp = hp;
  }
}
