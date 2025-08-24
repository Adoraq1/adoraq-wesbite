# 🚀 Quick Deployment Checklist

## ✅ Pre-Deployment Checklist

### Environment Variables
- [ ] `MAILERLITE_API_KEY` set in Vercel
- [ ] `MAILERLITE_GROUP_ID` set in Vercel  
- [ ] `NEXT_PUBLIC_APP_URL` set in Vercel
- [ ] `NODE_ENV=production` set in Vercel

### All Environments Covered
- [ ] Production environment variables set
- [ ] Preview environment variables set
- [ ] Development environment variables set

### Code Quality
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds locally
- [ ] No TypeScript errors
- [ ] All imports resolved correctly

### Testing
- [ ] Lead form submission works
- [ ] All pages load correctly
- [ ] Stripe payment links work
- [ ] Blog posts display properly

## 🚀 Deployment Steps

### Option 1: Vercel Dashboard
1. [ ] Go to Vercel dashboard
2. [ ] Find your project
3. [ ] Click "Redeploy" or wait for auto-deploy
4. [ ] Check build logs for success

### Option 2: Command Line
```bash
# Test locally first
npm run test

# Deploy to production
npm run deploy

# Or deploy to preview
npm run deploy:preview
```

### Option 3: GitHub Actions
1. [ ] Push to main branch
2. [ ] Check GitHub Actions tab
3. [ ] Verify deployment success

## 🔍 Post-Deployment Verification

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] Lead form captures emails
- [ ] MailerLite integration works
- [ ] All payment links functional
- [ ] Blog pages accessible
- [ ] Contact forms working

### Performance Checks
- [ ] Page load times acceptable
- [ ] Images optimized
- [ ] No console errors
- [ ] Mobile responsive

### Security Verification
- [ ] HTTPS enforced
- [ ] No API keys exposed
- [ ] CORS configured correctly
- [ ] Security headers present

## 🆘 Troubleshooting

### Build Fails
- [ ] Check environment variables
- [ ] Review build logs
- [ ] Test locally first
- [ ] Check Node.js version

### API Issues
- [ ] Verify MailerLite credentials
- [ ] Check function timeout
- [ ] Review CORS settings
- [ ] Test API endpoint directly

### Performance Issues
- [ ] Enable caching
- [ ] Optimize images
- [ ] Check bundle size
- [ ] Monitor function execution

## 📞 Emergency Contacts

- **Vercel Support**: https://vercel.com/support
- **MailerLite Support**: https://www.mailerlite.com/support
- **GitHub Issues**: Create issue in repository

---

**Last Updated**: December 2024  
**Use this checklist before every deployment!**
