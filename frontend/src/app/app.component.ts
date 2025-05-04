import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackFormComponent } from './feedback/feedback-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeedbackFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
