# YORI Smart Store - Landing Page

A premium, modern, animated landing page for YORI Smart Store built with React.

## Features

- **Premium Design**: Minimalist Japanese-inspired aesthetic with Matcha green accent
- **Smooth Animations**: Purposeful, subtle motion with Framer Motion
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Reduced motion support, proper focus states, semantic HTML
- **Performance Optimized**: 60fps animations, lazy loading ready

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Sticky glass nav
│   ├── Hero.jsx         # Hero section with CTAs
│   ├── HowItWorks.jsx   # 3-step process
│   ├── Benefits.jsx     # Outcomes grid
│   ├── Stats.jsx        # Stats with count-up
│   ├── Technology.jsx   # Tech split panels
│   ├── Locations.jsx    # Use case cards
│   ├── FAQ.jsx          # Accordion FAQ
│   ├── Contact.jsx      # Contact form
│   ├── Footer.jsx       # Footer links
│   └── ScrollProgress.jsx
├── hooks/               # Custom React hooks
│   ├── useInView.js     # Intersection observer
│   ├── useCountUp.js    # Animated counter
│   └── useScrollProgress.js
├── styles/
│   └── global.css       # Design system & base styles
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Design System

### Colors
- **Primary**: `#1b1b21` (Near black)
- **Background**: `#fafaf8` (Warm off-white)
- **Accent**: `#7A9E7E` (Matcha green)
- **Accent Light**: `#9CB89F`
- **Accent Dark**: `#5D7A60`

### Typography
- **Font**: Inter
- **Hero**: 72-84px / 800 weight
- **Section titles**: 40-52px / 700 weight
- **Body**: 16-18px / 400-500 weight

### Animation
- **Micro interactions**: 150-400ms
- **Section entrances**: 600-900ms
- **Easing**: `cubic-bezier(0.44, 0, 0.56, 1)`

## Sections

1. **Navigation** - Sticky glassmorphism nav with smooth scroll
2. **Hero** - Headline, subheadline, CTAs, proof chips
3. **How It Works** - 3 steps: Walk in → Grab → Walk out
4. **Benefits** - Outcomes grid for operators
5. **Stats** - Count-up animation with credibility copy
6. **Technology** - Split panels with privacy/security section
7. **Locations** - Use case cards with metrics
8. **FAQ** - Accordion with 7 common questions
9. **Contact** - Multi-step form with process indicator
10. **Footer** - Links and social

## Customization

### Changing Accent Color

Edit `src/styles/global.css`:

```css
--color-accent: #7A9E7E;        /* Matcha green */
--color-accent: #E8A838;        /* Yuzu gold */
--color-accent: #E8B4B4;        /* Sakura blush */
```

### Adding Real Images

Replace the placeholder divs in each component with actual `<img>` tags:

```jsx
<img 
  src="/path-to-image.jpg" 
  alt="Descriptive alt text"
  style={{ width: '100%', height: 'auto', display: 'block' }}
/>
```

## License

© 2026 YORI. All rights reserved.
