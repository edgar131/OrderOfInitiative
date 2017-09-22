import {Component, Inject, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-modify-hp-dialog',
  templateUrl: './modify-hp-dialog.component.html',
  styleUrls: ['./modify-hp-dialog.component.scss']
})
export class ModifyHpDialogComponent implements OnInit {

  damage: number;
  heal: number;

  constructor(public dialogRef: MdDialogRef<ModifyHpDialogComponent>) {
  }

  onSaveClick() {
    this.dialogRef.close({
      damage: this.damage,
      heal: this.heal
    });
  }

  onCancelClick() {
    this.dialogRef.close({
      damage: 0,
      heal: 0
    });
  }

  ngOnInit() {
    this.damage = 0;
    this.heal = 0;
  }

}
