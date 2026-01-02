# FinSight

FinSight is a **frontend-first SaaS-style financial analytics platform** built with React. The project focuses on clean architecture, real-world authentication flows, and scalable dashboard design — not demo-level UI.

---

## Tech Stack

* **Frontend:** React (Vite)
* **Routing:** React Router v6
* **State Management:** React Context API
* **Styling:** CSS (monochrome design system)
* **Persistence (mock):** localStorage
* **Backend:** Planned (Node.js + Express)

---

## Project Structure

```
FinSight/
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── auth/
│       ├── services/
│       ├── styles/
│       ├── utils/
│       ├── App.jsx
│       ├── index.jsx
│       └── routes.jsx
└── backend/   (empty – planned)
```

The structure is intentionally designed to scale into a production SaaS application.

---

## Routing Overview

| Route         | Description                         |
| ------------- | ----------------------------------- |
| `/`           | Dynamic Home (landing or dashboard) |
| `/login`      | Login page                          |
| `/register`   | Registration page                   |
| `/charts`     | Charts dashboard                    |
| `/charts/:id` | Chart detail (prepared)             |
| `/analysis`   | Protected analysis page             |
| `/profile`    | User profile (protected)            |
| `*`           | 404 Not Found                       |

Routing is centralized in `routes.jsx`.

---

## Authentication System

### Auth Context

* Global auth state using `AuthContext`
* Persists user session via `localStorage`
* Exposes:

  * `login(user)`
  * `logout()`

### Protected Routes

* `ProtectedRoute` component guards private pages
* Unauthenticated users are redirected to `/login`

---

## Authentication Pages

### Login

* Email & password inputs
* Client-side validation
* Loading state
* Password visibility toggle
* Redirects on successful login

### Register

* First name & last name
* Email & password inputs
* Validation and loading states
* Redirects to login after success

---

## Mock Authentication Service

* `authService.js` simulates backend behavior
* Uses `localStorage` as a temporary datastore
* Async login & registration
* Backend-ready (easy JWT replacement later)

---

## Home Page (Dynamic)

### Logged-out users

* Product introduction
* Call-to-action buttons

### Logged-in users

* Personalized greeting
* Dashboard-style metrics
* Quick navigation to Charts, Analysis, and Profile

---

## Charts Dashboard

### Layout

* Two-column dashboard layout

  * Left: Sidebar navigation
  * Right: Chart container

### Sidebar

* Market-based navigation
* Route-aware active state
* Collapsible with smooth animations
* Always-visible toggle control

### Chart Container

* Structured container for future chart libraries
* Placeholder ready for real data visualizations

---

## User Profile Page

* View & edit first name and last name
* Email displayed as **read-only** (cannot be changed)
* Profile updates reflect immediately in header
* Uses AuthContext as single source of truth

---

## UI & Design System

* Monochrome, finance-friendly palette
* Clean and minimal design
* Shared auth layout (login/register/profile)
* Consistent spacing, typography, and states

---

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

---

## Current State

* Production-grade frontend foundation
* Real-world auth flows
* Dynamic dashboard-style home
* Charts workspace with animated sidebar
* Editable user profile
* Backend-ready architecture

---

## Deferred / On-Hold Features

* Toast notifications (reverted for stability)
* Change password flow
* Backend authentication (JWT)

---

## Roadmap

* Backend authentication (Node.js + Express + JWT)
* Charts & analytics integration
* Role-based access control
* Mobile responsiveness
* Hardened notification system

---

## Philosophy

FinSight is built like a **real SaaS analytics product**, focusing on architecture, UX, and scalability — not shortcuts.

---

**This project is intentionally structured to grow from frontend-first to full-stack.**
