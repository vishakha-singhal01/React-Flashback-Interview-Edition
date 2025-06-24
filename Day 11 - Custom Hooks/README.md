# Day 11 – Custom Hooks 🧩  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins

---

## 🔍 What Are Custom Hooks?

Custom Hooks let you extract and reuse logic between components.  
They’re just **JavaScript functions that start with `use`** and can call other hooks.

---

## ✨ Key Concepts

✅ Custom hooks are **functions** that use built-in hooks  
✅ Must be named with `use` prefix (`useFetch`, `useToggle`)  
✅ Helps separate logic from UI  
✅ Can return **state, functions, or values**  
✅ Promotes **reusability and cleaner components**  

---

## ⚠️ Common Mistakes

❌ Forgetting the `use` prefix (React won’t recognize it as a hook)  
❌ Calling hooks conditionally inside custom hooks  
❌ Not separating business logic from UI logic  
❌ Creating overly specific custom hooks that can't be reused  

---

## 🧠 React Interview Hotspots

❓ What is a custom hook in React?  
❓ Why would you create a custom hook?  
❓ Can custom hooks use other hooks?  
❓ What rules must a custom hook follow?  
❓ Difference between regular function and custom hook?

---

## 🧪 Example Use Cases

- `useToggle()` → toggles boolean state  
- `useLocalStorage()` → syncs state with localStorage  
- `useFetch()` → abstract fetch logic into a hook  

---

## 📘 Resources

[React Docs – Custom Hooks](https://reactjs.org/docs/hooks-custom.html)  
[Building Reusable Hooks – React.dev](https://react.dev/learn/reusing-logic-with-custom-hooks)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
