# 🚀 HOW TO INSTALL NODE.JS AND DEPLOY

## The Problem

Your system doesn't have Node.js installed, which is required to build and deploy your website.

## Solution: Install Node.js (5 Minutes)

### Step 1: Download Node.js

1. Go to: **https://nodejs.org**
2. You'll see two versions:
   - **LTS** (Long Term Support) ← **PICK THIS ONE**
   - Current
3. Click the **LTS** button to download
4. The file will be something like `node-v20.11.0-x64.msi` (version number may vary)

### Step 2: Run the Installer

1. Open your Downloads folder
2. Double-click the Node.js installer file (the .msi file)
3. Click "Next" through all the prompts
4. Accept the license agreement
5. Click "Install"
6. Wait for it to finish (takes about 2 minutes)
7. Click "Finish"

### Step 3: Restart Your Terminal

1. Close your current PowerShell/Command Prompt window completely
2. Open a NEW PowerShell or Command Prompt window
3. This lets Windows recognize that Node.js is now installed

### Step 4: Verify Installation

Open PowerShell or Command Prompt and run:

```powershell
node --version
npm --version
```

You should see version numbers like:
```
v20.11.0
10.5.0
```

If you see version numbers, Node.js is installed successfully! ✅

---

## Deploy Your Website (After Node.js is Installed)

Once Node.js is installed, choose ONE of these methods:

### Option 1: Use PowerShell Script (Recommended)

```powershell
cd C:\Users\Administrator\Downloads\sparkhome
.\DEPLOY.ps1
```

This will:
1. Ask you to press Enter
2. Install dependencies (npm install)
3. Build the project (npm run build)
4. Deploy to Vercel (vercel --prod)
5. Show your live URL when done

### Option 2: Use Batch Script

```cmd
cd C:\Users\Administrator\Downloads\sparkhome
.\DEPLOY.bat
```

### Option 3: Manual Commands (All Platforms)

Copy and paste these commands one at a time in PowerShell:

```powershell
# Install dependencies
npm install
```

Wait for it to finish, then:

```powershell
# Build the project
npm run build
```

Wait for it to finish, then:

```powershell
# Install Vercel CLI
npm install -g vercel
```

Then:

```powershell
# Log in to Vercel
vercel login
```

Then:

```powershell
# Deploy to production
vercel --prod
```

---

## 📋 Quick Checklist

Before deploying, make sure you have:

- [x] Node.js installed and restarted terminal
- [ ] Stripe API key added to `.env` file
- [ ] Anthropic API key added to `.env` file
- [ ] Resend API key added to `.env` file
- [ ] Vercel account created (https://vercel.com)

---

## 🆘 Troubleshooting

### "npm is not recognized"
**Solution**: Node.js isn't installed OR you didn't restart your terminal after installing. 
- Install Node.js from https://nodejs.org
- **CLOSE and RE-OPEN** your terminal window
- Try again

### "EACCES: permission denied"
**Solution**: Run PowerShell as Administrator
- Right-click PowerShell
- Select "Run as Administrator"
- Try again

### "vercel: The term 'vercel' is not recognized"
**Solution**: Vercel CLI failed to install
- Run: `npm install -g vercel`
- Wait for it to complete
- Close and reopen PowerShell
- Try `vercel --prod` again

### Build fails with "cannot find module"
**Solution**: Dependencies not fully installed
- Run: `npm install` again
- Run: `npm run build` again

### "Error: No version set and no .node-version file found"
**Solution**: Node version issue
- Run: `node --version`
- If it shows a version, ignore this error
- Continue with deployment

---

## 📞 Need Help?

If you're stuck:

1. **Node.js Installation Help**: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
2. **Vercel Deployment Help**: https://vercel.com/docs
3. **npm Help**: https://docs.npmjs.com/

---

## 🎉 After Deployment

Once your website is live:

1. You'll see a URL like: `https://allt-i-ett-express-ab.vercel.app`
2. Visit that URL to see your live website
3. Test all features:
   - [ ] All pages load
   - [ ] Chat widget works
   - [ ] Booking form appears
   - [ ] Language toggle works
   - [ ] Mobile menu works

---

**That's it!** Your website will be live in about 5-10 minutes. 🚀

---

## Quick Reference

| Command | What It Does |
|---------|-------------|
| `node --version` | Check if Node.js is installed |
| `npm --version` | Check if npm is installed |
| `npm install` | Install project dependencies |
| `npm run build` | Build project for production |
| `npm run preview` | Test production build locally |
| `npm install -g vercel` | Install Vercel CLI globally |
| `vercel login` | Log in to your Vercel account |
| `vercel --prod` | Deploy to production |

---

**Status**: Ready to deploy once Node.js is installed ✅
