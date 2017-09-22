import CombatData from './CombatData';
import CombatantInfo from './CombatantInfo';

export default class Combatant {
  name: string;
  combat: CombatData;
  data: CombatantInfo;

  constructor(name: string, combat: CombatData = new CombatData(), data: CombatantInfo = new CombatantInfo()) {
    this.name = name;
    this.combat = combat;
    this.data = data;
  }
}
