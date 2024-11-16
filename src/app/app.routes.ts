import { Routes } from '@angular/router';

import { HomeComponent } from './core/main/home/home.component';
import { ProjectsComponent } from './core/main/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '' },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
