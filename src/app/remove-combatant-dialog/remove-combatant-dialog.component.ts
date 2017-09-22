import {Component, Inject, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-remove-combatant-dialog',
  templateUrl: './remove-combatant-dialog.component.html',
  styleUrls: ['./remove-combatant-dialog.component.css']
})
export class RemoveCombatantDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<RemoveCombatantDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
