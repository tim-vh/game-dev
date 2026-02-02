import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuItems = [
    {title: 'Scratch', url: '/scratch'},
    {title: 'Makecode Arcade', url: '/makecode-arcade'},
    {title: 'Luanti', url: '/luanti'},
    {title: 'Roblox', url: '/roblox'}
  ]
}
