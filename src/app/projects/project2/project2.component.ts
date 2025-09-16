import { Component } from '@angular/core';

@Component({
  selector: 'app-project2',
  standalone: true,
  template: `
    <div class="project-content">
      <h2>Python Client-Server Desktop Messenger Application with pygames</h2>
      <div class="video-container">
        <video 
          autoplay 
          loop 
          muted 
          playsinline
          class="project-video"
        >
          <source src="client_chat.m4v" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>
  `,
  styleUrls: ['./project2.component.css']
})
export class Project2Component {}