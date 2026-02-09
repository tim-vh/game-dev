import { Component, inject, OnInit, signal } from '@angular/core';
import { PostDataService } from '../../posts/post-data-service';
import { PostsOverview } from "../../posts/posts-overview/posts-overview";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [PostsOverview],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage  {
  private postDataService = inject(PostDataService);

  protected readonly postsMetaData = toSignal(this.LoadPostMetadata(), {initialValue: []})

  private LoadPostMetadata()
  {
    return this.postDataService.loadPostsMetadata();
  }
}
