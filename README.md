# 🚀 Developer Portfolio — Next.js + Tailwind + Framer Motion

A highly professional, dark-themed developer portfolio for Software Engineers, Game Developers, and Android Developers.

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata + fonts
│   └── page.tsx            # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile drawer
│   ├── Hero.tsx            # Hero with typewriter + floating card
│   ├── About.tsx           # Bio + focus areas
│   ├── Skills.tsx          # Skill cards grid
│   ├── Projects.tsx        # Project showcase grid
│   ├── Experience.tsx      # Vertical timeline
│   ├── Contact.tsx         # Form + social links
│   └── Footer.tsx          # Footer
├── data/
│   └── index.ts            # ← EDIT YOUR INFO HERE
├── hooks/
│   └── useTypewriter.ts    # Typewriter animation hook
└── styles/
    └── globals.css         # Global styles + Tailwind
```

---

## ⚙️ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## ✏️ Customization

**All your personal data lives in one file:**

```
src/data/index.ts
```

Edit:
- `personalInfo` — your name, email, GitHub, LinkedIn, CV URL
- `typingPhrases` — the typewriter role list
- `skills` — your tech stack categories and items
- `projects` — your project showcase cards
- `timeline` — your experience/education timeline

**Place your CV at:** `public/cv.pdf`

---

## 🌐 Deployment Guide

### Option A — Vercel (Recommended — Free)

```bash
# Step 1: Initialize Git repo
git init
git add .
git commit -m "feat: initial portfolio commit"

# Step 2: Push to GitHub
# Go to https://github.com/new → create a repo called "portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# Step 3: Deploy to Vercel
# Option i — CLI
npx vercel
# Follow prompts → it auto-detects Next.js and deploys!

# Option ii — Dashboard
# 1. Go to https://vercel.com → "Add New Project"
# 2. Import your GitHub repo
# 3. Click Deploy — done! 🎉
# 4. Every git push to 'main' auto-redeploys
```

**Your site will be live at:** `https://portfolio-xyz.vercel.app`
**Custom domain:** Add in Vercel Dashboard → Project → Settings → Domains

---

### Option B — Netlify (Free)

```bash
# Step 1: Push to GitHub (same as above)

# Step 2: Deploy via CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=out

# OR via Dashboard:
# 1. Go to https://app.netlify.com → "Add new site"
# 2. Connect GitHub → select your repo
# 3. Build command: npm run build
# 4. Publish directory: out
# 5. Click Deploy — every push auto-deploys ✅
```

---

### Option C — AWS Amplify (Free tier)

```bash
# 1. Push to GitHub (same as above)
# 2. Go to https://console.aws.amazon.com/amplify
# 3. Click "New App" → "Host web app"
# 4. Connect GitHub → select repo → select main branch
# 5. Build settings (auto-detected or paste):
#    Build command:  npm run build
#    Output dir:     out
# 6. Click "Save and Deploy" — auto-deploys on every push ✅
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Framework (App Router, static export) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| Google Fonts | Syne + DM Mono + Outfit |

---

## 📄 License

MIT — use it, customize it, make it yours.
