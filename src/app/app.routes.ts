import { Routes } from '@angular/router';
import { PostDetails } from './posts/post-details/post-details';
import { HomePage } from './pages/home-page/home-page';
import { ScratchPage } from './pages/scratch-page/scratch-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
        {
        path: 'scratch',
        component: ScratchPage
    },
    {
        path: 'posts/:folderName/:postName',
        component: PostDetails
    }
];
