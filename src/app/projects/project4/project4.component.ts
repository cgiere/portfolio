import { Component } from '@angular/core';

@Component({
  selector: 'app-project4',
  standalone: true,
  template: `
    <div class="project-content">
      <h2>In Progress: Learning OpenGL with C++</h2>
      <div class="video-container">
        <div class="images-container">
        <img src="opengl.gif" alt="Project Screenshot 1" class="project-image">
        </div>
    </div>
  `,
  styleUrls: ['./project4.component.css']
})
export class Project4Component {}