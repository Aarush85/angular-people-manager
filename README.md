# People Manager Frontend

A single-page web application built with Angular 8 that allows users to list, add, edit, and delete people records.

## 🚀 Features

- List all people
- Add new person
- Edit person details
- Delete person
- Responsive UI

## 📋 Prerequisites

- Node.js v12.22.12 (required for Angular 8 compatibility)
- npm (comes with Node.js)
- Angular CLI v8.3.8

## 🛠️ Installation

1. **Install Node.js v12.22.12 using nvm:**
   ```bash
   nvm install 12.22.12
   nvm use 12.22.12
   ```

2. **Install Angular CLI globally:**
   ```bash
   npm install -g @angular/cli@8.3.8
   ```

3. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

4. **Install project dependencies:**
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

1. **Start the development server:**
   ```bash
   ng serve
   ```

2. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

## ⚙️ Configuration

### API URL Configuration

The application is configured to connect to the backend API at `http://localhost:3000` by default. If your backend is running on a different port, update the API URL in:

```typescript
// src/app/services/person.service.ts
private apiUrl = 'http://localhost:3000/api/person';  // Update port number if needed
```

Make sure the port number matches the one specified in your backend's `.env` file.

## 📁 Project Structure

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

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build the application for production |
| `ng test` | Run unit tests |
| `ng e2e` | Run end-to-end tests |
| `ng lint` | Run linting |

## 🔧 Technology Stack

- **Framework:** Angular 8.3.8
- **Styling:** Bootstrap 4.6.0
- **Form Handling:** Reactive Forms
- **HTTP Client:** Angular HttpClient
- **Additional Libraries:** jQuery 3.5.1, Popper.js 1.16.1

## 🏗️ Development Notes

- The application uses Angular 8 with Bootstrap 4 for styling
- Form validation is implemented using Reactive Forms
- HTTP requests are handled using Angular's HttpClient
- The application communicates with a Node.js backend running on port 3000

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](../../issues) on GitHub.
