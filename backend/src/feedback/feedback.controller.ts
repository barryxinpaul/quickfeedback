// The controller is responsible for handling the requests and responses for the feedback API
// It has two endpoints: one for creating feedback and one for getting all feedback. Think of it as a middleman between the frontend and the service
// The controller uses the FeedbackService to handle the logic for creating and getting feedback

import { Controller, Post, Get, Body } from '@nestjs/common'; // Import the Controller, Post, Get, and Body decorators from the NestJS common package
import { FeedbackService } from './feedback.service'; // Import the FeedbackService that was created to handle the logic for creating and getting feedback

@Controller('feedback') // The route that the controller will handle. 
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {} // The constructor is used to inject the FeedbackService into the controller

    @Post() // The route that the controller will handle. 
    createFeedback(@Body() body: {message: string}) {
        return this.feedbackService.createFeedback(body.message); // The createFeedback method is used to create a new feedback item and sends the request to the service
    }

    @Get() // The route that the controller will handle. 
    findAll() {
        return this.feedbackService.findAll(); // The findAll method is used to get all feedback items from the database
    }
}