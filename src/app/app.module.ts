import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { MdButtonModule, MdDialogModule, MdIconModule, MdToolbarModule,
         MdTooltipModule, MdAutocompleteModule, MdListModule, MdMenuModule,
         MdInputModule, MdSidenavModule, MdSelectModule} from '@angular/material';
import { InitiativeOrderPipe } from './encounter/initiative-order-pipe';
import { FormsModule } from '@angular/forms';
import { ModifyHpDialogComponent } from './modify-hp-dialog/modify-hp-dialog.component';
import { EditCombatantFormComponent } from './edit-combatant-form/edit-combatant-form.component';
import { PartyFormComponent } from './party-form/party-form.component';
import { MonsterFilterPipe } from './edit-combatant-form/monster-filter.pipe';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiativeOrderPipe,
    EncounterComponent,
    ModifyHpDialogComponent,
    EditCombatantFormComponent,
    PartyFormComponent,
    MonsterFilterPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    MdIconModule,
    MdTooltipModule,
    MdToolbarModule,
    MdAutocompleteModule,
    MdListModule,
    MdMenuModule,
    MdInputModule,
    MdSidenavModule,
    MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModifyHpDialogComponent, ConfirmationDialogComponent]
})
export class AppModule { }
