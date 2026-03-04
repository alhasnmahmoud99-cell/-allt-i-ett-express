# =============================================================================
# Allt I Ett Express AB - PowerShell Deployment Script for Windows
# =============================================================================
# This script will:
# 1. Install all dependencies
# 2. Build the project for production
# 3. Deploy to Vercel
# =============================================================================

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host " Allt I Ett Express AB - PowerShell Deployment Script" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "This script will build and deploy your website to Vercel." -ForegroundColor Yellow
Write-Host ""
Write-Host "Prerequisites:" -ForegroundColor Cyan
Write-Host " 1. Node.js installed (https://nodejs.org)" -ForegroundColor Cyan
Write-Host " 2. Vercel account created (https://vercel.com)" -ForegroundColor Cyan
Write-Host " 3. .env file with API keys filled in" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "CHECKING FOR NODE.JS..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "❌ NODE.JS NOT INSTALLED" -ForegroundColor Red
    Write-Host ""
    Write-Host "Node.js is required but not found on your system." -ForegroundColor Red
    Write-Host ""
    Write-Host "To install Node.js:" -ForegroundColor Yellow
    Write-Host " 1. Visit: https://nodejs.org" -ForegroundColor White
    Write-Host " 2. Download the LTS (Long Term Support) version" -ForegroundColor White
    Write-Host " 3. Run the installer" -ForegroundColor White
    Write-Host " 4. Restart your terminal/PowerShell" -ForegroundColor White
    Write-Host " 5. Run this script again" -ForegroundColor White
    Write-Host ""
    Write-Host "After installing Node.js, run:" -ForegroundColor Yellow
    Write-Host "   .\DEPLOY.ps1" -ForegroundColor Cyan
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

try {
    $npmVersion = npm --version 2>$null
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found" -ForegroundColor Red
    exit 1
}

Write-Host ""
Read-Host "Press Enter to continue"

# Step 1: Install dependencies
Write-Host ""
Write-Host "[1/3] Installing dependencies..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm install failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✓ Dependencies installed" -ForegroundColor Green

# Step 2: Build project
Write-Host ""
Write-Host "[2/3] Building project for production..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm build failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✓ Build complete" -ForegroundColor Green

# Step 3: Deploy to Vercel
Write-Host ""
Write-Host "[3/3] Deploying to Vercel..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Installing Vercel CLI globally..." -ForegroundColor Yellow
npm install -g vercel
Write-Host ""
Write-Host "Logging in to Vercel..." -ForegroundColor Yellow
vercel login
Write-Host ""
Write-Host "Deploying your website to production..." -ForegroundColor Yellow
vercel --prod

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Deployment failed" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host " ✅ Deployment Complete!" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your website is now live on Vercel!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host " 1. Check the Vercel URL above" -ForegroundColor White
Write-Host " 2. Make sure environment variables are set in Vercel dashboard" -ForegroundColor White
Write-Host " 3. Test all features (payments, chat, emails)" -ForegroundColor White
Write-Host " 4. Update your domain DNS to point to Vercel (if using custom domain)" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to exit"
