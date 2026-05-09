# Fact-Check Agent

AI-powered PDF Fact Verification Web Application

## Overview

Fact-Check Agent is a web application that detects outdated, false, or hallucinated claims inside PDF documents using AI and live web verification.

Users can upload a PDF document, and the system will:

* Extract factual claims
* Search live web evidence
* Verify claim accuracy
* Classify results as:

  * Verified
  * Inaccurate
  * False

This project was developed for the Product Management Assessment.

---

# Features

* PDF Upload Interface
* Automated Claim Extraction
* AI-Based Fact Verification
* Live Web Evidence Search
* Verification Report Dashboard
* Modern Responsive UI
* Fallback Verification System

---

# Tech Stack

## Frontend

* React.js
* Vite
* CSS

## Backend

* Node.js
* Express.js

## APIs & AI

* Google Gemini API
* Serper API

## Other Libraries

* pdf-parse
* multer
* axios
* cors
* dotenv

---

# Project Structure

```bash
factcheck-agent-mern/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── index.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/vishalsaini79/factcheck-agent-mern.git
```

---

# Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
GEMINI_API_KEY=gemini_api_key
SERPER_API_KEY=serper_api_key
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Deployment

## Backend Deployment

* Platform: Render

## Frontend Deployment

* Platform: Render / Vercel

Environment Variable:

```env
VITE_API_BASE_URL = https://factcheck-agent-mern.onrender.com
```

---

# How It Works

1. User uploads a PDF
2. System extracts text from PDF
3. AI identifies factual claims
4. Web search gathers evidence
5. Claims are verified
6. Results are displayed in a report table

---

# Sample Verification Output

| Claim                              | Status     |
| ---------------------------------- | ---------- |
| Apple was founded in 1976          | Verified   |
| ChatGPT launched in 2015           | False      |
| India population 100 crore in 2025 | Inaccurate |

---

# Future Improvements

* Multi-language verification
* Better AI reasoning
* Real-time citation ranking
* OCR support for scanned PDFs
* Export verification reports

---

# Author

Vishal Saini
B.Tech CSE
JSS Academy of Technical Education, Noida

---

# License

This project is developed for educational and assessment purposes.
