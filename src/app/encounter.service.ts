import { Injectable } from '@angular/core';
import { MONSTERS } from './monsters';

@Injectable()
export class EncounterService {

  monsters: any[];

  constructor() {
    this.monsters = this.monsters.filter(monster => {
      return monster.name !== undefined;
    });
  }

  getMonsters(): any[] {
    return this.monsters;
  }
}
