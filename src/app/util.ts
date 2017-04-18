import { Tile } from "./tile.model";
// REEEEEEEEEEEEEEEEEEEEEEEFACTOOOOOOOOOOOOOOOOOOR !!!!!!!

export const repeat = (that: any) => {
  let i = 0
  const breakTheloop = (): void => {
    i = 0
    that.userTurn = true
    clearInterval(interv)
  }
  const toggleColor = () => that.controls[that.PCMemory[i]].changeColor()
  const animate = (): void => {
    toggleColor().play()
    setTimeout(() => {
      toggleColor()
      i += 1
      if (i >= that.PCMemory.length)
        breakTheloop()
    }, 200)
  }
  let interv = setInterval(animate, 800)
}
export const handleUserEntries = (that: any, tile: Tile) => {
  const keepGoing = () => {
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
      that.repeat()
      that.userMemory = []
    }
  }
}