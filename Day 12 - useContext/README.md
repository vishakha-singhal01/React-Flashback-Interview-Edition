# Day 12 – useContext Hook

The `useContext` hook is your solution to **prop drilling hell**.

Instead of passing data through multiple layers, you can create a global context and access it anywhere in your app clean, direct, and interview-ready.

---

## ✨ Key Concepts

✅ `useContext` lets components access shared data without props  
✅ You must create a context with `React.createContext()`  
✅ Wrap your component tree with a `<Provider>`  
✅ `useContext(MyContext)` gives you access to the nearest provider’s value  
✅ Great for global values: user, theme, language, etc  
✅ Avoid using it for frequently changing local state

---

## ⚠️ Common Mistakes

❌ Using context for all state (it’s not Redux!)  
❌ Forgetting to wrap with `<MyContext.Provider>`  
❌ Using a different context object inside `useContext()`  
❌ Not memoizing provider value causing unnecessary re-renders

---

## 🧠 React Interview Hotspots

❓ What problem does `useContext` solve?  
❓ What’s the difference between props vs context?  
❓ Does `useContext` cause re-renders?  
❓ How do you optimize context performance?  
❓ Can we use multiple contexts in one component?

---

## Mini Exercise

Try creating your own `ThemeContext` or `UserContext` and access the value from a deeply nested component.

---

## 📘 Resources

[React Docs – Context](https://reactjs.org/docs/context.html)  
[How to Avoid Unnecessary Rerenders with Context](https://reactjs.org/docs/context.html#optimizing-performance)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
