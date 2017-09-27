import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-party-dialog',
  templateUrl: './delete-party-dialog.component.html',
  styleUrls: ['./delete-party-dialog.component.css']
})
export class DeletePartyDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DeletePartyDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
