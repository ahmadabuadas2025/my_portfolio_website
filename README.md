# Portfolio Website - Ahmad Abu Adas

A modern, fully responsive portfolio website built with React, TailwindCSS, and Framer Motion. Features a futuristic design with smooth animations, dark/light mode toggle, and glassmorphism effects.

## 🚀 Features

- **Modern UI/UX**: Futuristic design with glassmorphism and neon-tech styling
- **Smooth Animations**: Framer Motion animations throughout
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Interactive Sections**:
  - Hero section with animated background
  - Career timeline (vertical)
  - Education timeline
  - Projects showcase with cards
  - Skills with progress bars and icon grid
  - Contact form
  - Download resume button
- **Technology Icons**: React Icons for all tech stack visualization
- **Easy to Edit**: All content in `src/data/resumeData.js`

## 📁 Project Structure

```
portfolio_website/
├── public/
│   ├── images/          # Profile images and assets
│   └── Ahmad_data_engineer_2025.pdf
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx
│   │   ├── CareerTimeline.jsx
│   │   ├── Contact.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx
│   ├── data/            # Resume data (easy to edit)
│   │   └── resumeData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update your resume data:**
   - Open `src/data/resumeData.js`
   - Replace all placeholder content with your actual information
   - Add your profile image to `public/images/profile.jpg`

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Editing Your Content

All your resume information is stored in `src/data/resumeData.js`. Simply edit this file to update:

- Personal information (name, title, email, etc.)
- Experience/Work history
- Education
- Skills and technologies
- Projects
- Certifications
- Achievements
- Social media links

### Adding Your Profile Image

1. Add your profile photo to `public/images/profile.jpg`
2. The image will automatically be used in the Hero section
3. Recommended size: 400x400px or larger (square format)

### Updating Resume PDF

1. Replace `public/Ahmad_data_engineer_2025.pdf` with your resume PDF
2. Update the filename in `src/data/resumeData.js` if needed

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### Animations

All animations use Framer Motion. You can customize them in each component file.

### Styling

- Global styles: `src/index.css`
- Component styles: Each component uses Tailwind classes
- Custom utilities: Defined in `src/index.css` (glass, gradient-text, etc.)

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Or connect your GitHub repo

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/portfolio_website/',
     // ... rest of config
   })
   ```
4. Run: `npm run deploy`

## 📦 Dependencies

- **React 18**: UI library
- **Framer Motion**: Animation library
- **TailwindCSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **Vite**: Build tool and dev server

## 🎯 Features Breakdown

### Hero Section
- Animated background with floating elements
- Profile photo with glassmorphism effect
- Gradient text animations
- Download resume button
- Smooth scroll indicator

### Career Timeline
- Vertical timeline with alternating sides
- Animated cards on scroll
- Technology tags
- Achievement highlights

### Education Timeline
- Similar to career timeline
- GPA and achievement display
- Institution information

### Projects
- Grid layout with hover effects
- Image overlays with links
- Technology tags
- Highlight achievements

### Skills
- Progress bars with animations
- Icon grid
- Categorized by type
- Level indicators

### Contact
- Contact form
- Social media links
- Contact information cards
- Form validation

## 🔧 Troubleshooting

### Images not loading
- Ensure images are in `public/images/` folder
- Check file paths in `resumeData.js`
- Verify image file extensions

### Build errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (v16+)
- Verify all dependencies are installed

### Styling issues
- Clear browser cache
- Check Tailwind config
- Verify CSS imports in `main.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ahmad Abu Adas**
- Email: ahmadabuadas2013@gmail.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using React + TailwindCSS + Framer Motion

