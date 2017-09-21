import {Component, Inject, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-modify-hp-dialog',
  templateUrl: './modify-hp-dialog.component.html',
  styleUrls: ['./modify-hp-dialog.component.css']
})
export class ModifyHpDialogComponent implements OnInit {

  damage: number;
  heal: number;
  
  constructor(public dialogRef: MdDialogRef<ModifyHpDialogComponent>) {
  }

  ngOnInit() {
    this.damage = 0;
    this.heal = 0;
  }

}
