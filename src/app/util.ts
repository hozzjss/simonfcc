import { Tile } from "./tile.model";
import { TileComponent } from "./tile/tile.component";

export const repeat = (that: any): void => {
  let i = 0

  // this should go ahead an toggle between the colors of mousedown and mouseup
  const toggleColor = (): TileComponent => that.controls[that.PCMemory[i]].changeColor()

  // this should break the loop of the interval
  // TODO: find something better than intervals
  // they're messy and all shitty
  const breakTheloop = (): void => {
    i = 0
    that.userTurn = true
    clearInterval(interv)
  }

  // this should be used in a set timeout 
  // to change back to normal color 
  // to imitate an animation effect 
  const toggleBack = (): void => {
    toggleColor()
    i += 1
    if (i >= that.PCMemory.length)
      breakTheloop()
  }

  // changes color then plays the tile's sound
  // TileComponent's funcs return their 'this' to ease chaining
  const animate = (): void => {
    toggleColor().play()
    setTimeout(toggleBack, 200)
  }

  // all comes to this pos: PieceOfShit
  // 800 ms for the animation effect and the sound to play
  const interv = setInterval(animate, 800)
}

export const handleUserEntries = (that: any, tile: Tile) => {
  // this works if all of the user's entries are correct
  // user then is given a score increase of 1
  const keepGoing = (): void => {
    that.winningCount += 1
    that.startGame()
  }
  if (that.userTurn) {
    that.userMemory.push(tile.index)
    // i is last index 
    // coz I want to compare each entry
    // with its match in PCMemory
    // if it's not all matches it goes bananas
    // and repeats instructions all over again
    // if full however and all matches then keep going
    let i = that.userMemory.length - 1
    if (that.PCMemory[i] === that.userMemory[i]) {
      if (that.userMemory.length === that.PCMemory.length) {
        that.userTurn = false
        keepGoing()
        that.userMemory = []
      }
    } else {
      if (that.strict) {
        that.reset()
        that.startGame()
      } else {
        that.repeat()
        that.userMemory = []
      }
    }
  }
}