# Day 9 – useEffect Hook 🔁  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins

---

## 🔍 What is useEffect?

`useEffect` is a React hook that lets you run side effects in functional components.  
Think of it as the combination of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

---

## 💡 Syntax

```jsx
useEffect(() => {
  // side effect code
  return () => {
    // cleanup code (optional)
  };
}, [dependencies]);
````

---

## ✨ Key Concepts

✅ Runs after every render by default  
✅ The dependency array (`[]`) controls when the effect runs  
✅ `[]` means run once (on mount)  
✅ `[value]` means run when `value` changes  
✅ Can perform data fetching, event listeners, subscriptions, timers  
✅ Cleanup functions run on unmount or before the next effect  

---

## ⚠️ Common Mistakes

❌ Forgetting to provide dependencies  
❌ Using props/state in effect without adding them to dependencies  
❌ Creating memory leaks by not cleaning up effects  
❌ Running heavy logic inside `useEffect` unnecessarily  

---

## 🧠 React Interview Hotspots

❓ What is `useEffect` used for?  
❓ What happens if you don’t use a dependency array?  
❓ How do you run an effect only once?  
❓ What is the purpose of the cleanup function?  
❓ What’s the difference between `useEffect(() => {}, [])` and `useEffect(() => {}, [value])`?  

---

## 📘 Resources

[React Docs – useEffect](https://reactjs.org/docs/hooks-effect.html)  
[React.dev – Effects and Cleanup](https://react.dev/learn/synchronizing-with-effects)  

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
