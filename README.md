# Moody Player 🎵😃😢😡

A full-stack project for learning how to integrate a backend with a frontend, featuring a "Moody Player" that detects your mood using your camera and recommends songs based on your facial expressions.

---

## Project Overview

**Moody Player** is a learning project that demonstrates:
- How to connect a React frontend with an Express backend
- Using face-api.js to detect user mood via webcam
- Storing and fetching songs from a backend based on detected mood

---

## Features

- **Face Detection:** Uses your webcam to analyze your facial expression.
- **Mood Recognition:** Detects moods like happy, sad, angry, etc.
- **Song Recommendation:** Fetches and displays songs matching your current mood.
- **Full Stack Integration:** Shows how frontend and backend communicate in a real-world app.

---

## Folder Structure

```
Moody Player/
├── Backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── service/
│   └── ... (Express app files)
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── FaceDetection.jsx
    │   │   └── MoodSongs.jsx
    │   └── ... (React app files)
    └── public/
        └── models/ (face-api.js models)
```

---

## How It Works

1. **User opens the app** and allows camera access.
2. **FaceDetection component** uses face-api.js to analyze the user's face.
3. **Mood is detected** (e.g., happy, sad, angry).
4. **Frontend sends a request** to the backend with the detected mood.
5. **Backend responds** with a list of songs matching that mood.
6. **Songs are displayed** for the user to play.

---

## Getting Started

### Backend

1. `cd Backend`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Make sure MongoDB is running and accessible.

### Frontend

1. `cd Frontend`
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Requirements

- Node.js & npm
- MongoDB (for storing songs)
- Webcam (for face detection)

---

## Learning Goals

- Practice integrating React with Express
- Learn about REST APIs and HTTP requests
- Understand how to use face-api.js for real-time face and mood detection
- Experience full-stack development with real-world features

---

## Disclaimer

This project is for **learning purposes only**. The mood detection is basic and may not always be accurate. Please use in a well-lit environment for best results.

---

## Credits

- [face-api.js](https://github.com/justadudewhohacks/face-api.js)
- [React](https://react.dev/)
- [Express](https://expressjs.com/)

---
