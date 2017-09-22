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
      damage: this.damage ? this.damage : 0,
      heal: this.heal ? this.heal : 0
    });
  }

  ngOnInit() {}

}
