# ⚡ haddnist // devlog & accountability

A public daily devlog, learning diary, and accountability tracker built with the official **Astro Blog** theme and automatically deployed to **GitHub Pages** via GitHub Actions.

## 🌟 What is this?
Instead of hand-rolling custom HTML and CSS from scratch, this site is built using **Astro**, the industry standard for developer blogs and devlogs. It comes with pre-made UI components, responsive typography, RSS feed generation, SEO optimization, and Markdown (`.md` / `.mdx`) support out of the box!

---

## 🚀 How to Publish a New Daily Post (1 Minute)

When you start a new day or want to update your checklist:

### 1. Create or edit a Markdown file in `src/content/blog/`
Create a file like `src/content/blog/2026-07-02-next-sprint.md`:
```markdown
---
title: 'Day 2: Rust Structs & Concurrency Memory Models'
description: 'Working through Brown Rust Book Ch 5 and KAIST Lecture 2.'
pubDate: 'Jul 02 2026'
---

Today's notes and goals...

## 🎯 Today's Checklist
- [ ] Watch KAIST Lecture 2
- [x] Complete Rust Book Chapter 5
```

### 2. Push to GitHub!
In your terminal, run:
```bash
git add .
git commit -m "📝 Add daily devlog post for July 2"
git push origin main
```

**That's it!** GitHub Actions will automatically detect your change, compile your Astro site in ~30 seconds, and publish the live update to [https://haddnist.github.io](https://haddnist.github.io)!

---

## 💻 Local Development

If you want to preview your site locally on your computer:

```bash
# Start the local development server
npm run dev

# Open in browser
http://localhost:4321
```

To test a production build:
```bash
npm run build
npm run preview
```
