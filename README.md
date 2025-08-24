# Adoraq Marketing Funnel

A static, no-login marketing funnel for Adoraq - an advertising design studio serving small beauty, wellness, and fitness businesses in London.

## 🚀 Features

- **No Authentication Required** - Static site with no user accounts
- **Mobile-First Design** - Responsive design optimized for all devices
- **Russell Brunson's DotCom Secrets Funnel** - Lead Magnet → Tripwire → Core Offer → Continuity
- **WhatsApp Integration** - Quick contact and floating chat button
- **Static Export Ready** - Can be deployed on Vercel, Netlify, or GitHub Pages
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Focused** - Lightweight and fast loading

## 📁 Project Structure

```
adoraqfunnelv1/
├── app/
│   ├── layout.tsx                 # Root layout with header/footer
│   ├── page.tsx                   # Home page (lead magnet)
│   ├── thank-you/page.tsx         # Thank you page (tripwire offer)
│   ├── packages/page.tsx          # Core offers (3-tier pricing)
│   ├── continuity/page.tsx        # Monthly plan
│   ├── blog/
│   │   ├── page.tsx               # Blog listing
│   │   └── [slug]/page.tsx        # Individual blog posts
│   ├── privacy/page.tsx           # Privacy policy
│   ├── terms/page.tsx             # Terms of service
│   ├── success/page.tsx           # Post-checkout thank you
│   └── globals.css                # Global styles
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── Footer.tsx                 # Site footer
│   ├── FloatingWhatsApp.tsx       # Floating WhatsApp button
│   ├── Hero.tsx                   # Main hero section
│   ├── LeadForm.tsx               # Email capture form
│   ├── FAQ.tsx                    # Accordion FAQ
│   ├── PricingCards.tsx           # 3-tier pricing cards
│   ├── Testimonials.tsx           # Client testimonials
│   ├── BlogList.tsx               # Blog post grid
│   └── PostLayout.tsx             # Individual blog post layout
├── data/
│   └── posts.json                 # Blog posts data
├── public/
│   └── assets/
│       └── adoraq-checklist.pdf   # Free lead magnet
└── package.json
```

## 🎨 Design System

### Colors
- **Brand Primary**: `#8b5cf6` (Purple)
- **Brand Secondary**: `#22c55e` (Green)  
- **Muted**: Grays for text and backgrounds
- **Backgrounds**: Soft gradients from muted-50 to brand-50

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with gradient text effects
- **Body**: Readable line heights and comfortable sizing

### Components
- **Cards**: `rounded-2xl` with soft shadows
- **Buttons**: Primary (brand) and secondary (brand2) styles
- **Forms**: Rounded inputs with focus states

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd adoraqfunnelv1

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production
```bash
# Build and export static files
npm run build

# The static site will be in the 'out' directory
```

## 🔧 Configuration Needed

### 1. Email Marketing Integration ✅
**MailerLite integration is now configured!**

The system uses a secure API route (`/app/api/subscribe/route.ts`) that:
- Validates email and name fields
- Creates subscribers in your MailerLite group (ID: 163559950731183161)
- Handles WhatsApp updates preference
- Provides proper error handling and user feedback

**Environment Variables:**
Create a `.env.local` file with:
```bash
MAILERLITE_API_KEY=your_api_key_here
MAILERLITE_GROUP_ID=your_group_id_here
```

The API key and group ID are already configured for your account.

### 2. Payment Links  
Update Stripe payment links in:
- `/app/thank-you/page.tsx` (Tripwire offer)
- `/components/PricingCards.tsx` (Core packages)
- `/app/continuity/page.tsx` (Monthly plan)

Replace placeholders like:
```typescript
href="https://buy.stripe.com/TRIPWIRE_PLACEHOLDER"
```

### 3. Contact Information
Update in multiple files:
- WhatsApp number: `https://wa.me/44749052323`
- Email: `hello@adoraq.com`
- Instagram: `https://instagram.com/Adoraq`

### 4. Google Analytics (Optional)
Add tracking script to `app/layout.tsx` if needed.

## 📝 Content Management

### Blog Posts
Edit `data/posts.json` to add/modify blog posts. Each post includes:
- `slug`: URL slug
- `title`: Post title
- `excerpt`: Short description
- `content`: Full post content (Markdown-style)
- `featured`: Whether to show on homepage

### Lead Magnet
Replace `public/assets/adoraq-checklist.pdf` with your actual checklist.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Enable static export in build settings
3. Deploy automatically on push

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

### GitHub Pages
1. Enable GitHub Actions
2. Use the static export workflow
3. Deploy to `gh-pages` branch

## 📊 Analytics & Tracking

### Key Metrics to Track
- Lead magnet conversion rate
- Tripwire conversion rate  
- Package page engagement
- WhatsApp click-through rate
- Blog post engagement

### Forms
All forms redirect to `/thank-you` on success. Set up tracking pixels on that page for conversion tracking.

## 🔍 SEO Features

- Semantic HTML structure
- Open Graph tags for social sharing
- Twitter Cards
- Proper heading hierarchy
- Alt tags on images
- Fast loading times
- Mobile-first responsive design

## 🎯 Funnel Flow

1. **Lead Magnet** (`/`) - Visitor downloads free checklist
2. **Thank You** (`/thank-you`) - Immediate tripwire offer (£27 ads)
3. **Packages** (`/packages`) - Core service offerings (£150-350)
4. **Continuity** (`/continuity`) - Monthly plan (£500/month)
5. **Success** (`/success`) - Post-payment confirmation

## 🤝 Support

For questions about implementation:
- Email: hello@adoraq.com
- WhatsApp: +44 749052323

## 📄 License

This project is proprietary to Adoraq. Not for redistribution.

---

Built with ❤️ for beauty and wellness businesses in London.
