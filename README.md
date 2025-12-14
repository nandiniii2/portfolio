# Portfolio with Rust Red Color Palette

## Color Palette Update

Your portfolio has been updated with the **Rust Red (#B7513C)** color palette you requested!

### New Color Scheme

**Primary Color: Rust Red**
- `rust-50`: #fdf4f3 (lightest)
- `rust-100`: #fbe8e6
- `rust-200`: #f7d1cd
- `rust-300`: #efada5
- `rust-400`: #e37f71
- `rust-500`: #B7513C (your brand color)
- `rust-600`: #a34433
- `rust-700`: #88382b
- `rust-800`: #6d2d22
- `rust-900`: #5a251c (darkest)

### What Changed

✅ **Hero Section**: Profile ring, status indicator, call-to-action buttons, and social icons now use Rust Red
✅ **Navigation**: Logo background, active link indicator, and CTA button updated to Rust Red
✅ **All Section Headers**: Underline accent changed from blue to Rust Red
✅ **Contact Section**: Email icon, resume download section, and form submit button use Rust Red
✅ **About Section**: Highlight colors and gradient banner updated to Rust Red
✅ **Skills Section**: "All Skills" filter button uses Rust Red
✅ **Projects & Experience**: Primary accent colors changed to Rust Red
✅ **Buttons & Links**: All primary buttons now feature Rust Red gradient
✅ **Interactive Elements**: Hover effects, focus states, and active states use Rust Red
✅ **Scrollbar**: Custom scrollbar gradient uses Rust Red shades
✅ **Text Selection**: Selection highlight color updated to Rust Red

### Category Colors Preserved

To maintain visual hierarchy and clarity, category-specific colors were kept:
- **Purple**: Data Science & ML projects
- **Blue**: Software Engineering projects
- **Green**: Database skills
- **Orange**: Tools & Cloud skills

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Initialize the project**:
```bash
npm install
```

2. **Required dependencies** (if not already in package.json):
```bash
npm install react react-dom
npm install -D vite @vitejs/plugin-react
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
```

3. **Make sure your package.json includes**:
```json
{
  "name": "nandini-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Running the Portfolio

1. **Development mode**:
```bash
npm run dev
```
Then open http://localhost:5173 in your browser

2. **Build for production**:
```bash
npm run build
```
Output will be in the `dist` folder

3. **Preview production build**:
```bash
npm run preview
```

## File Structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   ├── Nandini_Patel_DS.pdf
│   ├── Nandini_Patel_SE.pdf
│   └── profile-photo.jpeg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Navigation.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── ResumeModal.jsx
```

## Deployment Options

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push to GitHub
2. Import project to Vercel
3. Auto-detects Vite settings

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Run: `npm run deploy`

## Customization Tips

### Adjusting Colors
All Rust Red colors are defined in `tailwind.config.js`. To adjust shades, modify the `rust` color object.

### Changing Text
- **Hero tagline**: Edit `Hero.jsx`
- **About section**: Edit `About.jsx`
- **Projects**: Edit the `projects` array in `Projects.jsx`
- **Experience**: Edit the `experiences` array in `Experience.jsx`
- **Skills**: Edit the `skillCategories` array in `Skills.jsx`

### Adding Projects
Add new project objects to the `projects` array in `Projects.jsx`:
```javascript
{
  title: "Project Name",
  category: "software" or "data-science",
  description: "...",
  image: "https://...",
  technologies: ["Tech1", "Tech2"],
  highlights: ["Point 1", "Point 2"],
  github: "https://...",
  metrics: "Key metric"
}
```

## Support

If you need help with:
- Color adjustments
- Adding new sections
- Responsive design tweaks
- Animation modifications

Feel free to ask!

---

**Built with**: React, Vite, Tailwind CSS, and Lucide Icons
**Color Palette**: Rust Red (#B7513C) - Professional, warm, and distinctive
