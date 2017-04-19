import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';

import { TileService } from './tile.service';
import { ConfettiComponent } from './confetti/confetti.component'

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    ConfettiComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [TileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
