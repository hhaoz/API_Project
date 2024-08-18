import { Routes } from '@angular/router';
import { ListCatsComponent } from './pages/list-cats/list-cats.component';
import { ListProfilesComponent } from './pages/list-profiles/list-profiles.component';

export const routes: Routes = [
  {
    path: 'cat',
    component: ListCatsComponent,
  },
  {
    path: 'profiles',
    component: ListProfilesComponent,
  },
];
