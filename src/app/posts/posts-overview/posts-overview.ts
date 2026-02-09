import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { PostMetadata } from '../post-metadata';

@Component({
  selector: 'app-posts-overview',
  templateUrl: './posts-overview.html',
  styleUrl: './posts-overview.css',
})
export class PostsOverview  {

  @Input() postsMetaData: PostMetadata[] = [];

}
