import Combatant from './Combatant';
export class Party {
  name: string;
  combatants: Combatant[];

  constructor(name: string, combatants: Combatant[] = []) {
    this.name = name;
    this.combatants = combatants;
  }
}
