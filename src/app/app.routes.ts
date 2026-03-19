import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
