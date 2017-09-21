import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EncounterComponent } from './encounter/encounter.component';
import { MdButtonModule, MdDialogModule, MdIconModule, MdToolbarModule,
         MdTooltipModule, MdAutocompleteModule, MdListModule, MdMenuModule } from '@angular/material';
import { OrderByPipe } from './order-by-pipe';
import { FormsModule } from '@angular/forms';
import { ModifyHpDialogComponent } from './modify-hp-dialog/modify-hp-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent,
    OrderByPipe,
    ModifyHpDialogComponent
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
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
