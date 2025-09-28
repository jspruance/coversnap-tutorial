# CoverSnap Tutorial

A minimal Next.js + OpenAI demo app for generating tailored cover letters with GPT models.  
This repo accompanies the tutorial series showing how to build and integrate LLMs into a modern web app.

YouTube tutorial:
https://www.youtube.com/watch?v=OUwleDqAwXI

---

## 🚀 Getting Started

### 1. Clone the repo
git clone https://github.com/jspruance/coversnap-tutorial.git  
cd coversnap-tutorial/1-coversnap-starter

### 2. Install dependencies
npm install

### 3. Set up your OpenAI API key
- Sign up / log in at https://platform.openai.com/
- Create an API key from your API keys dashboard: https://platform.openai.com/account/api-keys
- Add it to a `.env` or `.env.local` file in the root of the project:

OPENAI_API_KEY=your_api_key_here

> 🔑 **Never commit your API key to GitHub.** Keep it in local env files or secrets managers.

### 4. Run the dev server
npm run dev

Then open http://localhost:3000 in your browser.

---

## Production app
https://coversnapapp.com/

---

## 📖 Docs & References
- OpenAI API Docs: https://platform.openai.com/docs/guides/text
- Next.js Documentation: https://nextjs.org/docs

---

## 🛠️ Features
- Next.js 14 (App Router)
- TailwindCSS for styling
- API route (`/api/generate`) using OpenAI’s Responses API
- Configurable tone and length for cover letters
- Example form + results display

---

## 📜 License
MIT — feel free to use and adapt.


