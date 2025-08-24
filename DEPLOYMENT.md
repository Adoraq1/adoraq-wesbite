# 🚀 Adoraq Website Deployment Guide

## 📋 Prerequisites

- [Git](https://git-scm.com/) installed
- [Node.js](https://nodejs.org/) 18+ installed
- [GitHub](https://github.com/) account
- [Vercel](https://vercel.com/) account

## 🔧 Local Development Setup

### 1. Clone and Install Dependencies
```bash
git clone https://github.com/Adoraq1/adoraq-wesbite.git
cd adoraq-wesbite
npm install
```

### 2. Environment Variables Setup
Create `.env.local` file in the root directory:
```env
# MailerLite Configuration
MAILERLITE_API_KEY=your_mailerlite_api_key_here
MAILERLITE_GROUP_ID=your_mailerlite_group_id_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your website.

## 🌐 Vercel Deployment

### 1. Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import from GitHub: `Adoraq1/adoraq-wesbite`
4. Click "Deploy"

### 2. Environment Variables Configuration
In your Vercel project settings, add these environment variables:

#### **Production Environment:**
```
MAILERLITE_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDA5Zjc4ZjdiNmI1MjI0YjE3ZDRhNDlmNzM1MTkzZDRhNDRiMjJkMzdiZDU5ODg0NTM5MmZkZGIyNzM2OTM0Y2NkOGI1NmVhMmY3YjVjY2QiLCJpYXQiOjE3NTU5ODI3MDEuMTMxMzIyLCJuYmYiOjE3NTU5ODI3MDEuMTMxMzI2LCJleHAiOjQ5MTE2NTYzMDEuMTI3MDE2LCJzdWIiOiIxNzY3NjI0Iiwic2NvcGVzIjpbXX0.a1PzsBd7GFY6Nn9fy0-quVt-uK2H7DaaU5FolnJo-Lkv8v_7c0GGmTlWYH7JFm01vq37OrPBqiaB9koW66tWoCYo5wx8WAnB9H9ua7VWul8YD33PTxSw6NfznaqH61dRNSJH0sR18ysmsDBYQtNSyVqqdZAa2UzGYbZ4JI5a8gWN30kRZNTQiV1SW1QExtPsWekwECIMbyVJa3Ww5WKYXEEK2bR2_K8IzhJi0H13WlP8MOUBZCDZwUHt6oV88bD82waXJbbohgevnVfNLwqVpkIbKconvD3X9Fk8vFbZZmc4_lyxTtDpmZyS0EfIv7PEdtPG1ExJLPi65ty356IPBltMLqsvMxDdyowEsF7VszCLmF_j8ZL4IeZCAh9ZwFI4Um70R1aTagCTAQcNdYuoARxDY92Dj7kLtqmlhOeIwAFGiPw49jdyqTym_XYFLsdkwWaCcz_Q9dubKT9ZV79ePfdWjjt-oYcOd2r8fgZHBybqXY3OvMfqeUQfTrKKjLqzgNPRUcXRJeEcKAdszeoNah6Pm3197HprNPCP5KPeCNSPTLi9WvQu8HkHBmFUccR2KFXF4q9HtImrrObDlaAKYVfEp9KjtrqncZg9_YovwGXx2pWIoEraI-C5HYUSd4boi_tB6XR-2dBMUIhTKUZAp_tGJXOQMFzKBwm7EFPhJd0
MAILERLITE_GROUP_ID=163559950731183161
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NODE_ENV=production
```

#### **Preview Environment:**
```
MAILERLITE_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDA5Zjc4ZjdiNmI1MjI0YjE3ZDRhNDlmNzM1MTkzZDRhNDRiMjJkMzdiZDU5ODg0NTM5MmZkZGIyNzM2OTM0Y2NkOGI1NmVhMmY3YjVjY2QiLCJpYXQiOjE3NTU5ODI3MDEuMTMxMzIyLCJuYmYiOjE3NTU5ODI3MDEuMTMxMzI2LCJleHAiOjQ5MTE2NTYzMDEuMTI3MDE2LCJzdWIiOiIxNzY3NjI0Iiwic2NvcGVzIjpbXX0.a1PzsBd7GFY6Nn9fy0-quVt-uK2H7DaaU5FolnJo-Lkv8v_7c0GGmTlWYH7JFm01vq37OrPBqiaB9koW66tWoCYo5wx8WAnB9H9ua7VWul8YD33PTxSw6NfznaqH61dRNSJH0sR18ysmsDBYQtNSyVqqdZAa2UzGYbZ4JI5a8gWN30kRZNTQiV1SW1QExtPsWekwECIMbyVJa3Ww5WKYXEEK2bR2_K8IzhJi0H13WlP8MOUBZCDZwUHt6oV88bD82waXJbbohgevnVfNLwqVpkIbKconvD3X9Fk8vFbZZmc4_lyxTtDpmZyS0EfIv7PEdtPG1ExJLPi65ty356IPBltMLqsvMxDdyowEsF7VszCLmF_j8ZL4IeZCAh9ZwFI4Um70R1aTagCTAQcNdYuoARxDY92Dj7kLtqmlhOeIwAFGiPw49jdyqTym_XYFLsdkwWaCcz_Q9dubKT9ZV79ePfdWjjt-oYcOd2r8fgZHBybqXY3OvMfqeUQfTrKKjLqzgNPRUcXRJeEcKAdszeoNah6Pm3197HprNPCP5KPeCNSPTLi9WvQu8HkHBmFUccR2KFXF4q9HtImrrObDlaAKYVfEp9KjtrqncZg9_YovwGXx2pWIoEraI-C5HYUSd4boi_tB6XR-2dBMUIhTKUZAp_tGJXOQMFzKBwm7EFPhJd0
MAILERLITE_GROUP_ID=163559950731183161
NEXT_PUBLIC_APP_URL=https://your-preview-domain.vercel.app
NODE_ENV=production
```

#### **Development Environment:**
```
MAILERLITE_API_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDA5Zjc4ZjdiNmI1MjI0YjE3ZDRhNDlmNzM1MTkzZDRhNDRiMjJkMzdiZDU5ODg0NTM5MmZkZGIyNzM2OTM0Y2NkOGI1NmVhMmY3YjVjY2QiLCJpYXQiOjE3NTU5ODI3MDEuMTMxMzIyLCJuYmYiOjE3NTU5ODI3MDEuMTMxMzI2LCJleHAiOjQ5MTE2NTYzMDEuMTI3MDE2LCJzdWIiOiIxNzY3NjI0Iiwic2NvcGVzIjpbXX0.a1PzsBd7GFY6Nn9fy0-quVt-uK2H7DaaU5FolnJo-Lkv8v_7c0GGmTlWYH7JFm01vq37OrPBqiaB9koW66tWoCYo5wx8WAnB9H9ua7VWul8YD33PTxSw6NfznaqH61dRNSJH0sR18ysmsDBYQtNSyVqqdZAa2UzGYbZ4JI5a8gWN30kRZNTQiV1SW1QExtPsWekwECIMbyVJa3Ww5WKYXEEK2bR2_K8IzhJi0H13WlP8MOUBZCDZwUHt6oV88bD82waXJbbohgevnVfNLwqVpkIbKconvD3X9Fk8vFbZZmc4_lyxTtDpmZyS0EfIv7PEdtPG1ExJLPi65ty356IPBltMLqsvMxDdyowEsF7VszCLmF_j8ZL4IeZCAh9ZwFI4Um70R1aTagCTAQcNdYuoARxDY92Dj7kLtqmlhOeIwAFGiPw49jdyqTym_XYFLsdkwWaCcz_Q9dubKT9ZV79ePfdWjjt-oYcOd2r8fgZHBybqXY3OvMfqeUQfTrKKjLqzgNPRUcXRJeEcKAdszeoNah6Pm3197HprNPCP5KPeCNSPTLi9WvQu8HkHBmFUccR2KFXF4q9HtImrrObDlaAKYVfEp9KjtrqncZg9_YovwGXx2pWIoEraI-C5HYUSd4boi_tB6XR-2dBMUIhTKUZAp_tGJXOQMFzKBwm7EFPhJd0
MAILERLITE_GROUP_ID=163559950731183161
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Deploy
1. Click "Deploy" in Vercel
2. Wait for build to complete
3. Your site will be live at the provided URL

## 🔄 Continuous Deployment

### Automatic Deployments
- **Production**: Deploys from `main` branch
- **Preview**: Deploys from any other branch or pull request
- **Development**: Deploys from `develop` branch (if configured)

### Manual Deployments
```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## 🌍 Custom Domain Setup

### 1. Add Custom Domain in Vercel
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `adoraq.com`)
4. Follow DNS configuration instructions

### 2. Update Environment Variables
Update `NEXT_PUBLIC_APP_URL` to your custom domain:
```
NEXT_PUBLIC_APP_URL=https://adoraq.com
```

## 🛠️ Troubleshooting

### Build Failures
1. **Check environment variables** are set for all environments
2. **Verify Node.js version** (use `.nvmrc` file)
3. **Check for TypeScript errors** locally first
4. **Review build logs** in Vercel dashboard

### API Route Issues
1. **Environment variables** must be set for all environments
2. **API routes** are serverless functions with timeout limits
3. **CORS issues** are handled in the route configuration

### Performance Issues
1. **Enable caching** for static assets
2. **Optimize images** using Next.js Image component
3. **Monitor function execution** times in Vercel analytics

## 📊 Monitoring & Analytics

### Vercel Analytics
- **Performance monitoring** built into Vercel
- **Function execution** times and errors
- **Real-time metrics** for your deployment

### MailerLite Integration
- **Subscriber tracking** in MailerLite dashboard
- **Email delivery** statistics
- **Campaign performance** metrics

## 🔒 Security Checklist

- [ ] Environment variables are properly set
- [ ] API keys are not exposed in client-side code
- [ ] CORS headers are configured correctly
- [ ] Security headers are enabled in `vercel.json`
- [ ] HTTPS is enforced
- [ ] Regular dependency updates

## 📝 Maintenance

### Regular Tasks
1. **Update dependencies** monthly
2. **Monitor build logs** for errors
3. **Check MailerLite** integration status
4. **Review performance** metrics
5. **Backup environment** variables

### Emergency Procedures
1. **Revert to previous deployment** if needed
2. **Check Vercel status** page for outages
3. **Contact support** for critical issues

## 🆘 Support

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **MailerLite Support**: https://www.mailerlite.com/support

---

**Last Updated**: December 2024  
**Version**: 1.0.0
