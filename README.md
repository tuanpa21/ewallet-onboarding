# E-Wallet Onboarding

This project is an E-Wallet Onboarding application built with React, MUI, React Hook Form, Zustand, and Yup. It follows a multi-step onboarding process for users to register with the E-Wallet platform.

## Prerequisites

- Node.js (version >= 12.x.x)
- pnpm (version >= 6.x.x)

If you don't have pnpm installed, you can install it globally using npm:

```bash
npm install -g pnpm
```

## High-level Architecture

The project uses the Nx monorepo workspace, which allows for better code organization, reusability, and extensibility. The application is built with React and utilizes Vite as the build tool and development server, providing faster build times and HMR (Hot Module Replacement) capabilities.

For testing, the project uses Vitest, a testing framework specifically designed for Vite applications, providing a modern and efficient testing environment.

## Getting Started

Getting Started
First, clone the repository and navigate to the project folder:

```bash
git clone https://github.com/yourusername/ewallet-onboarding.git
cd ewallet-onboarding
```

Install the project dependencies:

```bash
pnpm install
```

To start the development server, run:

```bash
pnpm start
```

The application will be available at http://localhost:4200.

## Testing

To run the unit tests:

```bash
pnpm test
```

## Technologies Used

- Nx Monorepo
- React with Vite and Vitest for Unit Test
- MUI (Material-UI)
- React Hook Form
- Zustand
- Yup

## Features

- Multi-step onboarding process
- Form validation with Yup
- State management with Zustand
- Responsive design using MUI components
  ![Demo](assets/CleanShot%202023-04-23%20at%2018.25.21.gif)
