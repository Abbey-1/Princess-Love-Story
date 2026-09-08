#!/bin/bash

# Princess Love Story - Setup Script
# This script sets up your Next.js project locally

echo "🎀 Princess Love Story - Setup Script"
echo "====================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo "✅ npm found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "====================================="
echo "🎉 Setup Complete!"
echo "====================================="
echo ""
echo "Next steps:"
echo "1. Create a Firebase project at https://console.firebase.google.com/"
echo "2. Get your Firebase credentials"
echo "3. Update .env.local with your credentials"
echo "4. Run: npm run dev"
echo "5. Open: http://localhost:3000"
echo ""
echo "For deployment, see DEPLOYMENT.md"
echo ""
