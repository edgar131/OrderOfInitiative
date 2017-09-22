import Stats from './Stats';

export default class CombatantInfo {
  ac: number;
  maxhp: number;
  stats: Stats;

  constructor(ac?: number, maxhp?: number, stats: Stats = new Stats()) {
    this.ac = ac;
    this.maxhp = maxhp;
    this.stats = stats;
  }
}
