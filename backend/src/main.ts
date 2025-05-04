// This is the main file for the backend
// It is the entry point for the application 
// It creates a NestJS application and listens for incoming requests from the frontend

import { NestFactory } from '@nestjs/core'; // Import NestFactory from the NestJS core package
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS, a feature that allows the frontend to make requests to the backend from a different origin/host/domain
  app.enableCors({
    origin: 'http://localhost:4200', // The frontend URL from our Angular app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // The methods that are allowed to be used by the frontend
  });
  
  await app.listen(process.env.PORT ?? 3000); // The port that the application will listen/receive requests on
}
bootstrap();
