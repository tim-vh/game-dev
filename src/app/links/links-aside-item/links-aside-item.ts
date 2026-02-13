import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-links-aside-item',
  imports: [],
  templateUrl: './links-aside-item.html',
  styleUrl: './links-aside-item.css',
})
export class LinksAsideItem {
  @Input() url: string = '';
  @Input() text: string = '';
}
