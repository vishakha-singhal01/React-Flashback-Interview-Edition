# Day 14 – useReducer Hook

The `useReducer` hook is a powerful alternative to `useState` especially when managing **complex state logic** or **multiple related state variables**.

It mimics how Redux works but stays local to your component.

---

## ✨ Key Concepts

✅ `useReducer` accepts a reducer function and initial state  
✅ Returns `[state, dispatch]`  
✅ Helps manage complex state updates in a predictable way  
✅ Dispatches actions to update state  
✅ Makes state transitions explicit and easier to debug  
✅ Great for form handling, toggles, tab states, etc

---

## ⚠️ Common Mistakes

❌ Writing large reducer logic inline  
❌ Forgetting to return a **new state object** from reducer  
❌ Mutating state directly inside reducer  
❌ Using `useReducer` for simple one-off states (prefer `useState`)

---

## 🧠 React Interview Hotspots

❓ When should you use `useReducer` over `useState`?  
❓ What does a reducer function look like?  
❓ How does dispatch work in `useReducer`?  
❓ How is `useReducer` similar to Redux?  
❓ Can `useReducer` work with context for global state?

---

## 🛠️ Mini Exercise

Create a simple counter that supports:  
- Increment  
- Decrement  
- Reset

Implement it using `useReducer`.

---

## 📘 Resources

[React Docs – useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)  
[Redux vs useReducer](https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
