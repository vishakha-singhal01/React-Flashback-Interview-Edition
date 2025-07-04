# Day 17 – Error Boundaries & Suspense

Not everything goes right in production and that’s where **Error Boundaries** and **Suspense** come in.

They help you build resilient and user-friendly UIs by catching errors and handling async loading.

---

## ✨ Key Concepts

✅ **Error Boundaries** catch JavaScript errors in child components during rendering  
✅ They log error details and render fallback UI  
✅ Must be class components (`componentDidCatch`)  
✅ **Suspense** is used to show fallback content while components or data are loading  
✅ Works with `lazy()` for code splitting or data fetching with `React 18` features

---

## ⚠️ Common Mistakes

❌ Trying to use hooks like `useEffect` to catch render errors (doesn’t work)  
❌ Not using fallback UIs — leading to blank screens  
❌ Forgetting that Suspense only works with **lazy-loaded components** or async boundaries  
❌ Using error boundaries in the wrong level of the tree (too deep or too shallow)

---

## 🧠 React Interview Hotspots

❓ What is an Error Boundary? How does it work?  
❓ Can we use hooks inside Error Boundaries?  
❓ Difference between try/catch and Error Boundary?  
❓ What does `React.Suspense` do?  
❓ What are the requirements for Suspense to work?

---

## Mini Exercise

Create a component that intentionally throws an error and wrap it inside an Error Boundary.  
Use `React.lazy` with `Suspense` to load a fake component and show a fallback.

---

## 📘 Resources

[React Docs – Error Boundaries](https://reactjs.org/docs/error-boundaries.html)  
[React Docs – Suspense](https://reactjs.org/docs/react-api.html#reactsuspense)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
