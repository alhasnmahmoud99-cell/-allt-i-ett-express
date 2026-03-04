# 🎯 EXACT POWERSHELL COMMANDS FOR DEPLOYMENT

**Important**: Make sure Node.js is installed first! See `INSTALL_NODEJS.md`

---

## ✅ After Node.js is Installed

Follow these steps in order. Copy and paste each command into PowerShell.

### Step 1: Navigate to Your Project

```powershell
cd C:\Users\Administrator\Downloads\sparkhome
```

### Step 2: Install Dependencies

```powershell
npm install
```

This may take 2-5 minutes. You'll see it installing packages. Wait for the `>` prompt to return.

### Step 3: Build Your Project

```powershell
npm run build
```

Wait for this to complete. It should show `✓` marks and say something like "build complete".

### Step 4: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 5: Log In to Vercel

```powershell
vercel login
```

This will open a browser to verify your identity. Follow the prompts.

### Step 6: Deploy to Production

```powershell
vercel --prod
```

This will:
- Ask you a few questions (say yes to most of them)
- Deploy your website
- Show you your live URL when done

---

## 🚀 Shortcut: All Commands at Once

If you want to run everything in one go, open PowerShell and paste this:

```powershell
cd C:\Users\Administrator\Downloads\sparkhome; npm install; npm run build; npm install -g vercel; vercel login; vercel --prod
```

(Use semicolons `;` in PowerShell, NOT `&&`)

---

## 📋 What Each Step Does

| Step | Command | Purpose |
|------|---------|---------|
| 1 | `cd ...` | Go to your project folder |
| 2 | `npm install` | Download all packages (Stripe, email, AI, etc.) |
| 3 | `npm run build` | Package your website for production |
| 4 | `npm install -g vercel` | Download Vercel deployment tool |
| 5 | `vercel login` | Verify you own the Vercel account |
| 6 | `vercel --prod` | Deploy to the internet |

---

## ✨ Expected Output

### npm install
```
added 450+ packages in 2m
```

### npm run build
```
✓ built in 45s
✓ dist/ is ready to be deployed
```

### vercel login
```
Vercel CLI 33.0.0
? Log in to Vercel (Y/n)
Browser window opened to verify your identity.
✓ Email confirmed
✓ Logged in
```

### vercel --prod
```
Vercel CLI 33.0.0
? Set up and deploy "..." from "..." (Y/n) y
✓ Linked to yourname/allt-i-ett-express-ab (created .vercelignore)
✓ Inspect: https://vercel.com/yourname/allt-i-ett-express-ab/...
✓ Production: https://allt-i-ett-express-ab.vercel.app
```

---

## 🎉 Your Website is Live!

After deployment, you'll see a URL like:
```
https://allt-i-ett-express-ab.vercel.app
```

Visit that URL in your browser. Your website is now LIVE! 🚀

---

## ⏱️ How Long Does It Take?

- npm install: 2-5 minutes (depends on internet speed)
- npm build: 1-2 minutes
- vercel login: < 1 minute
- vercel --prod: 2-3 minutes

**Total**: About 10-15 minutes from start to live website

---

## 🆘 If Something Goes Wrong

### "npm install failed"
Run it again:
```powershell
npm install
```

### "npm run build failed"
Check what error it shows. Common fixes:
```powershell
# Try clearing cache
npm cache clean --force
npm install
npm run build
```

### "vercel command not found"
Close and reopen PowerShell, then try again:
```powershell
vercel --prod
```

### "Email not confirmed"
During `vercel login`, check your email and click the confirmation link

---

## 📋 Checklist Before Running Commands

- [ ] Node.js installed (`node --version` returns a version)
- [ ] You're in the project folder (`cd C:\Users\Administrator\Downloads\sparkhome`)
- [ ] `.env` file has your 3 API keys filled in
- [ ] Vercel account created (https://vercel.com)

---

## 💡 Pro Tips

1. **Don't close PowerShell** until you see your live URL
2. **If npm install is slow**, your internet might be slow. Just wait.
3. **If build fails**, the error message usually tells you what's wrong
4. **After deploying**, add your environment variables in Vercel dashboard to make payments/AI/email work
5. **Test your website** at the live URL before telling anyone about it

---

## 📞 Quick Reference

```powershell
# Check if Node.js is installed
node --version

# Check if npm is installed
npm --version

# Go to your project
cd C:\Users\Administrator\Downloads\sparkhome

# Install dependencies
npm install

# Build project
npm run build

# Test locally (optional)
npm run preview

# Install Vercel
npm install -g vercel

# Log in
vercel login

# Deploy
vercel --prod

# Check deployment status
vercel ls
```

---

**Ready to deploy?** Just follow the steps above! 🎉

**Your website will be live soon!** ✨
