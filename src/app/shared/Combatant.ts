import {CombatData} from './CombatData';
import {CombatantInfo} from './CombatantInfo';

export interface Combatant {
  id: string;
  name: string;
  combat: CombatData;
  data: CombatantInfo;
}
