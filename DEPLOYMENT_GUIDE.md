# 🚀 Adoraq Website Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended) ⭐
**Best for**: Fast deployment, automatic CI/CD, built-in Next.js optimization

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Connect Your Repository**
   - Push your code to GitHub/GitLab/Bitbucket
   - Import your repository in Vercel dashboard

3. **Environment Variables**
   - In Vercel dashboard → Project Settings → Environment Variables
   - Add these variables:
     ```
     MAILERLITE_API_KEY=your_actual_api_key
     MAILERLITE_GROUP_ID=your_actual_group_id
     NEXT_PUBLIC_APP_URL=https://adoraq.com
     NODE_ENV=production
     ```

4. **Custom Domain**
   - In Vercel dashboard → Project Settings → Domains
   - Add: `adoraq.com` and `www.adoraq.com`
   - Update your DNS settings as instructed

### Option 2: Netlify
**Best for**: Static hosting, form handling, edge functions

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub/GitLab/Bitbucket

2. **Deploy from Git**
   - New site from Git
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables**
   - Site settings → Environment variables
   - Add the same variables as Vercel

### Option 3: DigitalOcean App Platform
**Best for**: Full control, database integration, scaling

1. **Create DigitalOcean Account**
   - Go to [digitalocean.com](https://digitalocean.com)
   - Create new App

2. **Connect Repository**
   - Choose GitHub/GitLab
   - Select your repository

3. **Configure Build**
   - Build command: `npm run build`
   - Run command: `npm start`

## Pre-Deployment Checklist ✅

- [x] ✅ **Build successful** (`npm run build`)
- [x] ✅ **Environment variables secured** (not in code)
- [x] ✅ **Git repository initialized**
- [x] ✅ **All email addresses updated** (adoraq.com)
- [x] ✅ **Stripe payment links configured**
- [x] ✅ **Forms working** (MailerLite integration)

## Environment Variables Required 🔐

```bash
MAILERLITE_API_KEY=your_mailerlite_api_key
MAILERLITE_GROUP_ID=your_mailerlite_group_id
NEXT_PUBLIC_APP_URL=https://adoraq.com
NODE_ENV=production
```

## DNS Configuration for adoraq.com 🌐

**For Vercel:**
```
Type: A Record
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A Record
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

## Post-Deployment Testing 🧪

1. **Homepage**: Check lead form submission
2. **Packages**: Verify Stripe payment links work
3. **Contact**: Test email links (hello@adoraq.com)
4. **Mobile**: Test responsive design
5. **Performance**: Check page load speeds

## Troubleshooting 🔧

**Build Errors:**
- Check console for TypeScript/ESLint errors
- Verify all imports are correct
- Ensure environment variables are set

**Form Not Working:**
- Verify MailerLite API key is correct
- Check environment variables in deployment platform
- Test API endpoint: `/api/subscribe`

**Stripe Links Not Working:**
- Confirm all payment links are valid
- Test each package purchase flow

## Performance Optimization 📈

Your site is already optimized with:
- ✅ Next.js 14 with App Router
- ✅ Static page generation
- ✅ Image optimization
- ✅ Tailwind CSS purging
- ✅ Component-based architecture

## Security Features 🛡️

- ✅ Environment variables secured
- ✅ Security headers configured
- ✅ HTTPS enforced
- ✅ XSS protection enabled
- ✅ Content type validation

## Need Help? 💬

If you encounter issues:
1. Check the deployment platform logs
2. Verify environment variables
3. Test locally with `npm run build && npm start`
4. Contact support for your chosen platform

---

**Recommended**: Start with Vercel for the fastest and most reliable deployment! 🚀
