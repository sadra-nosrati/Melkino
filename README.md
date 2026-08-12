# Melkino

Melkino is a responsive Persian real estate web application built primarily as a **Front-End project** using **React, Vite, Tailwind CSS v4, and React Router**.

The project focuses on responsive UI development, Persian RTL implementation, component-based architecture, **Dark and Light modes**, property browsing, and user-facing interactions.

A lightweight **Node.js and Express backend** is included to make the project dynamic and support features such as authentication, property data, favorites, and user-specific dashboard interactions.

<p align="center">
  <a href="https://melkino.sadranosrati.ir/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://img.shields.io/badge/VIEW%20LIVE%20WEBSITE-FF6A00?style=for-the-badge&logo=googlechrome&logoColor=white"
      alt="View Melkino Live Website"
      height="40"
    />
  </a>
</p>

---

## Project Focus

> **Melkino is primarily a Front-End portfolio project.**
>
> The backend is intentionally lightweight and was added to make the application dynamic instead of relying entirely on static mock data.
>
> The main focus of the project is the **React interface, responsive implementation, Persian RTL experience, reusable component structure, Dark and Light mode system, and overall front-end user experience**.

---

## Overview

Melkino provides a responsive property browsing experience designed primarily for Persian users.

The application includes property listings, property detail pages, authentication screens, favorites, theme preferences, and a dedicated user dashboard.

The frontend communicates with a lightweight Express REST API to provide dynamic data and user-specific interactions while keeping the main development focus on the user interface and frontend architecture.

---

## Features

- Responsive design for desktop, tablet, and mobile
- Persian and RTL interface
- Dark and Light modes
- Persistent theme preference
- Property listings
- Property detail pages
- User registration and login
- Favorites management
- User dashboard
- Saved property interactions
- Client-side routing with React Router
- Dynamic property data
- REST API integration
- JSON-based demo data storage

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS v4
- React Router
- JavaScript

### Supporting Backend

- Node.js
- Express
- REST API
- JSON-based local data storage

> The backend is used as a supporting layer for dynamic functionality and is not the primary focus of the project.

---

## Preview

### Home Page

![Melkino Home Page](client/public/screenshots/home-1.webp)

![Melkino Home Page](client/public/screenshots/home-2.webp)

### Property Pages

![Melkino Property Page](client/public/screenshots/product-1.webp)

![Melkino Property Page](client/public/screenshots/product-2.webp)

### Login

![Melkino Login](client/public/screenshots/login.webp)

### User Dashboard

![Melkino Dashboard](client/public/screenshots/dashboard-1.webp)

![Melkino Dashboard](client/public/screenshots/dashboard-2.webp)

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/sadra-nosrati/Melkino.git
```

Navigate to the project directory:

```bash
cd Melkino
```

Install all required dependencies:

```bash
npm install
```

Start the local development environment:

```bash
npm run dev
```

The root development command starts both the **Vite frontend** and the lightweight **Express backend** automatically, so there is no need to run them separately.

During development, frontend requests to:

```text
/api
```

are proxied to the local Express API server.

---

## Production Build

Create the production frontend build:

```bash
npm run build
```

The generated frontend files are available in:

```text
client/dist
```

---

## Demo Data

Melkino uses:

```text
server/db.json
```

as a lightweight local data source for development and demonstration.

It contains property data and can also store temporary demo information required by dynamic features such as authentication and favorites.

This approach keeps the backend simple while allowing the frontend to demonstrate realistic interactions.

> Do not store or commit real passwords, authentication tokens, API keys, or other sensitive user information in this file.

---

## Project Structure

```text
Melkino/
├── client/
│   ├── public/
│   ├── src/
│   └── dist/
│
├── server/
│   ├── db.json
│   └── server.js
│
├── scripts/
│   └── dev.cjs
│
├── package.json
├── package-lock.json
└── README.md
```

The project uses **npm workspaces** to manage the frontend and backend from the root directory.

Running:

```bash
npm install
```

installs the required dependencies.

Running:

```bash
npm run dev
```

starts the complete local development environment.

---

## Front-End Implementation

The main areas explored in Melkino include:

- Component-based React architecture
- Responsive interface development
- Persian RTL layout implementation
- Dark and Light mode implementation
- Persistent theme preference
- Client-side routing
- Authentication interfaces
- Property listing and detail experiences
- User dashboard interface
- Favorites and user-specific interactions
- API consumption from React
- Reusable UI components
- Responsive behavior across different screen sizes
- Maintainable project organization

---

## Backend Role

The Node.js and Express layer exists mainly to support the frontend demonstration and keep the application dynamic.

It provides the functionality required for:

- Loading property data dynamically
- User registration and login
- Authentication state
- Favorites
- User-specific data
- REST API communication

The project is **not intended to demonstrate a production-grade backend architecture**.

For a production system, areas such as database architecture, authentication security, data validation, access control, logging, and persistent storage would require a more complete backend implementation.

---

## Live Website

<p align="center">
  <a href="https://melkino.sadranosrati.ir/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://img.shields.io/badge/OPEN%20MELKINO%20LIVE-FF6A00?style=for-the-badge&logo=googlechrome&logoColor=white"
      alt="Open Melkino Live Website"
      height="40"
    />
  </a>
</p>

---

## Author

**Sadra Nosrati**  
Front-End & WordPress Developer

GitHub: `github.com/sadra-nosrati`

---

If you find the project useful, consider starring the repository.
