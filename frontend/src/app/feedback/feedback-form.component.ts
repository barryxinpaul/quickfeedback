// This code is a feedback form component that allows users to submit/push feedback to the backend 
// It uses Angular's HttpClient to send the feedback message to the backend by using the post method 

import { Component } from '@angular/core'; // Import Component decorator
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Import HttpClient
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { environment } from '../../environments/environment';

//Feedback form component 
@Component({
    selector: 'app-feedback-form', // Selector for the component
    templateUrl: './feedback-form.component.html', // Template URL for the component
    standalone: true, // Standalone component
    imports: [FormsModule, CommonModule] // Import FormsModule and CommonModule
})
// Feedback form component class
export class FeedbackFormComponent {
    feedback: string = ''; // Feedback message
    isSubmitting: boolean = false; // Check if the feedback is being submitted
    errorMessage: string = ''; // Error message
    successMessage: string = ''; // Success message

    constructor(private http: HttpClient) {} // Inject HttpClient into the component this is used to send the feedback message to the backend

    // Submit feedback method
    submitFeedback() {
        // Check if the feedback when submitted is empty and if it is, display the error message
        if (!this.feedback.trim()) {
            this.errorMessage = 'Please enter some feedback'; // If the feedback is not entered, the error message is displayed
            return;
        }

        this.isSubmitting = true; // Set the isSubmitting to true
        this.errorMessage = ''; // Clear the error message
        this.successMessage = ''; // Clear the success message

        // Send the feedback message to the backend domain/host/origin using the post method
        this.http.post(environment.backendUrl, { message: this.feedback })
        // Subscribe keeps track of the response from the backend
            .subscribe({
                next: (response) => {
                    console.log('Feedback submitted successfully', response);
                    this.successMessage = 'Feedback submitted successfully!'; // If the feedback is submitted successfully, the success message is displayed
                    this.feedback = ''; // Clear the feedback message
                },
                error: (error: HttpErrorResponse) => {
                    console.error('Error submitting feedback:', error);
                    this.errorMessage = 'Failed to submit feedback. Please try again.'; // If the feedback is not submitted successfully, the error message is displayed
                },
                complete: () => {
                    this.isSubmitting = false; // Set the isSubmitting to false
                }
            });
    }
}