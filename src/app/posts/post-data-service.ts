import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostMetadata } from './post-metadata';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  private httpClient = inject(HttpClient);

  loadPostsMetadata(categoriesFilter: string | null = null) {
    let PostMetadata =  this.httpClient.get<PostMetadata[]>(`data/markdown/posts.json`)
    if (categoriesFilter) {
      PostMetadata = PostMetadata.pipe(
        map(postsMetaData => postsMetaData.filter(p => p.attributes.categories == categoriesFilter))
      )
    }
    
    return PostMetadata
  }
}
