import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project1Component } from '../projects/project1/project1.component';
import { Project2Component } from '../projects/project2/project2.component';
import { Project3Component } from '../projects/project3/project3.component';
import { Project4Component } from '../projects/project4/project4.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
    template: `
    <div class="page-wrapper">
      <!-- Home Button -->
      <div class="home-button-container">
        <button class="home-button" [routerLink]="'/'">
          ← Back to Home
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid-container">
        <app-project1></app-project1>
        <app-project2></app-project2>
        <app-project3></app-project3>
        <app-project4></app-project4>
      </div>
    </div>
  `,
  styleUrls: ['./projects.component.css'],
  imports: [RouterLink, Project1Component, Project2Component, Project3Component, Project4Component]
})
export class ProjectsPageComponent {}