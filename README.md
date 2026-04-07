# Mindful Notes Backend

Backend API for the Mindful Notes application. This service handles user authentication, note management, and database interactions.

## Live API

Base URL:
https://mindful-notes-backend.onrender.com

---

## Overview

This is a Node.js + Express backend that provides RESTful APIs for a full-stack note-taking application. It supports authentication using JSON Web Tokens (JWT) and persists data using MongoDB Atlas.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

---

## Features

- User signup and login (JWT authentication)
- Secure password hashing using bcrypt
- Create, read, update, delete (CRUD) notes
- Tag, pin, and archive notes
- Protected routes using authentication middleware

---

## API Endpoints

### Auth

- `POST /api/auth/signup` → Create a new user  
- `POST /api/auth/login` → Authenticate user and return JWT  

### Notes

- `GET /api/notes` → Get all notes for logged-in user  
- `POST /api/notes` → Create a new note  
- `PUT /api/notes/:id` → Update a note  
- `DELETE /api/notes/:id` → Delete a note  

---

## Data Model

### User
- id
- email
- password (hashed)

### Note
- id
- userId
- title
- content
- tags
- isPinned
- isArchived
- createdAt
- updatedAt

---

## Getting Started (Local Setup)

### Prerequisites

- Node.js
- MongoDB Atlas account

---

### Installation

Clone the repository:

```bash
git clone https://github.com/PriyankaKaramchandani/mindful-notes-backend.git
cd mindful-notes-backend