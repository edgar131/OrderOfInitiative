import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { MdButtonModule, MdDialogModule, MdIconModule, MdToolbarModule,
         MdTooltipModule, MdAutocompleteModule, MdListModule, MdMenuModule,
         MdInputModule, MdSidenavModule} from '@angular/material';
import { InitiativeOrderPipe } from './initiative-order-pipe';
import { FormsModule } from '@angular/forms';
import { ModifyHpDialogComponent } from './modify-hp-dialog/modify-hp-dialog.component';
import { RemoveCombatantDialogComponent } from './remove-combatant-dialog/remove-combatant-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiativeOrderPipe,
    EncounterComponent,
    ModifyHpDialogComponent,
    RemoveCombatantDialogComponent
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
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModifyHpDialogComponent, RemoveCombatantDialogComponent]
})
export class AppModule { }
