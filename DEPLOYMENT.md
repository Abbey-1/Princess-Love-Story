# 🚀 Deployment Guide - Princess Love Story

## Step-by-Step Deployment to Vercel

### Step 1: Prepare Your Repository
✅ Your code is already pushed to GitHub
✅ All configuration files are in place

### Step 2: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Create a new project**
3. Name it: `princess-love-story`
4. Disable Google Analytics (optional)
5. Click **Create project** and wait

### Step 3: Get Firebase Credentials

1. In Firebase Console, click the **gear icon** → **Project Settings**
2. Scroll down to **Your apps** section
3. Click **Web** icon (if not already created, click **Add app**)
4. Copy your Firebase config - it looks like:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### Step 4: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Choose **Start in test mode**
4. Select region (closest to you)
5. Click **Create**

### Step 5: Set Firestore Security Rules

1. In Firestore, go to **Rules** tab
2. Replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{document=**} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if false;
    }
  }
}
```

3. Click **Publish**

### Step 6: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click **New Project**
4. Select your `Princess-Love-Story` repository
5. Framework: **Next.js** (should auto-detect)
6. Click **Deploy** (it will fail with env errors - that's OK)

### Step 7: Add Environment Variables to Vercel

1. After deployment, go to your project in Vercel
2. Click **Settings** → **Environment Variables**
3. Add these 6 variables from your Firebase config:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Your API Key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Your Auth Domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Your Project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Your Storage Bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Your Sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Your App ID |

4. Click **Save**

### Step 8: Redeploy

1. Go to **Deployments** tab
2. Click the three dots on the latest deployment
3. Click **Redeploy**
4. Wait for the build to complete

### ✅ Your Site is Live!

Your Vercel deployment gives you a URL like:
```
https://princess-love-story.vercel.app
```

### Step 9: Optional - Custom Domain

1. Go to Vercel **Settings** → **Domains**
2. Add your custom domain (if you own one)
3. Follow DNS setup instructions

---

## 🔗 Your Live Site URL

Once deployed, share this link:
```
https://princess-love-story.vercel.app
```

Or your custom domain if you added one.

---

## ✨ Features Now Live

✅ Beautiful love story display  
✅ Photo gallery  
✅ Video gallery  
✅ Spotify integration  
✅ **Real-time message system** (syncs to Firebase)  
✅ Responsive on all devices  
✅ Falling hearts animation  

---

## 📞 Troubleshooting

### Messages not showing?
- Check that `.env.local` variables are in Vercel Settings
- Verify Firestore Database is created
- Check browser console (F12) for errors

### Deployment fails?
- Make sure all Firebase variables are set
- Check Vercel logs: **Deployments** → **View logs**

### Need to update code?
- Make changes in GitHub
- Vercel auto-deploys when you push
- Changes go live in ~30 seconds

---

Made with ❤️ for Princess
