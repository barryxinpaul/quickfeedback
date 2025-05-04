// This is the module for the feedback API
// It is used to import the controller and service into the app.module.ts file so that they can be used in the app

import { Module } from '@nestjs/common'; // Import the Module decorator from the NestJS common package
import { FeedbackController } from './feedback.controller'; // Import the FeedbackController that was created to handle the feedback API
import { FeedbackService } from './feedback.service'; // Import the FeedbackService that was created to handle the logic for creating and getting feedback

@Module({
    controllers: [FeedbackController], // The controllers that are used in the module
    providers: [FeedbackService], // The services that are used in the module
})
export class FeedbackModule {} // Export the FeedbackModule so that it can be used in the app.module.ts file