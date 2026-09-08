# ⚡ Quick Start Guide

## 🚀 Deploy in 5 Minutes!

### Prerequisites
- GitHub account (already have it ✅)
- Vercel account (free at vercel.com)
- Firebase account (free at firebase.google.com)

---

## Step 1: Create Firebase Project (2 min)

1. Go to https://console.firebase.google.com/
2. Click **Create a new project**
3. Name: `princess-love-story`
4. Click **Create project** → Wait for completion

---

## Step 2: Get Firebase Credentials (1 min)

1. In Firebase Console, click **gear icon** → **Project Settings**
2. Scroll to **Your apps** section
3. Click **Web** (or add if needed)
4. **Copy entire config** starting from `const firebaseConfig = {` to the closing `}`
5. **Save this somewhere** - you'll need it in Step 4

---

## Step 3: Enable Firestore (1 min)

1. In Firebase Console, click **Firestore Database**
2. Click **Create Database**
3. Choose **Start in test mode**
4. Click **Create**

---

## Step 4: Deploy to Vercel (1 min)

1. Go to https://vercel.com
2. Click **Sign up with GitHub**
3. Authorize GitHub access
4. Click **New Project**
5. Select: `Princess-Love-Story` repository
6. Click **Deploy** (it will show errors - normal!)
7. Wait for deployment to finish

---

## Step 5: Add Environment Variables (1 min)

### From your Firebase config, extract these 6 values:

```javascript
// Example Firebase config:
{
  apiKey: "AIzaSy...",                    // → NEXT_PUBLIC_FIREBASE_API_KEY
  authDomain: "your-project.firebaseapp.com",  // → NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  projectId: "your-project",               // → NEXT_PUBLIC_FIREBASE_PROJECT_ID
  storageBucket: "your-project.appspot.com",   // → NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  messagingSenderId: "123456789",          // → NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  appId: "1:123456789:web:abc..."         // → NEXT_PUBLIC_FIREBASE_APP_ID
}
```

### In Vercel:

1. Click your project name in Vercel
2. Go to **Settings** → **Environment Variables**
3. Add each variable:
   - **Key**: `NEXT_PUBLIC_FIREBASE_API_KEY`
   - **Value**: Your API Key (from Firebase config)
   - Click **Add**
4. Repeat for all 6 variables
5. Click **Save**

---

## Step 6: Redeploy (30 sec)

1. In Vercel, go to **Deployments**
2. Click the ⋯ (three dots) next to the failed deployment
3. Click **Redeploy**
4. Wait for build to complete (shows ✅)

---

## ✅ Your Site is LIVE! 🎉

**Your Vercel URL** (in the Deployments tab):
```
https://princess-love-story.vercel.app
```

OR your custom domain if you added one.

---

## 🎨 What's Included

✨ Beautiful love story website  
✨ Photo & video gallery  
✨ Spotify song embed  
✨ **Real-time message system** (visitors can leave messages!)  
✨ Falling hearts animation  
✨ Responsive mobile design  
✨ All messages saved to cloud  

---

## 🔧 Troubleshooting

### Messages don't show?
- ✅ Check all 6 Firebase variables are set in Vercel
- ✅ Verify Firestore Database exists in Firebase Console
- ✅ Open DevTools (F12) and check Console tab for errors

### Deployment says "ERROR"?
- Check Vercel Logs (click deployment)
- Most likely: Missing environment variables
- Solution: Add all 6 Firebase variables

### Want to update content?
- Edit files on GitHub
- Vercel auto-deploys (30 sec later)
- Changes go live automatically!

---

## 📱 Share Your Site

**Send this link to Princess:**
```
https://princess-love-story.vercel.app
```

She can:
✅ View your story  
✅ Watch videos  
✅ Read your letter  
✅ Leave messages  
✅ Use on any device  

---

## 🚀 Next Level Features (Optional)

Want to add more? Easy upgrades:
- Photo uploads from browser
- Password protection
- Custom domain
- Email notifications
- Countdown timer
- Guestbook for family/friends

Just ask!

---

Made with ❤️ for Princess
