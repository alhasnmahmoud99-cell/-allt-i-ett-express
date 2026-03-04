#!/bin/bash

# =============================================================================
# Allt I Ett Express AB - One-Click Deployment Script for Mac/Linux
# =============================================================================
# This script will:
# 1. Install all dependencies
# 2. Build the project for production
# 3. Deploy to Vercel
# =============================================================================

set -e  # Exit on any error

echo ""
echo "============================================================"
echo " Allt I Ett Express AB - Deployment Script"
echo "============================================================"
echo ""
echo "This script will build and deploy your website to Vercel."
echo ""
echo "Prerequisites:"
echo " 1. Node.js installed (https://nodejs.org)"
echo " 2. Vercel account created (https://vercel.com)"
echo " 3. .env file with API keys filled in"
echo ""
read -p "Press Enter to continue..."

# Step 1: Install dependencies
echo ""
echo "[1/3] Installing dependencies..."
npm install
echo "✓ Dependencies installed"

# Step 2: Build project
echo ""
echo "[2/3] Building project for production..."
npm run build
echo "✓ Build complete"

# Step 3: Deploy to Vercel
echo ""
echo "[3/3] Deploying to Vercel..."
echo ""
echo "Installing Vercel CLI..."
npm install -g vercel
echo ""
echo "Logging in to Vercel..."
vercel login
echo ""
echo "Deploying your website..."
vercel --prod

echo ""
echo "============================================================"
echo " ✅ Deployment Complete!"
echo "============================================================"
echo ""
echo "Your website is now live on Vercel!"
echo ""
echo "Next steps:"
echo " 1. Check the Vercel URL above"
echo " 2. Make sure environment variables are set in Vercel dashboard"
echo " 3. Test all features (payments, chat, emails)"
echo " 4. Update your domain DNS to point to Vercel (if using custom domain)"
echo ""
