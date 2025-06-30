# Day 13 – React Router Basics

React Router helps you build **single-page applications** (SPAs) with **multiple views** without full page reloads.

It allows you to map URLs to components and handle dynamic navigation inside React.

---

## ✨ Key Concepts

✅ `BrowserRouter` wraps your app and enables routing  
✅ `Route` maps a URL path to a component  
✅ `Link` replaces `<a>` for navigation without reload  
✅ `useNavigate()` is used to navigate programmatically  
✅ `useParams()` gets dynamic values from the URL  
✅ Routes are matched from top to bottom — use `exact` when needed

---

## ⚠️ Common Mistakes

❌ Forgetting to wrap app with `BrowserRouter`  
❌ Using `<a>` tags instead of `<Link>`  
❌ Expecting full page reload behavior  
❌ Not using `exact` in older versions  
❌ Not handling `404` routes

---

## 🧠 React Interview Hotspots

❓ What is React Router and why is it needed in SPAs?  
❓ Difference between `<a>` and `<Link>`?  
❓ How does `useParams` work in dynamic routing?  
❓ When would you use `useNavigate()` vs `<Link>`?  
❓ How is client-side routing different from server-side?

---

## 🛠️ Mini Exercise

Create 3 pages: Home, About, and Profile  
Navigate between them using `<Link>`  
Use `useParams` to show `Profile/:username`

---

## 📘 Resources

[React Router Docs](https://reactrouter.com/en/main/start/tutorial)  
[React Router Cheatsheet](https://reactrouter.com/en/main)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
