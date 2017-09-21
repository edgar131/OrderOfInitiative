export default class Util {
  static calcMod(stat: number): number {
    return Math.floor((stat - 10) / 2);
  }

  static calcModAsString(stat: number): string {
    const mod: number = Util.calcMod(stat);
    return mod > 0 ? ('+' + mod) : ('' + mod);
  }
}
