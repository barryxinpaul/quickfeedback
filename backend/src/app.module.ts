import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedbackModule } from './feedback/feedback.module'; // Import the FeedbackModule that was created to handle the feedback API

@Module({
  imports: [FeedbackModule], // Import is needed to use the feedback API
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
