import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import frontMatter from 'front-matter';
import { MarkdownComponent } from "ngx-markdown";
import { Attributes } from '../post-metadata';

@Component({
  selector: 'app-post-details',
  imports: [MarkdownComponent],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails implements OnInit {

  @Input() folderName: string = '';
  @Input() postName: string = '';
  
  private httpClient = inject(HttpClient);

  protected readonly content = signal('');
  protected readonly title = signal('');

  ngOnInit(): void {
    this.loadMarkdown(this.folderName, this.postName)
  }

  private loadMarkdown(folderName:string , postName: string) {
    this.httpClient.get(`markdown/posts/${folderName}/${postName}.md`,{responseType: 'text'}).subscribe((markdown) =>{
      const parseResult = frontMatter(markdown);
      const attributes = parseResult.attributes as Attributes
      this.content.set(parseResult.body);
      this.title.set(attributes.title);

      // TODO: handle 404
    });
  }
}
