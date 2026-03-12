# CareConnect - Healthcare Website

CareConnect is a modern, responsive healthcare platform that allows users to find doctors, book appointments, and manage their health profiles. The platform aims to bridge the gap between patients and healthcare providers by offering seamless scheduling and user-friendly features.

## 🚀 Features

- **User Authentication**: Secure user registration and login functionality using JWT and bcrypt.
- **Doctor Directory**: Browse a comprehensive list of specialist doctors, filterable by department.
- **Appointment Booking**: Book appointments with specific doctors by selecting preferred dates and time slots.
- **User Profile Management**: Logged-in users can view and update their profile details.
- **Responsive Design**: A premium, visually appealing user interface built with Tailwind CSS v4, optimized for desktop and mobile devices.
- **Interactive UI**: Includes dynamic notifications (using React Toastify) and intuitive forms with modern date pickers.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM (v7)
- **State Management**: React Context API
- **Key Libraries**: `react-datepicker`, `react-toastify`

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL (pg wrapper)
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs
- **Environment Management**: dotenv
- **Middleware**: CORS

## ⚙️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- Node.js installed on your machine.
- PostgreSQL installed and running.

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd "Mini Project"
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and configure your environment variables.
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add your PostgreSQL credentials and JWT secret:
```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=careconnect
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies.
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The frontend application should now be running at `http://localhost:5173/`, and the backend server at `http://localhost:5000/`.

## 📂 Project Structure

- `frontend/`: Contains the React application, structured into components, pages, context, and assets.
- `backend/`: Contains the Express server, controllers, routes, and database configuration.

## 🤝 Contributing

Feel free to open issues or submit pull requests with improvements.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
