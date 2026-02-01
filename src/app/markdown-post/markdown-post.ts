import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import frontMatter from 'front-matter';
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'app-markdown-post',
  imports: [MarkdownComponent],
  templateUrl: './markdown-post.html',
  styleUrl: './markdown-post.css',
})
export class MarkdownPost implements OnInit {

  private httpClient = inject(HttpClient);
  private activatedRoute = inject(ActivatedRoute);

  protected readonly content = signal('');

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const postName = params['postName'];
      const folderName = params['folderName'];
      this.loadMarkdown(folderName, postName);
    });
  }

  private loadMarkdown(folderName:string , pageName: string) {
    this.httpClient.get(`markdown/posts/${folderName}/${pageName}.md`,{responseType: 'text'}).subscribe((markdown) =>{
      const parseResult = frontMatter(markdown);
      this.content.set(parseResult.body);

      // TODO: handle 404
    });
  }
}
