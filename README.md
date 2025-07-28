live demo : https://invo-zone.web.app/

// InvoZone Homepage – Modern, animated, and responsive React front end for a tech company landing page.

# invozone

A modern, visually-rich React web application inspired by invozone.com. Features a glassmorphic navigation bar, animated hero section with video background, interactive engagement models, and a fully responsive layout. Built for performance, accessibility, and a premium user experience.

---

## Features

- **Glassmorphism UI:** Transparent, blurred navbar with seamless integration over video backgrounds.
- **Animated Hero Section:** Video background, minimal and elegant typography, animated SVG wave divider, and auto-scroll logic.
- **Responsive Design:** Fully mobile-friendly with adaptive layouts and scalable components.
- **Interactive Engagement Models:** Animated orbit avatars, tabbed navigation with animated underline, and spring-based transitions.
- **Dynamic Logo & Branding:** Custom logo integration for both the site and browser tab (favicon), with consistent branding across meta tags.
- **Accessible & SEO-Ready:** Semantic HTML, descriptive meta tags, and ARIA-friendly navigation.
- **Reusable UI Components:** Modular Card, Button, and NavigationMenu components, styled with Tailwind CSS and Framer Motion.
- **Social Media Optimization:** Open Graph and Twitter meta tags for rich link previews.
- **Performance Optimizations:** Lazy-loaded assets, optimized SVGs, and minimal render-blocking resources.

---

## Tech Stack

- **Frontend:** React (with TypeScript)
- **Styling:** Tailwind CSS, custom CSS, glassmorphism effects
- **Animation:** Framer Motion, React Spring
- **Icons:** Lucide-react
- **Assets:** Video backgrounds, SVGs, and custom PNG logos
- **Meta/SEO:** Open Graph, Twitter Cards, robots.txt

---

## File/Folder Structure

```
/invo-spark
  /public
    favicon.svg, favicon.ico, robots.txt
  /src
    /components
      Hero.tsx           # Hero section with video, animation, and minimal typography
      Header.tsx         # Glassy navbar with custom logo and navigation
      EngagementModels.tsx # Animated engagement models with orbit avatars
      ClientLogos.tsx    # Responsive client logo grid
      ...                # Other modular UI components
    /ui
      button.tsx, card.tsx, navigation-menu.tsx, ...
  index.html             # Meta tags, favicon, and root div
  ...
```

---

## Key Implementation Details

- **Navbar:** Uses a fixed, glassy header with backdrop blur and no visible borders. The logo is loaded from a remote PNG, and the favicon/meta images are set to match.
- **Hero Section:** Features a left-aligned, minimal heading and subheading, with a call-to-action button. The background is a looping video with a dark overlay for contrast.
- **Engagement Models:** Custom animated avatars orbit a central PM avatar, with tabbed content and animated underline transitions.
- **Client Logos & Stats:** Redesigned to match invozone.com, with a two-row grid and blue-accented stats.
- **Responsiveness:** All sections use Tailwind’s responsive classes for seamless scaling across devices.
- **Meta & SEO:** Title, description, author, and social meta tags are all set for optimal discoverability and sharing.

---

## Getting Started

1. **Install dependencies:**  
   `npm install` or `yarn install`
2. **Start the development server:**  
   `npm run dev` or `yarn dev`
3. **Open in browser:**  
   Visit `http://localhost:3000` (or the port shown in your terminal)

---

## Customization

- **Logo:** Change the logo by updating the image URL in `Header.tsx` and the favicon/meta tags in `index.html`.
- **Brand Colors:** Adjust Tailwind config or component classes for custom color schemes.
- **Content:** Update text, images, and video backgrounds in the respective components.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
