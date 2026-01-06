# AFC Ali Nasi Kandar - Premium Restaurant Website

A fully optimized, mobile-responsive, SEO-friendly website for AFC Ali Nasi Kandar, featuring authentic Malaysian cuisine.

## 🎯 Key Features

### ✅ Performance Optimization

- **Lazy Loading**: All images load on-demand for faster initial page load
- **Code Splitting**: Vendor dependencies separated for optimal caching
- **Minification**: JavaScript and CSS minified and compressed
- **Service Worker**: Offline support with intelligent caching strategies
- **Responsive Images**: Images include width/height attributes to prevent layout shifts
- **Browser Caching**: Immutable assets cached for 1 year

### ✅ SEO & Meta Tags

- **Meta Tags**: Comprehensive description, keywords, and OG tags
- **Social Sharing**: Open Graph and Twitter Card support
- **Structured Hierarchy**: Proper H1-H6 heading structure
- **Alt Attributes**: Meaningful alt text for all images
- **Robots.txt**: Search engine crawling optimization
- **Sitemap.xml**: Complete URL structure for indexing

### ✅ Mobile Responsive

- **Mobile-First Design**: Optimized for all screen sizes
- **Responsive Navbar**: Logo and padding adjust for mobile
- **Touch-Friendly**: Large buttons and tap targets
- **Mobile Menu**: Smooth hamburger navigation
- **Performance**: Optimized images for mobile networks

### ✅ Security Features

- **Service Worker**: Secure offline functionality
- **Security Headers**: Protection against XSS, clickjacking, etc.
- **HTTPS Ready**: Compatible with SSL/TLS encryption
- **Content Security**: Configured for modern web standards

## 📦 Project Structure

```
restaurant/
├── public/
│   ├── service-worker.js       # Offline support & caching
│   ├── robots.txt              # SEO: Search engine crawling
│   ├── sitemap.xml             # SEO: URL indexing
│   ├── .htaccess               # Server configuration
│   ├── logo1.png               # Logo image
│   ├── chef.png                # Chef image
│   ├── food.jpeg               # Food background
│   ├── landing-min.png         # Hero image
│   └── image[1-4].jpg          # Gallery images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile optimization
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── MenuSection.jsx     # Menu showcase with pagination
│   │   ├── About.jsx           # About section with gallery
│   │   ├── Contact.jsx         # Contact & location info
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point with SW registration
│   ├── index.css               # Tailwind imports
│   └── App.css                 # Component styles
├── index.html                  # SEO-optimized HTML
├── vite.config.js              # Build optimization config
├── netlify.toml                # Deployment configuration
├── OPTIMIZATION_GUIDE.md       # Detailed optimization docs
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd restaurant

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Performance Metrics

### Expected Lighthouse Scores

- **Performance**: 85+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Core Web Vitals

- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## 🔍 SEO Improvements Implemented

1. **Meta Tags**

   - Page title: "AFC Ali Nasi Kandar - Authentic Malaysian Cuisine"
   - Meta description with target keywords
   - OG tags for social media
   - Twitter Card support

2. **Content Structure**

   - Single H1 (Hero heading)
   - H2 for major sections
   - H3 for features and subsections
   - Semantic HTML throughout

3. **Image Optimization**

   - Lazy loading on all images
   - Width/height attributes for CLS prevention
   - Descriptive alt text for accessibility
   - Optimized file formats and sizes

4. **Technical SEO**
   - robots.txt with sitemap reference
   - Complete XML sitemap
   - Canonical URLs
   - Mobile-first responsive design
   - Fast page load times

## 📱 Responsive Design

| Device  | Breakpoint     | Features                                       |
| ------- | -------------- | ---------------------------------------------- |
| Mobile  | < 640px        | Single column, responsive logo, hamburger menu |
| Tablet  | 640px - 1024px | Two columns, balanced layout                   |
| Desktop | > 1024px       | Three columns, full features                   |

## 🔐 Security & Performance Headers

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Cache-Control: public, max-age=31536000` (immutable assets)

## 🌐 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. netlify.toml handles caching automatically

### Vercel

1. Import project to Vercel
2. Framework: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist/` folder to server
3. Configure `.htaccess` for URL rewriting
4. Enable gzip compression on server

## 🛠️ Development

### Available Scripts

```bash
# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Tech Stack

- **React 19**: UI framework
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons

## 📈 Performance Optimization Features

1. **Code Splitting**

   - Vendor chunks separated
   - Framer motion isolated
   - Lucide icons isolated

2. **Minification**

   - JavaScript minified with Terser
   - CSS minified with Lightning CSS
   - HTML minified on build

3. **Image Handling**

   - Lazy loading by default
   - Responsive sizing
   - Format optimization ready

4. **Browser Caching**
   - Service Worker for offline
   - Cache-first for assets
   - Network-first for HTML

## 🎨 Customization

### Colors

Main color scheme is defined in Tailwind:

- Primary Gold: `#bfa14a`
- Dark Green: `#13331b`
- Light Cream: `#f0e6c3`

### Fonts

- **Heading**: Playfair Display (serif)
- **Body**: Outfit (sans-serif)
- **Special**: DM Sans (sans-serif)

### Content

Update restaurant info in:

- `index.html` - Meta tags, title
- Components - Phone numbers, addresses, hours
- `sitemap.xml` - Location URLs

## 📱 Mobile Optimization

The site includes:

- Responsive navbar with mobile logo scaling
- Touch-friendly buttons and spacing
- Mobile menu with smooth transitions
- Optimized images for mobile networks
- Mobile-first CSS approach
- Fast load times on 4G/5G

## 🔗 Internal Linking

Navigation structure:

- Home → Menu, About, Contact
- Menu → Filter categories, pagination
- About → Features, gallery
- Contact → Location, hours, phone

## 📞 Support & Maintenance

- Monitor Lighthouse scores monthly
- Update dependencies quarterly
- Review analytics in Google Search Console
- Monitor Core Web Vitals in PageSpeed Insights
- Update prices in Menu section as needed
- Maintain robots.txt and sitemap.xml

## 📄 License

© 2026 AFC Ali Nasi Kandar. All rights reserved.

---

**Last Updated**: January 6, 2026  
**Version**: 1.0 - Fully Optimized  
**Status**: ✅ Production Ready
