import { Component } from '@angular/core';

@Component({
  selector: 'app-project2',
  standalone: true,
  template: `
    <div class="project-content">
      <h2>Python Client-Server Desktop Messenger Application with pygames</h2>
        <div class="images-container">
        <img src="clientchat.gif" alt="client chat demo" class="project-image">
        </div>
    </div>
  `,
  styleUrls: ['./project2.component.css']
})
export class Project2Component {}