export class Tile {
    constructor(
        public index: number,
        public color: string,
        public activeColor: string,
        public sound: string
    ) { }
}
export const tiles: Tile[] = [
    new Tile(0, "#00f", "#00d", "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    new Tile(1, "#f00", "#d00", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    new Tile(2, "#ff0", "#dd0", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    new Tile(3, "#0f0", "#0d0", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
]