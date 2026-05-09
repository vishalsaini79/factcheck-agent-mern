# Fact-Check Agent - MERN Assignment

A deployed-ready Fact-Checking Web App for PDF claim verification.

## Objective

Marketing content may contain outdated or hallucinated statistics. This app works as a **Truth Layer**:
- Upload a PDF
- Extract factual claims such as statistics, dates, financial numbers, and technical facts
- Verify claims using live web search snippets + Gemini AI
- Classify claims as:
  - Verified
  - Inaccurate
  - False / No Evidence

## Tech Stack

### Frontend
- React.js
- Vite
- CSS

### Backend
- Node.js
- Express.js
- Multer
- pdf-parse
- Gemini API
- Serper API for live web search

## Folder Structure

```text
factcheck-agent-mern/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## Local Setup

### 1. Backend

```bash
cd server
npm install
copy .env.example .env
npm run dev
```

Add your keys in `.env`:

```env
GEMINI_API_KEY=your_gemini_api_key
SERPER_API_KEY=your_serper_api_key
PORT=5000
```

Backend runs at:

```text
http://localhost:5000
```

### 2. Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## Deployment

### Backend on Render

1. Push this project to GitHub.
2. Go to Render.
3. New Web Service.
4. Select GitHub repo.
5. Root Directory: `server`
6. Build Command:

```bash
npm install
```

7. Start Command:

```bash
npm start
```

8. Add environment variables:
   - `GEMINI_API_KEY`
   - `SERPER_API_KEY`
   - `PORT=5000`

Copy the deployed backend URL, for example:

```text
https://factcheck-agent-backend.onrender.com
```

### Frontend on Vercel

1. Go to Vercel.
2. Import same GitHub repo.
3. Root Directory: `client`
4. Add environment variable:

```env
VITE_API_BASE_URL=https://your-render-backend-url.onrender.com
```

5. Deploy.

## Demo Video Script

"Hello, this is my Fact-Check Agent web app. The user can upload a PDF containing factual claims. The backend extracts claims from the PDF, searches live web evidence, and uses Gemini AI to classify each claim as Verified, Inaccurate, or False. The final report shows the claim, status, reason, corrected fact, and source."

## Assignment Deliverables

- Deployed App Link: Vercel frontend URL
- GitHub Repository: This repository
- Demo Video: 30-second screen recording showing PDF upload and fact-check report
