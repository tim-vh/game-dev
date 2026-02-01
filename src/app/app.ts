import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent } from "ngx-markdown";
import frontMatter from 'front-matter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarkdownComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private httpClient = inject(HttpClient);
  protected readonly content = signal('');

  ngOnInit(): void {

    this.httpClient.get('markdown/test.md',{responseType: 'text'}).subscribe((markdown) =>{
      const parseResult = frontMatter(markdown);
      this.content.set(parseResult.body);
    });

  }
}
