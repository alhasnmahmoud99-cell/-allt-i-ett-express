# 🚀 DEPLOY NOW - Allt I Ett Express AB Website

## Your website is ready. Follow these steps to go live today.

---

## Section 1: Get Your API Keys

You need 3 API keys to enable full functionality. All are FREE to get started.

### 1a. Stripe Payment Key (for booking payments)

1. Go to https://dashboard.stripe.com/apikeys
2. Sign up or log in with your email
3. Click on "Reveal test key" under "Publishable key"
4. Copy the key starting with `pk_test_`
5. This is your: `VITE_STRIPE_PUBLIC_KEY`

**URL**: https://dashboard.stripe.com/apikeys
**Key Pattern**: `pk_test_...`
**Status**: Optional (website works without, payments won't process)

### 1b. Anthropic Claude AI Key (for chat assistant)

1. Go to https://console.anthropic.com/
2. Sign up or log in with your email
3. Click "Create API Key" 
4. Copy the API key
5. This is your: `VITE_ANTHROPIC_API_KEY`

**URL**: https://console.anthropic.com/
**Key Pattern**: `sk-ant-...`
**Status**: Optional (website works without, AI chat won't respond)

### 1c. Resend Email Key (for sending emails)

1. Go to https://resend.com/
2. Sign up or log in with your email
3. Click "API Keys"
4. Click "Create API Key"
5. Copy the API key
6. This is your: `VITE_RESEND_API_KEY`

**URL**: https://resend.com/api-keys
**Key Pattern**: `re_...`
**Status**: Optional (website works without, emails won't send)

---

## Section 2: Add Your Keys

### Option A: Edit .env File (Recommended)

1. Open the file: `.env` in your project root
2. Replace the placeholders:

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_YOUR_KEY_HERE
VITE_ANTHROPIC_API_KEY=sk-ant-YOUR_KEY_HERE
VITE_RESEND_API_KEY=re_YOUR_KEY_HERE
VITE_API_URL=http://localhost:5173
VITE_API_BASE_URL=http://localhost:3000/api
```

3. Save the file
4. Restart your dev server (if running)

### Option B: Add Keys via Command Line

```powershell
# Open PowerShell in the project directory and run:
# Note: These commands work on Windows PowerShell 5.1+

# Set Stripe key
[Environment]::SetEnvironmentVariable("VITE_STRIPE_PUBLIC_KEY", "pk_test_YOUR_KEY", "User")

# Set Anthropic key
[Environment]::SetEnvironmentVariable("VITE_ANTHROPIC_API_KEY", "sk-ant-YOUR_KEY", "User")

# Set Resend key
[Environment]::SetEnvironmentVariable("VITE_RESEND_API_KEY", "re_YOUR_KEY", "User")
```

### Option C: Add Keys in Hosting Dashboard (After Deployment)

If deploying to **Vercel**:
1. Go to vercel.com/dashboard
2. Click your project
3. Click "Settings" → "Environment Variables"
4. Add each key separately
5. Redeploy

If deploying to **Netlify**:
1. Go to app.netlify.com
2. Click your site
3. Click "Site settings" → "Build & deploy" → "Environment"
4. Add each key
5. Redeploy

---

## Section 3: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest deployment option.

### Step 3a: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 3b: Login to Vercel

```powershell
vercel login
```

Follow the prompts to authenticate.

### Step 3c: Deploy Your Site

```powershell
npm run build
vercel --prod
```

Follow the prompts:
- Link to existing project? No (first time)
- Project name? `allt-i-ett-express-ab`
- Framework? Vite (should auto-detect)
- Build command? `npm run build` (default)
- Output directory? `dist` (default)

**Wait 2-3 minutes for deployment to complete.**

### Step 3d: Your Live URL

After deployment, Vercel shows your URL:
```
✅ Production: https://allt-i-ett-express-ab.vercel.app
```

**This is your live website!**

### Step 3e: Add Environment Variables (Optional but Recommended)

To enable payments and AI chat:

1. Go to https://vercel.com/dashboard
2. Click your project: `allt-i-ett-express-ab`
3. Click "Settings"
4. Click "Environment Variables"
5. Add these 3 variables (you got them from Section 1):
   - `VITE_STRIPE_PUBLIC_KEY` = your stripe key
   - `VITE_ANTHROPIC_API_KEY` = your anthropic key
   - `VITE_RESEND_API_KEY` = your resend key

6. Click "Save"
7. Go back to "Deployments"
8. Click the latest deployment
9. Click the "..." menu
10. Click "Redeploy"

**Wait 1-2 minutes for redeployment with keys active.**

---

## Section 4: Go Live Checklist

Before announcing your website, verify:

### ✅ Website Loads
- [ ] Visit your live URL
- [ ] Home page loads (hero section, services, testimonials visible)
- [ ] No white screen or errors

### ✅ Navigation Works
- [ ] Navbar menu items are clickable
- [ ] Language toggle works (switches between EN and عربي)
- [ ] Mobile menu opens/closes on phone view
- [ ] Footer links are clickable

### ✅ Booking Wizard Works (if API keys added)
- [ ] Click "Book Now" button
- [ ] Step 1: Can select service
- [ ] Step 2: Can fill home details
- [ ] Step 3: Can select date/time
- [ ] Step 4: Can select extras
- [ ] Step 5: Can enter contact info
- [ ] Step 6: Can see summary
- [ ] Booking confirmation shows

### ✅ Forms Work
- [ ] Contact form can be filled and submitted
- [ ] Login form appears
- [ ] Register form appears
- [ ] Error messages show if form invalid

### ✅ Chat Works (if API key added)
- [ ] Chat bubble appears bottom-right
- [ ] Click bubble to open chat
- [ ] Can type message
- [ ] AI responds (if key configured)
- [ ] Suggested questions appear

### ✅ Responsive Design
- [ ] View on desktop (large screen)
- [ ] View on tablet (medium screen) 
- [ ] View on phone (small screen)
- [ ] All content readable
- [ ] Buttons clickable on mobile

### ✅ Performance
- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No console errors (F12 → Console)
- [ ] No broken images (404 errors)

### ✅ Multi-Language
- [ ] Click language toggle (top right)
- [ ] Switch to عربي (Arabic)
- [ ] Page layout switches to RTL (right-to-left)
- [ ] All text is in Arabic
- [ ] Switch back to EN (English)
- [ ] Page layout switches to LTR (left-to-right)

### ✅ Professional
- [ ] Logo is displayed (top left)
- [ ] Company name "Allt I Ett Express AB" appears
- [ ] Contact info is visible
- [ ] Social media links work (if configured)
- [ ] Copyright footer is visible

---

## Advanced Deployment Options

### Deploy to Netlify (Alternative)

```powershell
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Traditional Hosting

1. Run: `npm run build`
2. Upload the `dist/` folder to your hosting via FTP
3. Set up domain and SSL
4. Done!

---

## Troubleshooting

### "Website blank or white screen"
- Check browser console (F12)
- Ensure all files uploaded
- Wait 5 minutes for cache clear

### "Payments not working"
- Verify Stripe key is added in environment variables
- Use test card: `4242 4242 4242 4242`

### "Chat not responding"
- Verify Anthropic API key is set
- Check browser console for errors
- Ensure API key has no typos

### "Emails not sending"
- Verify Resend API key is set
- Check email spam folder
- Ensure from address is verified in Resend

### "Build fails"
- Delete `node_modules` folder
- Run `npm install` again
- Run `npm run build`

---

## Next Steps After Going Live

### Week 1: Monitor
- [ ] Check for errors daily
- [ ] Test bookings (use test payment card)
- [ ] Monitor email delivery
- [ ] Ask friends to test

### Week 2: Optimize
- [ ] Enable SSL certificate
- [ ] Set up domain name (custom domain)
- [ ] Configure analytics
- [ ] Optimize images

### Week 3: Promote
- [ ] Add to Google My Business
- [ ] Share on social media
- [ ] Send welcome email to early users
- [ ] Collect feedback

### Month 2: Scale
- [ ] Set up admin dashboard
- [ ] Connect to database
- [ ] Add webhook handlers
- [ ] Implement SMS notifications

---

## Support & Help

### Quick Links
- **Stripe Docs**: https://stripe.com/docs
- **Anthropic Docs**: https://docs.anthropic.com/
- **Resend Docs**: https://resend.com/docs
- **Vercel Docs**: https://vercel.com/docs

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| API keys not working | Refresh the page, wait 5 min for cache |
| Deployment slow | Vercel usually takes 2-3 min, be patient |
| Build fails | Delete node_modules and npm install again |
| Keys not recognized | Restart dev server after adding .env keys |
| Email not sending | Use test email, check spam folder |

---

## Summary

**You're ready to go live!**

### To Deploy Right Now:
1. Run: `npm install -g vercel && vercel login`
2. Run: `npm run build && vercel --prod`
3. Wait 2-3 minutes
4. Visit your live URL
5. Share with customers!

### To Enable Full Features (Optional):
1. Get 3 API keys (free)
2. Add keys to .env file
3. Redeploy
4. Full payments, AI chat, and emails work

**Everything is ready. Deploy now!** 🚀

---

**Website**: Allt I Ett Express AB
**Framework**: React + Vite
**Hosting**: Vercel (recommended) or your choice
**Status**: Ready for production

Go live today! 🎉
