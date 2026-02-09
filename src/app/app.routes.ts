import { Routes } from '@angular/router';
import { PostDetails } from './posts/post-details/post-details';
import { PostsOverview } from './posts/posts-overview/posts-overview';

export const routes: Routes = [
    {
        path: '',
        component: PostsOverview
    },
    {
        path: 'posts/:folderName/:postName',
        component: PostDetails
    }
];
