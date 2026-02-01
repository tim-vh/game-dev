import { Routes } from '@angular/router';
import { MarkdownPost } from './markdown-post/markdown-post';
import { PostsOverview } from './posts-overview/posts-overview';

export const routes: Routes = [
    {
        path: '',
        component: PostsOverview
    },
    {
        path: 'posts/:folderName/:postName',
        component: MarkdownPost
    }
];
