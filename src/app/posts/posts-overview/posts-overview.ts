import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PostMetadata } from '../post-metadata';

@Component({
  selector: 'app-posts-overview',
  templateUrl: './posts-overview.html',
  styleUrl: './posts-overview.css',
})
export class PostsOverview implements OnInit {

  private httpClient = inject(HttpClient);

  protected readonly postsMetadata = signal<PostMetadata[]>([]);

  ngOnInit(): void {
    this.loadPostsMetadata();
  }

  private loadPostsMetadata() {
    this.httpClient.get<PostMetadata[]>(`data/markdown/posts.json`).subscribe((postMetadata) => {
      this.postsMetadata.set(postMetadata);
    });
  }
}
