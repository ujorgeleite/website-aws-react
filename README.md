# Jorge Leite - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. This project serves as both a professional portfolio and an AWS architecture laboratory.

## 🚀 Technologies

- **Frontend**: React 18, TypeScript, TailwindCSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library
- **Containerization**: Docker
- **Package Manager**: Yarn

## 📋 Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Clean, minimalist design with glass effects and smooth animations
- **Type Safety**: Full TypeScript implementation
- **Testing**: Unit and UI tests with Vitest and React Testing Library
- **Dockerized**: Ready for containerized deployment
- **Pages**:
  - Home: Landing page with hero section
  - About: Personal information and approach
  - Experience: Professional work history
  - Skills: Technical competencies and certifications
  - Contact: Contact form and social links
  - Blog: Coming soon section
  - Projects: Coming soon section

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Run linting
yarn lint
```

## 🐳 Docker

### Build and run with Docker

```bash
# Build the Docker image
docker build -t jorge-leite-portfolio .

# Run the container
docker run -p 3000:3000 jorge-leite-portfolio
```

### Using Docker Compose

```bash
# Start the application
docker-compose up

# Build and start
docker-compose up --build
```

## 🏗️ Architecture

This portfolio is designed to serve as an AWS architecture laboratory, showcasing:

- Modern React application architecture
- TypeScript for type safety
- TailwindCSS for utility-first styling
- Component-based architecture
- Docker containerization
- Testing best practices

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── __tests__/      # Component tests
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Blog.tsx
│   ├── Projects.tsx
│   └── __tests__/      # Page tests
├── test/               # Test setup
├── App.tsx            # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Design System

- **Color Palette**: Neutral tones with primary accent colors
- **Typography**: Inter font family
- **Components**: Glass effect cards with rounded corners
- **Icons**: Transparent background with rounded borders
- **Animations**: Smooth fade-in and slide-up effects

## 📧 Contact

- **GitHub**: [@ujorgeleite](https://github.com/ujorgeleite)
- **LinkedIn**: [linkedin.com/in/ujorgeleite](https://www.linkedin.com/in/ujorgeleite)
- **Email**: contact@jorgeleite.dev

## 📄 License

This project is private and proprietary to Jorge Leite.
