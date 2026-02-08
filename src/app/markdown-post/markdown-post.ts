import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import frontMatter from 'front-matter';
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-markdown-post',
  imports: [MarkdownComponent],
  templateUrl: './markdown-post.html',
  styleUrl: './markdown-post.css',
})
export class MarkdownPost implements OnInit {

  @Input() folderName: string = '';
  @Input() postName: string = '';
  
  private httpClient = inject(HttpClient);

  protected readonly content = signal('');

  ngOnInit(): void {
    this.loadMarkdown(this.folderName, this.postName)
  }

  private loadMarkdown(folderName:string , postName: string) {
    this.httpClient.get(`markdown/posts/${folderName}/${postName}.md`,{responseType: 'text'}).subscribe((markdown) =>{
      const parseResult = frontMatter(markdown);
      this.content.set(parseResult.body);

      // TODO: handle 404
    });
  }
}
