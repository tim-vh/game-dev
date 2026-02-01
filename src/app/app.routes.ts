import { Routes } from '@angular/router';
import { MarkdownPost } from './markdown-post/markdown-post';

export const routes: Routes = [
    {
        path: 'posts/:folderName/:postName',
        component: MarkdownPost
    }
];
