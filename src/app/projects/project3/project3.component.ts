import { Component } from '@angular/core';

@Component({
  selector: 'app-project3',
  standalone: true,
  template: `
    <div class="project-content">
      <h1>Convolution Image Filtering in Python</h1>
      <p>from my computer vision class</p>
      <div class="images-container">
        <img src="convolution1.png" alt="Project Screenshot 1" class="project-image">
        <img src="convolution2.png" alt="Project Screenshot 2" class="project-image">
        <img src="convolution3.png" alt="Project Screenshot 3" class="project-image">
    </div>
  `,
  styleUrls: ['./project3.component.css']
})
export class Project3Component {}