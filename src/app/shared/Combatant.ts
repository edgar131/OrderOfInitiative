import CombatData from './CombatData';
import CombatantInfo from './CombatantInfo';

export default class Combatant {
  id: string;
  name: string;
  combat: CombatData;
  data: CombatantInfo;

  private static generateUUID () { // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  public static copy(combatant: Combatant): Combatant {
    return new Combatant(combatant.name, combatant.combat, combatant.data);
  }

  constructor(name: string, combat: CombatData = new CombatData(), data: CombatantInfo = new CombatantInfo()) {
    this.id = Combatant.generateUUID();
    this.name = name;
    this.combat = combat;
    this.data = data;
  }


}
