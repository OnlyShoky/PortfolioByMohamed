import { Routes } from '@angular/router';

import { HomeComponent } from './core/main/home/home.component';
import { ProjectsComponent } from './core/main/projects/projects.component';
import { CarrerComponent } from './core/main/carrer/carrer.component';
import { NotFoundComponent } from './core/main/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'carrer', component: CarrerComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];
