# Eastern Workforce Solutions Establishment — Official Website

A lightweight, high-performance, single-page corporate website for **Eastern Workforce Solutions Establishment** (Saudi Arabia), meticulously designed to reproduce the exact visual language, layout measurements, color variables, typography, and component styling of the original reference design while dedicating all content and branding to workforce solutions, technical staffing, and human capital services.

---

## Project Structure

```
eastern-workforce-solutions/
├── index.html          # Semantic HTML5 single-page structure
├── styles.css          # Verbatim custom variables, typography, component CSS, and responsive styling
├── script.js           # Interactive controller (slider, video modal, contact modal, navigation)
├── assets/             # Images, backgrounds, and local web fonts (WOFF/WOFF2/TTF)
│   ├── logo.png        # Eastern Workforce Solutions Establishment transparent logo
│   ├── asset-001.jpg   # About section background
│   ├── asset-002.jpg   # News section background
│   ├── asset-006.jpg   # Footer / careers background
│   ├── asset-022.jpg   # News thumbnail
│   ├── asset-023.jpg   # Corporate video preview
│   ├── asset-024.png   # Video play button
│   ├── asset-025.jpg - asset-034.jpg # Hero banner slider images (desktop & mobile)
│   ├── asset-035.png   # ISO Certification emblem
│   ├── asset-036.jpg - asset-041.jpg # Service cards images
│   ├── asset-042.jpg, asset-043.png  # News card images
│   ├── asset-044.png   # Company profile brochure cover
│   ├── asset-045.png   # ISO credentials certificates
│   └── asset-046.png   # Saudi Vision 2030 emblem
└── fonts/              # Extracted font files (Open Sans, Fontello, Bootstrap Icons)
```

---

## Key Features

1. **Brand Identity**:
   - Integrated transparent high-resolution emblem and logotype for **Eastern Workforce Solutions Establishment**.
   - Custom favicons and responsive navbar lockup.

2. **Hero Banner & Dynamic Slider**:
   - 5 rotating corporate slides with auto-rotation (every 5 seconds) and pause on mouse hover.
   - Interactive bullet pagination (`•`) and smooth directional navigation buttons (previous/next).
   - Highlighting mega-projects, industrial staffing, technical compliance, and Vision 2030 alignment.
   - "Watch Corporate Overview" callout with video modal player.

3. **About Section**:
   - ISO Certified Establishment badge and narrative tailored to Saudi Arabia's industrial, energy, petrochemical, and construction sectors.

4. **HSE & Quality Matrix**:
   - Interactive 4-pillar grid covering **Health**, **Safety**, **Environment**, and **Quality**, aligned with Aramco, SABIC, and international OHS standards.

5. **Services & Workforce Solutions**:
   - 3×2 service card grid with 15px rounded corners, flat surface treatment, and interactive hover states:
     - Technical & Engineering Staffing
     - Industrial & Construction Manpower
     - Operations & Maintenance (O&M) Personnel
     - Plant Shutdown & Turnaround Crews
     - Executive Search & Headhunting
     - Saudization & Talent Localization (Nitaqat)

6. **Interactive Inquiries & Modals**:
   - **"Request Manpower" Modal Form**: Allows clients to select service categories, project scopes, locations, and headcounts.
   - **Corporate Video Modal**: Responsive embedded corporate video player.
   - **Brochure Center**: Direct download action for the 2026 Corporate Profile.

7. **Floating WhatsApp CTA**:
   - One-click WhatsApp button linking directly with pre-filled inquiry text.

---

## How to Run & Preview

### Option 1: Open directly in your browser
Double-click `index.html` or run from terminal:
```bash
open index.html
```

### Option 2: Run with Python's built-in HTTP server
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

### Option 3: Deploy to any static host
Deploy effortlessly to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any AWS S3 / Nginx server by uploading the project root.
