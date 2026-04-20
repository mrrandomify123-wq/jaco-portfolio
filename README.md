# Jaco Yang — Portfolio

A Next.js portfolio site, ready to deploy on Vercel.

---

## 🚀 Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Click **Deploy** — that's it!

---

## ✏️ How to Update Content

### Add or Edit Projects

Open `data/projects.js` — all projects and personal info live here.

**To add a new UX project**, copy one entry in the `uxProjects` array:

```js
{
  id: "my-new-project",          // unique slug
  title: "My New Project",
  date: "January 2025",
  tags: ["UI Design", "UX Research"],
  image: "https://...",          // paste image URL or use /images/filename.jpg
  href: "/work/my-new-project",  // links to this URL
  featured: true,
},
```

**To add a new Architecture project**, do the same in `architectureProjects`.

### Update Personal Info

In `data/projects.js`, edit the `siteConfig` object at the bottom:

```js
export const siteConfig = {
  name: "Jaco Yang",
  location: "Melbourne, Victoria",
  email: "yangjaco@gmail.com",
  linkedin: "https://www.linkedin.com/in/jacoyang/",
  resume: "https://...",
};
```

---

## 🗂 Project Structure

```
jaco-portfolio/
├── data/
│   └── projects.js       ← ✏️ Edit this to update projects & info
├── pages/
│   ├── index.js          ← Home page
│   ├── work.js           ← All projects page
│   ├── about.js          ← About page
│   └── 404.js            ← Not found
├── components/
│   ├── Nav.js
│   ├── ProjectCard.js
│   └── CtaBanner.js
├── styles/
│   └── globals.css
├── hooks/
│   └── useScrollFade.js
└── next.config.js
```

---

## 🛠 Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)
