import { Component, Input, input } from '@angular/core';
import { GifsService } from '../../../gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private gifService : GifsService){}

  // @Input()
  // public busqueda:string = '';

  get tags(): string[]{
    return  this.gifService.tagsHistory;
  }

  searchTag(tag:string):void{
    this.gifService.searchTag(tag);

  }
}
