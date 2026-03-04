# 🔑 Getting Your API Keys for Allt I Ett Express AB

Your website is ready to go live! Just follow these 4 simple steps to activate the payment, AI chat, and email features.

## Step 1: Get Your Stripe Public Key

1. Go to https://dashboard.stripe.com/apikeys
2. Sign in to your Stripe account (create one if needed)
3. Find your **Publishable key** - it starts with `pk_test_` (for testing) or `pk_live_` (for production)
4. Copy the full key
5. Open the `.env` file in your project
6. Find this line: `VITE_STRIPE_PUBLIC_KEY=pk_test_placeholder`
7. Replace `pk_test_placeholder` with your actual Stripe key
8. Example: `VITE_STRIPE_PUBLIC_KEY=pk_test_51Hs1234567890abcdef`

## Step 2: Get Your Anthropic Claude API Key

1. Go to https://console.anthropic.com/api-keys
2. Sign in to your Anthropic account (create one if needed)
3. Click "Create Key"
4. Copy your new API key - it starts with `sk-ant-`
5. Open the `.env` file in your project
6. Find this line: `VITE_ANTHROPIC_API_KEY=placeholder`
7. Replace `placeholder` with your actual Anthropic key
8. Example: `VITE_ANTHROPIC_API_KEY=sk-ant-v0Z1234567890abcdefghijklmnop`

## Step 3: Get Your Resend Email API Key

1. Go to https://resend.com/api-keys
2. Sign in to your Resend account (create one if needed)
3. Click "Create API Key"
4. Copy your new API key - it starts with `re_`
5. Open the `.env` file in your project
6. Find this line: `VITE_RESEND_API_KEY=placeholder`
7. Replace `placeholder` with your actual Resend key
8. Example: `VITE_RESEND_API_KEY=re_1234567890abcdefghijklmnop`

## Your .env File Should Look Like This

After adding all three keys, your `.env` file should contain:

```env
VITE_APP_NAME=Allt I Ett Express AB
VITE_STRIPE_PUBLIC_KEY=pk_test_51Hs1234567890abcdef
VITE_ANTHROPIC_API_KEY=sk-ant-v0Z1234567890abcdefghijklmnop
VITE_RESEND_API_KEY=re_1234567890abcdefghijklmnop
VITE_COMPANY_EMAIL=alltiettexpressab@gmail.com
VITE_API_URL=http://localhost:5173
VITE_API_BASE_URL=http://localhost:3000/api
```

**Important**: 
- **Never commit your .env file to GitHub** - The `.gitignore` file already protects it
- Keep your API keys secret and secure
- Never share your keys with anyone
- If you accidentally expose a key, regenerate it immediately in the respective service dashboard

## Step 4: Deploy to Vercel

Once you have all three keys in your `.env` file, you're ready to deploy:

```powershell
# Windows PowerShell
npm install -g vercel
vercel login
npm run build
vercel --prod
```

```bash
# Mac / Linux
npm install -g vercel
vercel login
npm run build
vercel --prod
```

### During the Vercel Deployment, Add These Environment Variables:

1. When Vercel asks for environment variables, add all three:
   - `VITE_STRIPE_PUBLIC_KEY`: Your Stripe key from Step 1
   - `VITE_ANTHROPIC_API_KEY`: Your Anthropic key from Step 2
   - `VITE_RESEND_API_KEY`: Your Resend key from Step 3

2. Vercel will automatically use these values in production

3. Your website will be live at a URL like: `https://allt-i-ett-express-ab.vercel.app`

## Testing Locally Before Deployment

To test everything locally before going live:

```powershell
# Install dependencies
npm install

# Build the project
npm run build

# Preview the production build locally
npm run preview
```

Then open http://localhost:4173 in your browser and test:
- [ ] Chat widget appears and works (responds with "Chat assistant not configured yet" if key is placeholder)
- [ ] Stripe payment form shows on the booking page Step 5
- [ ] Contact form doesn't show errors
- [ ] All pages load without white screens
- [ ] Language toggle switches between EN, عربي, and SV (Swedish)

## Troubleshooting

**Q: Chat widget says "not configured yet"**
- A: Make sure your `VITE_ANTHROPIC_API_KEY` is set in `.env` and is NOT the word "placeholder"

**Q: Booking form payment section won't load**
- A: Check that `VITE_STRIPE_PUBLIC_KEY` is set in `.env` and starts with `pk_test_` or `pk_live_`

**Q: Build fails or website shows errors**
- A: Make sure all three API keys are added to `.env` and there are no typos

**Q: Website works locally but not on Vercel**
- A: Make sure you added all three environment variables in Vercel dashboard (Project Settings > Environment Variables)

## Need Help?

- Stripe Support: https://support.stripe.com
- Anthropic Support: https://support.anthropic.com
- Resend Support: https://resend.com/support

## Your Website Is Ready! 🎉

You now have a complete, production-ready website for Allt I Ett Express AB with:
- ✅ Payment processing with Stripe
- ✅ AI chat assistant with Claude
- ✅ Email notifications with Resend
- ✅ Mobile-responsive design
- ✅ Multi-language support (English, Arabic, Swedish)
- ✅ Professional booking system

Go live now and start accepting bookings!
