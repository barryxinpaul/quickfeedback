// This is the main file for the backend
// It is the entry point for the application 
// It creates a NestJS application and listens for incoming requests from the frontend

import { NestFactory } from '@nestjs/core'; // Import NestFactory from the NestJS core package
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const frontend_url = process.env.frontend_url;

  // Enable CORS, a feature that allows the frontend to make requests to the backend from a different origin/host/domain
  app.enableCors({
    origin: frontend_url, // The frontend URL from our Angular app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // The methods that are allowed to be used by the frontend
  });
  
  const port = process.env.PORT || 8000;
  await app.listen(port); // The port that the application will listen/receive requests on
  console.log(`Application is running on port ${port}`);
}
bootstrap();
