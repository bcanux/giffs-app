import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gif-home-pages',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private gifService:GifsService){}

  get gifs():Gif[]{
    return this.gifService.gifList;
  }
}
