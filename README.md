# 💕 Princess Love Story - Dynamic Edition

A beautiful, dynamic love story website built with Next.js and Firebase. Now with real-time messages, data persistence, and more!

## 🚀 What's New (Dynamic Features)

✨ **Real-time Messaging** - Leave dynamic messages that are saved to the cloud  
✨ **Firebase Backend** - Secure database for storing memories and messages  
✨ **Next.js Framework** - Server-side rendering and optimized performance  
✨ **Scalable** - Easy to add more features like photo albums, timelines, etc.  
✨ **All Your Design Preserved** - Same beautiful UI with added functionality  

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- A Firebase account (free at [firebase.google.com](https://firebase.google.com))

### Step 1: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 2: Setup Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Name it "Princess-Love-Story" and follow the setup
4. Go to **Project Settings** (gear icon)
5. Copy your Firebase configuration
6. Copy `.env.local.example` to `.env.local`
7. Paste your Firebase credentials into `.env.local`

### Step 3: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Choose "Start in test mode" (for development)
4. Click **Create**

### Step 4: Run Locally
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dynamic page
│   └── globals.css         # All styles
├── lib/
│   └── firebase.ts         # Firebase configuration
├── public/
│   ├── script.js           # Client-side interactions
│   ├── music.mp3           # (Add your song here)
│   └── *.mp4, *.jpeg       # Your media files
├── .env.local.example      # Environment template
└── next.config.js          # Next.js configuration
```

## 🚀 Deploy to Production

### Option 1: Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repo
4. Add your `.env.local` variables in Vercel settings
5. Deploy!

```bash
# Command line deployment
npm install -g vercel
vercel
```

### Option 2: Deploy to Other Platforms

- **Netlify**: `npm run build` then deploy `out/` folder
- **Railway**: Connect your GitHub repo
- **Render**: Similar to Railway

## 📝 Features Included

- ✅ Story section with timeline
- ✅ Why You section with characteristics
- ✅ Media gallery (photos & videos)
- ✅ Spotify song embed
- ✅ Letter section
- ✅ **NEW:** Dynamic message system with Firebase
- ✅ Falling hearts animation
- ✅ Responsive design
- ✅ Smooth scrolling navigation

## 🎵 Add Background Music

1. Add your song as `music.mp3` in the `public/` folder
2. The music button will automatically work

## 📱 Add New Media

1. Add your images/videos to the `public/` folder
2. Update the `src` in `app/page.tsx`

## 💾 Database Structure

### Messages Collection
```
{
  text: "Your message here",
  timestamp: 2024-01-15T10:30:00Z
}
```

## 🔒 Security Rules (for production)

Update your Firestore rules in Firebase Console:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document=**} {
      allow read: if true;
      allow create: if request.auth == null || request.auth.uid != null;
      allow update, delete: if false;
    }
  }
}
```

## 🎨 Customization

- **Colors**: Edit `app/globals.css`
- **Content**: Edit `app/page.tsx`
- **Firebase Config**: Update `lib/firebase.ts`
- **Domain**: Add custom domain in Vercel/hosting provider

## 📞 Troubleshooting

**Messages not showing?**
- Check Firebase config in `.env.local`
- Verify Firestore is enabled
- Check browser console for errors

**Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

## 🤝 Next Steps

Ideas for adding more dynamic features:
- User authentication (let Princess sign in)
- Photo upload from browser
- Countdown timer to special dates
- Guestbook for friends/family
- Memory timeline with dates
- Shared calendar

## ❤️ Made with Love

This is your unique love story. Make it even more special by customizing it!

---

**Questions?** Check the [Next.js docs](https://nextjs.org/docs) or [Firebase docs](https://firebase.google.com/docs)
