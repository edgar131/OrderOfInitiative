import {Combatant} from './Combatant';
export default class Util {
  static calcMod(stat: number): number {
    return Math.floor((stat - 10) / 2);
  }

  static calcModAsString(stat: number): string {
    const mod: number = Util.calcMod(stat);
    return mod > 0 ? ('+' + mod) : ('' + mod);
  }

  static generateUUID(): string { // Public Domain/MIT
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

  static createNewCombatant(): Combatant {
    return {
      id: Util.generateUUID(),
      name: '',
      combat: {
        initiative: undefined,
        hp: undefined
      },
      data: {
        ac: undefined,
        maxhp: undefined,
        stats: {
          str: undefined,
          dex: undefined,
          con: undefined,
          int: undefined,
          wis: undefined,
          cha: undefined
        }
      }
    };
  }

  static copyCombatant(combatant: Combatant): Combatant {
    return {
      id: Util.generateUUID(),
      name: combatant.name,
      combat: {
        initiative: combatant.combat.initiative,
        hp: combatant.combat.hp
      },
      data: {
        ac: combatant.data.ac,
        maxhp: combatant.data.maxhp,
        stats: {
          str: combatant.data.stats.str,
          dex: combatant.data.stats.dex,
          con: combatant.data.stats.con,
          int: combatant.data.stats.int,
          wis: combatant.data.stats.wis,
          cha: combatant.data.stats.cha
        }
      }
    };
  }
}
