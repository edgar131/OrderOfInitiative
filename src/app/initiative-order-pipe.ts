import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'initiativeOrder',
  pure: false
})

export class InitiativeOrderPipe implements PipeTransform {
  transform(value): any {
    value.sort((a, b) => {
      const aInitiative = a.combat.initiative,
        aDex = a.data.stats.dex,
        bInitiative = b.combat.initiative,
        bDex = b.data.stats.dex;

      if (aInitiative > bInitiative) {
        return -1;
      } else if (bInitiative > aInitiative) {
        return 1;
      } else {
        if (aDex && bDex) {
          if (aDex > bDex) {
            return -1;
          } else if (bDex > aDex) {
            return 1;
          } else {
            return 0;
          }
        } else {
          return 0;
        }
      }
    });
    return value;
  }
}
