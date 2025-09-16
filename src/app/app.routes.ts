import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects_page/projects.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects-page', component: ProjectsPageComponent }
];