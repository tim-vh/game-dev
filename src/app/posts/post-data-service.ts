import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostMetadata } from './post-metadata';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  private httpClient = inject(HttpClient);

  loadPostsMetadata() {
    return this.httpClient.get<PostMetadata[]>(`data/markdown/posts.json`)
  }
}
