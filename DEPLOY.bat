@echo off
REM =============================================================================
REM Allt I Ett Express AB - One-Click Deployment Script for Windows
REM =============================================================================
REM This script will:
REM 1. Install all dependencies
REM 2. Build the project for production
REM 3. Deploy to Vercel
REM =============================================================================

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo  Allt I Ett Express AB - Deployment Script
echo ============================================================
echo.
echo This script will build and deploy your website to Vercel.
echo.
echo Prerequisites:
echo  1. Node.js installed (https://nodejs.org)
echo  2. Vercel account created (https://vercel.com)
echo  3. .env file with API keys filled in
echo.
echo.
echo CHECKING FOR NODE.JS...
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ NODE.JS NOT INSTALLED
    echo.
    echo Node.js is required but not found on your system.
    echo.
    echo To install Node.js:
    echo  1. Visit: https://nodejs.org
    echo  2. Download the LTS (Long Term Support) version
    echo  3. Run the installer
    echo  4. Restart your terminal
    echo  5. Run this script again
    echo.
    echo After installing Node.js, run this command:
    echo   .\DEPLOY.bat
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js found
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm not found
    pause
    exit /b 1
)
echo ✓ npm found
echo.
pause

REM Step 1: Install dependencies
echo.
echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)
echo ✓ Dependencies installed

REM Step 2: Build project
echo.
echo [2/3] Building project for production...
call npm run build
if errorlevel 1 (
    echo ERROR: npm build failed
    pause
    exit /b 1
)
echo ✓ Build complete

REM Step 3: Deploy to Vercel
echo.
echo [3/3] Deploying to Vercel...
echo.
echo Installing Vercel CLI globally...
call npm install -g vercel
echo.
echo Logging in to Vercel...
call vercel login
echo.
echo Deploying your website to production...
call vercel --prod

if errorlevel 1 (
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo ============================================================
echo  ✅ Deployment Complete!
echo ============================================================
echo.
echo Your website is now live on Vercel!
echo.
echo Next steps:
echo  1. Check the Vercel URL above
echo  2. Make sure environment variables are set in Vercel dashboard
echo  3. Test all features (payments, chat, emails)
echo  4. Update your domain DNS to point to Vercel (if using custom domain)
echo.
pause
