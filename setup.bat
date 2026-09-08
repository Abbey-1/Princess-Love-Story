@echo off
REM Princess Love Story - Setup Script for Windows

echo 🎀 Princess Love Story - Setup Script
echo =====================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/
    exit /b 1
)

echo ✅ Node.js found: %NODE_VERSION%
node --version
echo ✅ npm found:
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies
    exit /b 1
)

echo ✅ Dependencies installed successfully!
echo.
echo =====================================
echo 🎉 Setup Complete!
echo =====================================
echo.
echo Next steps:
echo 1. Create a Firebase project at https://console.firebase.google.com/
echo 2. Get your Firebase credentials
echo 3. Update .env.local with your credentials
echo 4. Run: npm run dev
echo 5. Open: http://localhost:3000
echo.
echo For deployment, see DEPLOYMENT.md
echo.
pause
