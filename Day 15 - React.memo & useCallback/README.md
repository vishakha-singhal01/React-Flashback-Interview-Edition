# Day 15 – React.memo & useCallback

Optimizing your React apps becomes crucial as components grow.

`React.memo` and `useCallback` help **prevent unnecessary re-renders** and improve performance especially when passing props or callbacks down the component tree.

---

## ✨ Key Concepts

✅ `React.memo(Component)` memoizes the component — it only re-renders if props change  
✅ `useCallback(fn, deps)` memoizes the function itself — returns same instance unless dependencies change  
✅ Great when passing callbacks to memoized child components  
✅ Useful in lists, expensive renders, or high-frequency updates  
✅ `useMemo()` is for values, `useCallback()` is for functions

---

## ⚠️ Common Mistakes

❌ Overusing memoization when not needed (adds overhead)  
❌ Forgetting to wrap callback with `useCallback` for memoized children  
❌ Not understanding that shallow comparison is used in `React.memo`  
❌ Assuming `React.memo` makes every app faster — it's a **performance tool**, not a guarantee

---

## 🧠 React Interview Hotspots

❓ What is `React.memo` and how does it work?  
❓ When to use `useCallback` over normal function?  
❓ What problem does `useCallback` solve?  
❓ Can `React.memo` prevent all re-renders?  
❓ Difference between `useMemo` and `useCallback`?

---

## Mini Exercise

Create a parent component that passes a prop and a callback to a memoized child.  
Use `React.memo` and `useCallback` to prevent unnecessary re-renders.

---

## 📘 Resources

[React Docs – React.memo](https://reactjs.org/docs/react-api.html#reactmemo)  
[React Docs – useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
