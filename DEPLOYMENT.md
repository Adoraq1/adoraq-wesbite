# Deployment Guide

## Environment Variables Setup

### Required Environment Variables

Your application requires the following environment variables to function properly:

```bash
# MailerLite Configuration
MAILERLITE_API_KEY=your_mailerlite_api_key_here
MAILERLITE_GROUP_ID=your_mailerlite_group_id_here

# Next.js Configuration  
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Environment
NODE_ENV=production
```

### Local Development Setup

1. Create a `.env.local` file in your project root:
```bash
cp .env.example .env.local
```

2. Update the values in `.env.local` with your actual credentials:
   - Get your MailerLite API key from: https://dashboard.mailerlite.com/integrations/api
   - Get your MailerLite Group ID from your MailerLite dashboard

### Production Deployment

#### Vercel Deployment
1. Connect your repository to Vercel
2. In your Vercel dashboard, go to Project Settings → Environment Variables
3. Add the following variables:
   - `MAILERLITE_API_KEY` → Your MailerLite API key
   - `MAILERLITE_GROUP_ID` → Your MailerLite group ID
   - `NEXT_PUBLIC_APP_URL` → Your production domain (e.g., https://adoraq.com)
   - `NODE_ENV` → production

#### Netlify Deployment
1. Connect your repository to Netlify
2. In your Netlify dashboard, go to Site Settings → Environment Variables
3. Add the same environment variables as listed above

#### Other Platforms
For other deployment platforms, ensure you set the environment variables in their respective configuration panels.

## Security Notes

- ✅ API keys are now properly stored in environment variables
- ✅ No hardcoded credentials in the codebase
- ✅ Environment files are properly gitignored
- ✅ Proper error handling for missing environment variables

## Testing Your Setup

1. Ensure your `.env.local` file has the correct values
2. Restart your development server: `npm run dev`
3. Test the lead form submission on your site
4. Check the server logs for any environment variable errors

## Stripe Integration

Your Stripe payment links are already configured in the components:
- Starter Package: £150
- Growth Package: £250  
- Premium Package: £350
- Monthly Plan: £500/month
- Special Offer: £27 (tripwire)

No additional Stripe environment variables are needed as you're using direct payment links.
