import { Injectable } from '@angular/core';
import { Tile, tiles } from "./tile.model";
import { TileComponent } from "./tile/tile.component";
import { checkArrEquality } from "./util";


@Injectable()
export class TileService {
  public winningCount = { count: 0 };
  private PCMemory: number[] = []
  private userMemory: number[] = []
  private userTurn: boolean = false
  private audioEl: HTMLAudioElement
  private controls: TileComponent[] = []
  private tiles: Tile[] = tiles

  public addControls(control: TileComponent) {
    if (this.controls.length < 4) {
      this.controls.push(control)
    }
  }
  public audioElAdd(audio: HTMLAudioElement) {
    if (!this.audioEl) {
      this.audioEl = audio
    }
  }
  public getTiles() {
    return this.tiles;
  }
  public play(sound: string) {
    this.audioEl.src = sound
    this.audioEl.play()
  }
  private generate() {
    this.PCMemory.push(Math.round(Math.random() * 3))
  }
  private cycle() {
    let index = 0
    let interv = setInterval(() => {
      this.controls[this.PCMemory[index]]
        .changeColor()
        .play()
      setTimeout(() => {
        this.controls[this.PCMemory[index]]
          .changeColor()
        index += 1
        if (index >= this.PCMemory.length) {
          index = 0
          this.userTurn = true
          clearInterval(interv)
        }
      }, 200)
    }, 800)
  }
  public addToUserMem(tile: Tile): void {
    if (this.userTurn) {
      this.userMemory.push(tile.index)
      let i = this.userMemory.length - 1
      if (this.PCMemory[i] === this.userMemory[i]) {
        if (this.userMemory.length === this.PCMemory.length) {
          this.userTurn = false
          if (checkArrEquality(this.PCMemory, this.userMemory)) {
            this.winningCount.count += 1
            this.startGame()
          } else {
            this.cycle()
          }
          this.userMemory = []
        }
      } else {
        this.cycle()
      }
    }
  }
  public startGame() {
    if (!this.userTurn) {
      this.generate()
      this.cycle()
      this.userTurn = true
    }
  }
  public reset(): void {
    this.winningCount = { count: 0 };
    this.PCMemory = []
    this.userMemory = []
    this.userTurn = false
  }
}
