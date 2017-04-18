import { Component, OnInit } from '@angular/core';
import { Tile, tiles } from './tile.model'
import { TileService } from "./tile.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public tileService: TileService) { }
  start() {
    this.tileService.startGame()
  }
  reset() {
    this.tileService.reset()
  }
  tiles: Tile[] = tiles
  ngOnInit(): void {
    this.tileService.audioElAdd(document.querySelector("audio"))
  }
}
