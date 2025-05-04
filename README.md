# QuickFeedback
A simple app where users can submit anonymous feedback or questions during an event or meeting. Admins can view and manage submissions in real-time. This project was created when preparing for an internship to get practical experience and is built using the following tech stack: 
Frontend: Angular (TypeScript) + TailwindCSS
Backend: NestJS
Database: PostgreSQL
Hosting: Firebase Hosting + Cloud Functions

# Core Features:

### User
* Submit feedback anonymously
* View a confirmation message after submission

## Admin (Simple password-protected view)
* View list of feedback messages
* Mark as "addressed" or deleted

# Project Structure

## Frontend (Angular + Tailwind)
* /submit: User feedback form (textarea + submit)
* /admin: List all messages (only accessible via hardcoded password for demo)
* Use Angular services to call backend (NestJS) endpoints

## Backend (NestJS)
* POST /feeedback: Save feedback message
* GET /feedback: Retrive all feedback
* PUT /feedback/:id: Mark as addressed
* DELETE /feedback/:id: Delete message

