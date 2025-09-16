import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="grid-container">
      <app-about id="about"></app-about>
      <div class="projects-tile" [routerLink]="'/projects-page'">
        <h2>Projects</h2>
        <p>Click to see my projects</p>
      </div>
      <app-skills id="skills"></app-skills>
      <app-contact id="contact"></app-contact>
    </div>
  `,
  imports: [RouterLink, AboutComponent, SkillsComponent, ContactComponent]
})
export class HomeComponent {}