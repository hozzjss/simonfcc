import { Injectable } from '@angular/core'
import { Tile, tiles } from "./tile.model"
import { TileComponent } from "./tile/tile.component"
import { repeat, handleUserEntries } from "./util"


@Injectable()
export class TileService {
  public winningCount: number = 0
  private strict: boolean = false
  private PCMemory: number[] = []
  private userMemory: number[] = []
  private userTurn: boolean = false
  private audioEl: HTMLAudioElement
  private controls: TileComponent[] = []

  // generates a random tile index
  private generate() {
    this.PCMemory.push(Math.round(Math.random() * 3))
  }
  // should repeat the last tiles in memory for the user
  // delegates control to util.ts
  private repeat(): void {
    repeat(this)
  }
  public strictSwitch() {
    this.strict = !this.strict
  }
  // this should handle user's entries
  public handleClick(tile: Tile): void {
    handleUserEntries(this, tile)
  }
  // this should keep the game going
  // it generates a new index
  // then repeats the entries to the user
  // and gives control back to the beloved user
  public startGame(): void {
    if (!this.userTurn) {
      this.generate()
      this.repeat()
      this.userTurn = true
    }
  }
  // this should reset everything at any time
  // memories are purged, score reset, control back to PC
  public reset(): void {
    this.winningCount = 0
    this.PCMemory = []
    this.userMemory = []
    this.userTurn = false
  }
  // should take TileComponents to control them from within the service
  public addControls(control: TileComponent) {
    this.controls.push(control)
  }
  // to keep encapsulation intact
  public audioElAdd(audio: HTMLAudioElement) {
    this.audioEl = audio
  }
  // to just have one audio element is better
  public play(sound: string) {
    this.audioEl.src = sound
    this.audioEl.play()
  }
}
