import { Component, inject } from '@angular/core';
import { LinksAside } from "../../links/links-aside/links-aside";
import { LinksAsideItem } from "../../links/links-aside-item/links-aside-item";
import { PostsOverview } from "../../posts/posts-overview/posts-overview";
import { PostDataService } from '../../posts/post-data-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-makecode-arcade-page',
  imports: [LinksAside, LinksAsideItem, PostsOverview],
  templateUrl: './makecode-arcade-page.html',
  styleUrl: './makecode-arcade-page.css',
})
export class MakecodeArcadePage {
  private postDataService = inject(PostDataService);

  protected readonly postsMetaData = toSignal(this.LoadPostMetadata(), {initialValue: []})


  private LoadPostMetadata()
  {
    return this.postDataService.loadPostsMetadata("makecode-arcade");
  }
}
