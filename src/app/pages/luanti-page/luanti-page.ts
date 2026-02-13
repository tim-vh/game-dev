import { Component, inject } from '@angular/core';
import { PostsOverview } from "../../posts/posts-overview/posts-overview";
import { toSignal } from '@angular/core/rxjs-interop';
import { PostDataService } from '../../posts/post-data-service';
import { LinksAside } from "../../links/links-aside/links-aside";
import { LinksAsideItem } from "../../links/links-aside-item/links-aside-item";

@Component({
  selector: 'app-luanti-page',
  imports: [PostsOverview, LinksAside, LinksAsideItem],
  templateUrl: './luanti-page.html',
  styleUrl: './luanti-page.css',
})
export class LuantiPage {

  private postDataService = inject(PostDataService);

  protected readonly postsMetaData = toSignal(this.LoadPostMetadata(), {initialValue: []})

  private LoadPostMetadata()
  {
    return this.postDataService.loadPostsMetadata("luanti");
  }
}
