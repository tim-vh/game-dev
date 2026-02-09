import { Routes } from '@angular/router';
import { PostDetails } from './posts/post-details/post-details';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'posts/:folderName/:postName',
        component: PostDetails
    }
];
