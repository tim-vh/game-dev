import { Component, inject } from '@angular/core';
import { PostsOverview } from "../../posts/posts-overview/posts-overview";
import { toSignal } from '@angular/core/rxjs-interop';
import { PostDataService } from '../../posts/post-data-service';

@Component({
  selector: 'app-scratch-page',
  imports: [PostsOverview],
  templateUrl: './scratch-page.html',
  styleUrl: './scratch-page.css',
})
export class ScratchPage {
  
private postDataService = inject(PostDataService);

  protected readonly postsMetaData = toSignal(this.LoadPostMetadata(), {initialValue: []})

  private LoadPostMetadata()
  {
    return this.postDataService.loadPostsMetadata("scratch");
  }
}
