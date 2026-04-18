This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and add your Google Analytics Measurement ID:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

To get your Google Analytics ID:
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property (or use existing)
3. Under Admin → Data Streams → Web, copy your Measurement ID
4. Paste it into `.env.local`

**Note:** Without this ID, analytics will be disabled (no errors, just won't track).

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Features

### 📊 Analytics
- Google Analytics integration for tracking visitor behavior
- Privacy-focused implementation with Next.js Script optimization

### 🖼️ Image Optimization
- Automatic image optimization using Next.js Image component
- Converts images to modern formats (AVIF, WebP) on-demand
- Responsive images with automatic srcset generation
- Lazy loading for better performance

### 🎨 Modern UI
- Custom neural network animation background
- Interactive skill filtering
- GitHub activity integration
- Responsive design with Tailwind CSS

## Project Structure

```
my-portfolio/
├── app/
│   ├── components/       # React components
│   │   ├── GoogleAnalytics.js
│   │   ├── ContactForm.js
│   │   └── ...
│   ├── page.js          # Home page
│   ├── resume/          # Resume page
│   └── layout.js        # Root layout
├── lib/
│   └── resume-data.js   # Centralized portfolio data
├── public/
│   └── images/          # Project screenshots
└── .env.local           # Environment variables (not committed)
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
