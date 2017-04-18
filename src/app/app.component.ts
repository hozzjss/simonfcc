import { Component, OnInit } from '@angular/core';
import { Tile } from './tile.model'
import { TileService } from "./tile.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(public tileService: TileService) { }
  count: Object = this.tileService.winningCount
  start() {
    this.tileService.startGame()
  }
  reset() {
    this.tileService.reset()
  }
  tiles: Tile[] = this.tileService.getTiles()
  ngOnInit(): void {
    this.tileService.audioElAdd(document.querySelector("audio"))
  }
}
