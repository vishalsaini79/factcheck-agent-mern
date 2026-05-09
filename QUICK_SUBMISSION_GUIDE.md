# Quick Submission Guide

## What this app does

This is a MERN-style Fact-Check Agent.

Flow:
PDF Upload → Node backend extracts PDF text → Gemini extracts claims → Serper searches live web → Gemini verifies evidence → React displays report.

## First Run Locally

### Backend
```bash
cd server
npm install
copy .env.example .env
npm run dev
```

Add API keys in `.env`.

### Frontend
```bash
cd client
npm install
npm run dev
```

Open:
```text
http://localhost:5173
```

## GitHub Upload

```bash
git init
git add .
git commit -m "Fact check agent assignment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Deploy Backend on Render

Root Directory:
```text
server
```

Build Command:
```text
npm install
```

Start Command:
```text
npm start
```

Environment Variables:
```text
GEMINI_API_KEY=your_key
SERPER_API_KEY=your_key
PORT=5000
```

## Deploy Frontend on Vercel

Root Directory:
```text
client
```

Environment Variable:
```text
VITE_API_BASE_URL=https://your-render-backend-url.onrender.com
```

## Form Submission

- Deployed App Link: Vercel frontend URL
- GitHub Repository: GitHub repo URL
- Demo Video: 30-second screen recording
