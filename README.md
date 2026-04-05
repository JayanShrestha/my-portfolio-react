# 🚀 My Portfolio — React + Vite + Tailwind CSS

A modern, fast, and fully responsive developer portfolio built using **React**, **Vite**, and **Tailwind CSS**.  
This portfolio showcases my projects, skills, experience, and blog posts with smooth UI/UX, reusable components, and clean code architecture.

---

## ✨ Features

- ⚡ **Vite-powered** fast development & optimized builds  
- 🎨 **Tailwind CSS** for utility-first, responsive styling  
- 🌙 **Dark/Light mode** with smooth transitions  
- 🧩 **Reusable components** for scalability  
- 📄 **Dynamic Blog Pages** with HTML-rendered content  
- 🖼️ **Project cards** with images & component-driven data  
- 🔗 **Social links** (GitHub, LinkedIn, Blog)  
- ☁️ **Deployed on Cloudflare Pages** with CI/CD  
- 📱 Fully responsive across all devices  

---

## 🛠️ Tech Stack

| Category | Technologies |
|---------|--------------|
| Frontend | React, Vite, Tailwind CSS |
| UI/UX | Custom hooks, animations, transitions |
| Deployment | Cloudflare Pages |
| Tools | Git, GitHub, Lucide Icons |

---

## 📂 Project Structure

src/<br>
├── components/      # Reusable UI components<br>
├── pages/           # Home, Projects, Blog, BlogPost, Contact<br>
├── data/            # Blog posts & project data (JS-based JSON)<br>
├── assets/          # Images & static assets<br>
├── App.jsx          # Main router<br>
└── main.jsx         # App entry point

Code

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/JayanShrestha/my-portfolio-react.git
cd my-portfolio-react
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Create a .env file (optional for backend integrations)
```bash
VITE_API_BACKEND=https://your-backend-url.com
```
4️⃣ Run the development server
```bash
npm run dev
```
5️⃣ Build for production
```bash
npm run 
```
🌐 Deployment (Cloudflare Pages)
This project is deployed on Cloudflare Pages with automatic CI/CD.

Cloudflare automatically builds using:

```bash
Build command: npm run build
Build output:  dist
```
Environment variables (if used) must be added in:

Cloudflare Pages → Settings → Environment Variables

📝 Blog System
Blog posts are stored as JavaScript objects with HTML content:

js
```bash
export const posts = {
  "Using-Resend-Api": {
    title: "Using Resend API",
    content: "<h2>How I built email service...</h2>"
  }
};
```
Rendered using:

jsx
```bash
<div dangerouslySetInnerHTML={{ __html: post.content }} />
```

🤝 Contributing
This is a personal portfolio, but suggestions and improvements are welcome.
Feel free to open an issue or submit a pull request.

📬 Contact
If you'd like to connect or collaborate:

Portfolio: https://jayanshrestha.com

LinkedIn: https://linkedin.com/in/jayan-shrestha

GitHub: https://github.com/JayanShrestha 

Email: jayanshrestha055@gmail.com

⭐ Support
If you found this project helpful, consider giving it a star on GitHub!
