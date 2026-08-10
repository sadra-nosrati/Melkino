# Melkino — Real Estate Web Application

Melkino is a modern, responsive real estate web application built with **React, Vite, Tailwind CSS v4, Node.js, and Express**.

The project is designed as a full-stack portfolio application with a strong focus on clean UI, responsive layouts, Persian/RTL support, reusable components, and practical frontend–backend integration.

## Features

- Fully responsive design for desktop, tablet, and mobile
- Persian and RTL user interface
- Dark and Light theme support
- Saved theme preference
- Property listings
- Property details pages
- User registration and login
- Favorites management
- User dashboard
- Client-side routing with React Router
- REST API powered by Express
- Local JSON-based demo data
- Modern styling with Tailwind CSS v4

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS v4
- React Router
- JavaScript

### Backend

- Node.js
- Express
- REST API
- JSON-based local data storage

## Getting Started

Clone the repository:

```bash
git clone https://github.com/sadra-nosrati/melkino-real-estate.git
cd melkino-real-estate
```

Install the dependencies:

```bash
npm install
```

Start the development environment:

```bash
npm run dev
```

The development command starts both the **Vite frontend** and **Express backend** together, so you do not need to run them manually in separate terminals.

During development, frontend requests to:

```text
/api
```

are proxied by Vite to the Express API server running on:

```text
http://localhost:5000
```

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The generated frontend files will be available in:

```text
client/dist
```

## Project Structure

```text
melkino-real-estate/
├── client/              # React + Vite frontend
│   ├── public/
│   ├── src/
│   └── ...
│
├── server/              # Node.js + Express backend
│   ├── db.json
│   ├── server.js
│   └── ...
│
├── package.json
├── package-lock.json
└── README.md
```

## Demo Data

The project uses:

```text
server/db.json
```

as a lightweight local data source for development and demonstration purposes.

It contains sample property data and can also store demo users during local development.

> Do not commit real user information, passwords, authentication tokens, API keys, or other sensitive data to a public repository.

## Development Workflow

The root development script runs the frontend and backend workspaces together.

Conceptually, it starts:

```bash
npm run dev --workspace melkino
npm run dev --workspace server
```

If the development process is stopped, both services are terminated together. If either service exits unexpectedly with an error, the other service is also stopped.

This keeps the local development environment synchronized and avoids leaving unnecessary background processes running.

## Purpose

Melkino was created to demonstrate practical frontend and full-stack development concepts, including:

- Component-based React architecture
- Responsive UI development
- RTL interface implementation
- Theme management
- Client-side routing
- Authentication flows
- Dynamic data rendering
- REST API integration
- Frontend and backend workspace management
- Maintainable project organization

## Author

**Sadra Nosrati**

Frontend Developer focused on building modern, responsive, and user-friendly web applications.

GitHub: https://github.com/sadra-nosrati

---

If you find this project useful or interesting, consider giving the repository a star.
