import { Injectable } from '@angular/core'
import { Tile, tiles } from "./tile.model"
import { TileComponent } from "./tile/tile.component"
import { repeat, handleUserEntries } from "./util"


@Injectable()
export class TileService {
  public winningCount: number = 0
  private PCMemory: number[] = []
  private userMemory: number[] = []
  private userTurn: boolean = false
  private audioEl: HTMLAudioElement
  private controls: TileComponent[] = []

  private generate() {
    this.PCMemory.push(Math.round(Math.random() * 3))
  }
  private repeat() {
    repeat(this)
  }
  public handleClick(tile: Tile): void {
    handleUserEntries(this, tile)
  }
  public startGame() {
    if (!this.userTurn) {
      this.generate()
      this.repeat()
      this.userTurn = true
    }
  }
  public reset(): void {
    this.winningCount = 0
    this.PCMemory = []
    this.userMemory = []
    this.userTurn = false
  }
  // mundane oo stuff to keep encapsulation intact
  // I fucking hate oop
  public addControls(control: TileComponent) {
    this.controls.push(control)
  }
  public audioElAdd(audio: HTMLAudioElement) {
    this.audioEl = audio
  }
  public play(sound: string) {
    this.audioEl.src = sound
    this.audioEl.play()
  }
}
