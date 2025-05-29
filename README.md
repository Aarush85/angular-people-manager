# People Manager Frontend

A single-page web application built with Angular 8 that allows users to list, add, edit, and delete people records.

## Prerequisites

- Node.js v12.22.12 (required for Angular 8 compatibility)
- npm (comes with Node.js)
- Angular CLI v8.3.8

## Installation

1. Install Node.js v12.22.12 using nvm:
```bash
nvm install 12.22.12
nvm use 12.22.12
```

2. Install Angular CLI globally:
```bash
npm install -g @angular/cli@8.3.8
```

3. Navigate to the frontend directory:
```bash
cd frontend
```

4. Install project dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
ng serve
```

2. Open your browser and navigate to:
```
http://localhost:4200
```

## Features
- List all people
- Add new person
- Edit person details
- Delete person
- Responsive UI

## Development Notes

- The application uses Angular 8 with Bootstrap 4 for styling
- Form validation is implemented using Reactive Forms
- HTTP requests are handled using Angular's HttpClient
- The application communicates with a Node.js backend running on port 3000

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── person-list/
│   │   │   ├── person-form/
│   │   │   └── person-delete/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
│   └── ...
├── package.json
└── angular.json
```

## Available Scripts

- `ng serve`: Start development server
- `ng build`: Build the application for production
- `ng test`: Run unit tests
- `ng e2e`: Run end-to-end tests
- `ng lint`: Run linting

## Dependencies

- Angular 8.3.8
- Bootstrap 4.6.0
- jQuery 3.5.1
- Popper.js 1.16.1
