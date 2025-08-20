# Real-Time Chat Application
![Image](https://github.com/user-attachments/assets/7c383b3d-1d25-4eb3-9b46-3e7ba28c34e4)
A full-stack real-time chat application built with React, Node.js, Socket.IO, and MongoDB.


## Features

- 🔐 User authentication (Sign up, Login, Logout)
- 👤 User profiles with avatar support
- 💬 Real-time messaging
- 📷 Image sharing in chats
- ⌨️ Typing indicators
- 🟢 Online/Offline status
- 🌓 Multiple themes with DaisyUI
- 🎨 Responsive design
- 🔄 Real-time message updates

## Tech Stack

### Frontend
- React
- Tailwind CSS
- DaisyUI
- Zustand (State Management)
- Socket.IO Client
- Axios
- React Router Dom

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JSON Web Tokens (JWT)
- Cloudinary (Image Upload)
- Bcrypt.js (Password Hashing)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary Account

### Environment Variables

#### Backend (.env)
```env
MONGODB_URI=your_mongodb_uri
PORT=5001
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd fullstack-chat-app
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```

2. Start the frontend development server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5001

## Features in Detail

### Authentication
- Secure signup and login with JWT
- Protected routes
- Password hashing

### Real-time Communication
- Instant message delivery
- Typing indicators
- Online/Offline status updates
- Image sharing

### User Interface
- Multiple theme options
- Responsive design for all devices
- Loading states and skeletons
- User-friendly error handling
- Toast notifications

### Profile Management
- Profile picture upload
- User status indicators
- Account information display

## API Endpoints

### Auth Routes
- POST `/api/auth/signup` - Create new user account
- POST `/api/auth/login` - User login
- POST `/api/auth/logout` - User logout
- PUT `/api/auth/update-profile` - Update user profile
- GET `/api/auth/check` - Check authentication status

### Message Routes
- GET `/api/messages/users` - Get all users for sidebar
- GET `/api/messages/:id` - Get messages with specific user
- POST `/api/messages/send/:id` - Send message to user

## Socket Events

- `connection` - User connects to socket server
- `typing` - User starts typing
- `stop-typing` - User stops typing
- `newMessage` - New message received
- `getOnlineUsers` - Get list of online users

## Contributing

Feel free to contribute to this project. Create a fork, make your changes, and submit a pull request.
