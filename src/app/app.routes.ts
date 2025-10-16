import { Routes } from '@angular/router';
import { ExampleComponent } from './navbar/example.component';

export const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home-page.component').then((m) => m.HomePageComponent),
      },
      {
        path: 'tab2',
        loadComponent: () => import('./tab2/tab2-page.component').then((m) => m.Tab2PageComponent),
      },
      {
        path: 'tab3',
        loadComponent: () => import('./tab3/tab3-page.component').then((m) => m.Tab3PageComponent),
      },
      {
        path: '',
        redirectTo: '/example/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/example/home',
    pathMatch: 'full',
  },
];
