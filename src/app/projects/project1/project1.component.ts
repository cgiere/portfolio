import { Component } from '@angular/core';

@Component({
  selector: 'app-project1',
  standalone: true,
  template: `
    <div class="project-content">
      <h2>Java Task Manager Desktop Application</h2>
      <div class="images-container">
        <img src="taskdemo.gif" alt="client chat demo" class="project-image">
      </div>
    </div>
  `,
  styleUrls: ['./project1.component.css']
})
export class Project1Component {}