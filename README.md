# Recipe Collection

A full-stack recipe discovery app built with React Router, React, TypeScript, and Tailwind CSS. Browse randomly selected meals, search TheMealDB, view recipe details, and sign in to save recipes to a personal collection.

## Features

- Random recipe feed powered by [TheMealDB](https://www.themealdb.com/)
- Recipe search and detailed ingredient and instruction views
- Supabase email authentication
- Saved recipes backed by Supabase Storage and database tables
- Server-side rendering and client-side navigation with React Router
- Responsive styling with Tailwind CSS
- Local DotGothic16 typography

## Routes

| Path | Description |
| --- | --- |
| `/` | Browse randomly selected recipes |
| `/search` | Search recipes by name |
| `/details?q=<id>` | View a recipe's details |
| `/login` | Sign in or create an account |
| `/account` | View and manage saved recipes |

## Requirements

- Node.js 20 or newer
- npm
- A Supabase project for authentication and saved recipes

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

The publishable key is intended for browser use. Do not put a Supabase service-role key in this file or expose it to the client.

Start the development server:

```bash
npm run dev
```

The app is available at `http://localhost:5173`.

## Scripts

```bash
npm run dev        # Start the development server
npm run build      # Create a production build
npm run start      # Serve the production build
npm run typecheck  # Generate route types and run TypeScript checks
npm run lint       # Run oxlint
npm run lint:fix   # Fix supported lint issues
```

## Supabase Setup

The app expects:

- Email authentication to be enabled in Supabase Auth
- A `saved_recipes` table used by the account features
- A Supabase Storage bucket used for saved recipe images

Configure Row Level Security so users can only read, insert, and delete their own saved recipes. Keep the database schema and storage policies aligned with the authenticated user's ID.

## Production Build

Build and run the application locally:

```bash
npm run build
npm run start
```

The build output is written to `build/client` and `build/server`.

## Docker

Build and run the production container:

```bash
docker build -t recipe-collection .
docker run --env-file .env -p 3000:3000 recipe-collection
```

The app will be available at `http://localhost:3000`.

## Deployment

This project can be deployed to Vercel or any Node.js host that supports the React Router production server. Set the two `VITE_` environment variables in the deployment platform before building.
