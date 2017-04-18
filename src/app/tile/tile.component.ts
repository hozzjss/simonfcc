import { Component, OnInit, Input } from '@angular/core';
import { Tile } from '../tile.model'
import { TileService } from "../tile.service";
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  // this allows app component to pass tile data here
  // like color sound and any other stuff that might be lying in our model 
  @Input() tile: Tile
  color: string
  constructor(private tileService: TileService) { }
  changeColor(): TileComponent {
    this.color = this.color == this.tile.color ? this.tile.activeColor : this.tile.color
    return this
  }
  handleClick() {
    this.play()
    this.tileService.addToUserMem(this.tile)
  }
  play(): TileComponent {
    this.tileService.play(this.tile.sound)
    return this
  }
  ngOnInit() {
    this.color = this.tile.color
    this.tileService.addControls(this)
  }

}
