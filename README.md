# 🔗 Snipply URL Shortener (Modern Stack)

A sleek, modern URL shortener built using React, Tailwind CSS, Supabase, and Vite. It supports user authentication, dashboard analytics, link creation and redirection, device/location-based stats, and a polished component system.

![Snipply Banner](./public/Snipply.webp)

## 🚀 Features

- 🔐 Auth with Supabase (Sign up, Login)
- 🔗 Shorten long URLs and redirect
- 📊 View analytics by device/location
- 🧠 React Context for global state
- 🧩 Component-driven structure
- 🎨 Styled with Tailwind CSS
- ⚡ Built with Vite for speed

---

## 📁 Project Structure

```
snipply-url-shortener-flop/
├── public/                           # Static assets
│   ├── favicon.ico
│   └── Snipply.webp
├── src/
│   ├── App.jsx                       # Root app entry
│   ├── index.css                     # Tailwind styles
│   ├── main.jsx                      # Mount point
│   ├── context.jsx                   # Global context
│   ├── db/                           # Supabase + API logic
│   │   ├── apiAuth.js
│   │   ├── apiClicks.js
│   │   ├── apiUrls.js
│   │   └── supabase.js
│   ├── hooks/                        # Custom hooks
│   │   └── use-fetch.jsx
│   ├── layouts/                      # Layout wrappers
│   │   └── app-layout.jsx
│   ├── lib/                          # Helpers
│   │   └── utils.js
│   ├── components/
│   │   ├── create-link.jsx
│   │   ├── device-stats.jsx
│   │   ├── error.jsx
│   │   ├── header.jsx
│   │   ├── link-card.jsx
│   │   ├── location-stats.jsx
│   │   ├── login.jsx
│   │   ├── require-auth.jsx
│   │   ├── signup.jsx
│   │   ├── magicui/                  # Special interactive UI
│   │   │   └── interactive-hover-button.jsx
│   │   └── ui/                       # Reusable UI primitives
│   │       ├── avatar.jsx
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── dialog.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── input.jsx
│   │       ├── placeholders-and-vanish-input.jsx
│   │       └── tabs.jsx
│   └── pages/                        # Page components (routing)
│       ├── auth.jsx
│       ├── dashboard.jsx
│       ├── landing.jsx
│       ├── link.jsx
│       └── redirect-link.jsx
├── .env                              # Environment config
├── index.html                        # Main HTML file
├── package.json                      # Dependencies
├── tailwind.config.js                # Tailwind CSS config
├── vite.config.js                    # Vite config
```

---

## 🛠 Tech Stack

| Tech        | Usage                        |
|-------------|------------------------------|
| **React**   | UI components & SPA routing  |
| **Tailwind**| Utility-first styling        |
| **Supabase**| Auth + Realtime DB backend   |
| **Vite**    | Fast build tool for dev/prod |
| **ESLint**  | Linting for clean code       |

---

## 🔧 Setup Instructions

1. **Clone the repository**

```
git clone https://github.com/YourUsername/snipply-url-shortener-flop.git
cd snipply-url-shortener-flop
```

2. **Install dependencies**

```
npm install
```

3. **Setup environment**

Create a `.env` file with
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start the development server**

```
npm run dev
```

App will run at: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

This project can be deployed on:

- **Vercel**
- **Netlify**
- **Render**
- **Surge.sh**

> Make sure to add the \`.env\` variables in your host’s dashboard.

---

## 🤝 Contributing

Contributions, issues, and PRs are welcome!

1. Fork the repo
2. Create a new branch: \`git checkout -b feature-name\`
3. Commit your changes
4. Push and open a PR

---

## 📄 License

MIT License. See the [LICENSE](LICENSE) file for more information.

---

Made with ❤️ by [Bhavin](https://github.com/YourUsername)
