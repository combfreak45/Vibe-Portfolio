# Vibe Portfolio

A modern, responsive web portfolio for a full-stack developer, built with React and Vite.

## Features

- **Hero Section**: Impactful introduction with call-to-action.
- **About Section**: Bio and skills grid.
- **Projects Section**: Showcase of work with hover effects.
- **Contact Section**: form and contact info.
- **Responsive Design**: Looks great on all devices.
- **Dark Mode**: Built-in dark theme support via CSS variables.

## Tech Stack

- **React**: UI library
- **Vite**: Build tool
- **Vanilla CSS**: Styling (using CSS variables for theming)
- **Lucide React**: Icons

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```
   *Note: If you encounter network issues, ensure your internet connection or proxy settings are correct.*

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, Button, etc.)
- `src/sections`: Page sections (Hero, About, Projects, Contact)
- `src/styles`: CSS files organized by component/section
- `src/data`: Static data (e.g., projects list)

## Customization

- **Colors**: Edit `src/styles/variables.css` to change the color scheme.
- **Projects**: Update `src/data/projects.js` to add your own projects.
- **Content**: Modify text in the respective section components in `src/sections/`.
