import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';

import { TileService } from './tile.service'

@NgModule({
  declarations: [
    AppComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [TileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
