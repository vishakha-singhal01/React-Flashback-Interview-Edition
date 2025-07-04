# Day 18 – Lazy Loading & Code Splitting

React apps grow fast and if you don’t split your code, your bundle grows with it.  
Enter **Lazy Loading** and **Code Splitting** techniques to load parts of your app only when needed.

---

## ✨ Key Concepts

✅ **Code Splitting** breaks your bundle into smaller chunks  
✅ `React.lazy()` lets you lazy load a component  
✅ Wrap lazy components with `Suspense` to show fallback UI while loading  
✅ Improves performance, especially for routes or large components  
✅ Pair with `React Router` for route-based splitting  
✅ Works great for optimizing load time and user experience

---

## ⚠️ Common Mistakes

❌ Forgetting to wrap `lazy` components inside `Suspense`  
❌ Putting everything in one big bundle  
❌ Lazy loading too many small components (hurts UX)  
❌ No fallback UI — leads to blank screen or poor UX  
❌ Trying to use hooks outside loaded component (not allowed)

---

## 🧠 React Interview Hotspots

❓ What is code splitting and why is it needed?  
❓ How does `React.lazy` work internally?  
❓ What’s the role of `Suspense` in lazy loading?  
❓ When should you avoid lazy loading?  
❓ How can lazy loading help improve app performance?

---

## Mini Exercise

Create two components — one normal, one lazily loaded.  
Use `Suspense` to display a loader when the lazy one is loading.

---

## 📘 Resources

[React Docs – Code Splitting](https://reactjs.org/docs/code-splitting.html)  
[React Docs – Lazy & Suspense](https://reactjs.org/docs/react-api.html#reactlazy)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
