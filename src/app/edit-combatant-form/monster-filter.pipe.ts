import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monsterFilter',
  pure: false
})
export class MonsterFilterPipe implements PipeTransform {

  transform(monsters: any, name: string): any {
    return monsters.filter((monster) => {
      return monster.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    });
  }

}
