// This is the service for the feedback API
// It is used to handle the logic for creating and getting feedback

import { Injectable } from '@nestjs/common';

@Injectable() // The Injectable decorator is used to make the FeedbackService injectable into the controller
export class FeedbackService {
    private feedback: {message: string; createdAt: Date}[] = []; // The feedback array is used to store the feedback items like a database locally

    createFeedback(message: string) {
        const feedback = { // The feedback object is used to store the feedback item
            message, // The message is the feedback item
            createdAt: new Date() // The createdAt is the date and time the feedback item was created
        };
        this.feedback.push(feedback); // The feedback item is pushed into the feedback array
        return { success: true }; // The success message is returned to the controller
    }

    findAll() {
        return this.feedback; // The feedback array is returned to the controller
    }
}
