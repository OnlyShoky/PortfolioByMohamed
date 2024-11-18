import { Routes } from '@angular/router';

import { HomeComponent } from './core/main/home/home.component';
import { ProjectsComponent } from './core/main/projects/projects.component';
import { CarrerComponent } from './core/main/carrer/carrer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'carrer', component: CarrerComponent },
  { path: '**', redirectTo: '' },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
