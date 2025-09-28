# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Convert to Vite React project"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it as a Vite project
   - Add your environment variables:
     - `VITE_PRIVY_APP_ID`
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`
     - `VITE_ALCHEMY_API_KEY`
     - `VITE_PAYSTREAM_ESCROW_ADDRESS`
     - `VITE_WRAPPED_PYUSD_ADDRESS`
   - Click "Deploy"

3. **That's it!** Your app will be live at `https://your-project-name.vercel.app`

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

## Project Structure

```
├── src/                 # React source code
├── public/             # Static assets
├── index.html          # Entry HTML file
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── vercel.json         # Vercel deployment config
└── README.md           # Project documentation
```

## Key Changes Made

- ✅ Moved from client/server structure to direct Vite React project
- ✅ Updated Tailwind config paths
- ✅ Fixed import paths for ImageKit (using mock implementation)
- ✅ Removed server-specific dependencies
- ✅ Added Vercel configuration for SPA routing
- ✅ Updated package.json scripts for Vite

Your project is now ready for deployment on Vercel! 🚀