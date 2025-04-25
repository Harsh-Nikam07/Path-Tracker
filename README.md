# 📍 Path Tracker

A mobile application for tracking and recording your paths/routes with real-time location tracking. Perfect for runners, hikers, cyclists, or anyone who wants to keep a record of their journeys.

---

## 🚀 Project Description

**Path Tracker** is a full-stack mobile application that allows users to:

- Sign up and sign in with secure authentication
- Track their location in real-time with visual feedback on a map
- Record tracks/routes with custom names
- Save tracks for future reference
- View a list of all saved tracks
- View detailed information about each track, including start/end points and route visualization

The app uses context-based state management for handling authentication, location tracking, and track data — enabling a seamless and responsive user experience.

---

## 🛠 Tech Stack

### 🔹 Frontend
- **React Native** – Cross-platform mobile framework
- **Expo** – React Native development platform
- **React Navigation** – Navigation management (Bottom Tabs + Stack Navigator)
- **React Native Maps** – Map integration and visualization
- **Expo Location** – Access to device GPS
- **React Native Elements** – UI components
- **Context API** – State management
- **Axios** – API requests
- **AsyncStorage** – Local data persistence

### 🔹 Backend
- **Node.js** – JavaScript runtime
- **Express** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB modeling
- **JWT** – Authentication with JSON Web Tokens
- **bcrypt** – Password hashing
- **body-parser** – Request parsing

---

## 🔐 Features

- **User Authentication** – Sign up/in with JWT token-based flow and error handling
- **Password Security** – Hashed passwords using bcrypt
- **Real-time Tracking** – Live location tracking with map visualization
- **Track Recording** – Create and save tracks with custom names
- **Track Listing** – View all previously saved tracks
- **Track Details** – Detailed route view with map rendering
- **Account Management** – Basic user info and sign-out flow
- **API Security** – Protected routes via auth middleware

---

## ⚙️ Project Setup & Installation

### 📋 Prerequisites
- Node.js (v14 or newer)
- npm or yarn
- MongoDB (Atlas or local)
- Expo CLI
- iOS Simulator / Android Emulator / Expo Go app

---

### 🔧 Backend Setup

```bash
git clone https://github.com/yourusername/path-tracker.git
cd path-tracker/server

# Install dependencies
npm install

# Configure MongoDB connection
# Edit 'index.mjs' and update `mongoURI` with your MongoDB URI

# Start the server
node index.mjs
