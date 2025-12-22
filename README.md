# Ritesh Birthal - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Three.js featuring a 3D animated background.

## Tech Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **3D Graphics:** Three.js, React Three Fiber, React Three Drei
- **Styling:** CSS with CSS Variables
- **Linting:** ESLint with TypeScript support

## Features

- Interactive 3D animated background with floating icosahedron
- Glassmorphic UI design with smooth animations
- Fully responsive design (desktop, tablet, mobile)
- Hamburger menu navigation for mobile devices
- Fixed footer with copyright information
- Seven main sections:
  - **About** - Introduction with profile photo and social links
  - **Experience** - Professional work history with timeline
  - **Education** - Academic background and coursework
  - **Projects** - Portfolio of projects with GitHub/live links
  - **Skills** - Categorized technical skills
  - **Achievements** - Awards, certifications, and accomplishments
  - **Contact** - Social media links and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/riteshbirthal/ritesh-birthal.git

# Navigate to project directory
cd ritesh-birthal

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Docker Deployment

```bash
# Build Docker image
docker build -t ritesh-portfolio .

# Run container
docker run -d -p 3000:80 ritesh-portfolio
```

Access at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── About.tsx / About.css
│   ├── Experience.tsx / Experience.css
│   ├── Education.tsx / Education.css
│   ├── Projects.tsx / Projects.css
│   ├── Skills.tsx / Skills.css
│   ├── Achievements.tsx / Achievements.css
│   ├── Contact.tsx / Contact.css
│   └── LoadingScreen.tsx / LoadingScreen.css
├── App.tsx / App.css
├── index.css
└── main.tsx
public/
├── favicon.svg
├── Img1.jpg (profile photo)
└── logo.svg
```

## Customization

1. **Personal Info:** Update content in component files under `src/components/`
2. **Colors:** Modify CSS variables in `src/index.css`
3. **Profile Photo:** Replace `public/Img1.jpg` with your photo
4. **Social Links:** Update URLs in `Contact.tsx` and `About.tsx`
5. **Certificates:** Replace Google Drive folder IDs in `Education.tsx` and `Achievements.tsx`

## License

This project is open source and available under the MIT License.

## Author

**Ritesh Birthal**
- GitHub: [@riteshbirthal](https://github.com/riteshbirthal)
- LinkedIn: [ritesh-birthal](https://linkedin.com/in/ritesh-birthal)
- Email: riteshbirthal@gmail.com
