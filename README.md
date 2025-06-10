
---

## 🎨 Frontend `README.md`

# 🎯 Chirp Frontend

A React + Vite single-page application for a modern, Twitter-like experience:

- Infinite scroll feed of tweets  
- User authentication (signup, login)  
- Create, update, delete tweets  
- Like and comment on tweets  
- Profile, analytics (pie chart), and messages screens  
- Admin dashboard with user management  
- Styled with Tailwind CSS & Framer Motion animations  

---

## 🚀 Quick Start

### Prerequisites

- Node.js v20+  
- Backend API running locally at `http://localhost:8000`
- Backend repository - https://github.com/DigpalSinghPanwar/tweetapp

### Setup

1. **Clone and install**  
   ```bash
   git clone https://github.com/DigpalSinghPanwar/chirp-frontend.git
   cd chirp-frontend
   npm install
    
2. Configure environment variables
     ```bash
   cp .env.example .env
   VITE_API_BASE_URL=http://localhost:8000/api/v1
   # Edit .env file and add your API key
   

3. Run the app
   ```bash
   npm run dev
   
---

🗂️ Project Structure

<pre> ```bash 
src/
├── api/              # Axios instance & API calls
├── components/       # Reusable UI pieces (TweetCard, CommentList, etc.)
├── pages/            # Route components (Home, Profile, Analytics, Messages)
├── hooks/            # Custom hooks (useGet, useInfiniteScroll, etc.)
├── context/          # React Context for auth & global state
├── assets/           # Images, icons, SVGs
└── App.jsx           # Routes & layout
``` </pre>

---

📚 Key Libraries

React Router for client-side routing

Axios for API requests

Tailwind CSS for utility-first styling

Framer Motion for smooth animations

React Hook Form for form handling

Chart.js or react-chartjs-2 for analytics pie chart

---

🎨 UI Overview

Landing Page: signup/login

Dashboard Layout: Sidebar (nav), main content, Infinite scroll tweet feed, rules/info panel

Profile: User details

Analytics: Pie chart of tweets/likes/comments

Messages: Chat list + conversation view

---

🔮 Future Work

Add admin dashboard

Integrate commenting UI/UX

Build messages screen & backend integration

Add dark mode toggle

Improve accessibility (aria, keyboard nav)

Add unit and integration tests

---

📄 License & Contact

MIT License.

Built by Digpal Singh Panwar.

Feel free to connect on LinkedIn - https://www.linkedin.com/in/digpal-singh-panwar-875b551b0
