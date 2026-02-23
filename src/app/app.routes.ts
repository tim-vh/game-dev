import { Routes } from '@angular/router';
import { PostDetails } from './posts/post-details/post-details';
import { HomePage } from './pages/home-page/home-page';
import { ScratchPage } from './pages/scratch-page/scratch-page';
import { LuantiPage } from './pages/luanti-page/luanti-page';
import { MakecodeArcadePage } from './pages/makecode-arcade-page/makecode-arcade-page';
import { RobloxPage } from './pages/roblox-page/roblox-page';

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
        path: 'luanti',
        component: LuantiPage
    },
    {
        path: 'makecode-arcade',
        component: MakecodeArcadePage
    },
    {
        path: 'roblox',
        component: RobloxPage
    },
    {
        path: 'posts/:folderName/:postName',
        component: PostDetails
    }
];
