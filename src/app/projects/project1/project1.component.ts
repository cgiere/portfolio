import { Component } from '@angular/core';

@Component({
  selector: 'app-project1',
  standalone: true,
  template: `
    <div class="project-content">
      <h2>Java Task Manager Desktop Application</h2>
      <div class="video-container">
        <video 
          autoplay 
          loop 
          muted 
          playsinline
          class="project-video"
        >
          <source src="task_demo.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>
  `,
  styleUrls: ['./project1.component.css']
})
export class Project1Component {}
