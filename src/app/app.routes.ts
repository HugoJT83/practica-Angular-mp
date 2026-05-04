import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m)=> m.Home) //lazy loading
    },
    {
        path: 'tasks',
        loadComponent: () => import('./pages/tasks-page/tasks-page').then((m)=> m.TasksPage) //lazy loading
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m)=> m.About) //lazy loading
    },
];
