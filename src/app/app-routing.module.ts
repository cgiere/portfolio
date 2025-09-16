import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects_page/projects.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // home page
  { path: 'projects', component: ProjectsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}