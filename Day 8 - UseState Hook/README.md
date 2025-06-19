# Day 8 – useState Hook 🧠  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins

---

## 🔍 What is useState?

`useState` is a React hook that lets you add state to functional components.  
It returns a stateful value and a function to update it.

---

## 💡 Syntax

```jsx
const [state, setState] = useState(initialValue);
````

---

## ✨ Key Concepts

✅ `useState` works inside functional components only  
✅ You must call it at the top level — not inside loops or conditions  
✅ Can be used multiple times to manage different pieces of state  
✅ The setter (`setState`) triggers a re-render  
✅ React merges updates when using objects/arrays, but immutability is recommended  
✅ You can initialize state with any value — string, number, object, array, or even a function  

---

## ⚠️ Common Mistakes

❌ Calling `useState` inside conditions or after early returns  
❌ Directly mutating state instead of using `setState`  
❌ Forgetting that state updates are asynchronous  
❌ Expecting `console.log(state)` to show updated value right after `setState`  

---

## 🧠 React Interview Hotspots

❓ What does `useState` return?  
❓ Why doesn’t updated state reflect immediately?  
❓ What happens if you mutate state directly?  
❓ Can you use multiple `useState` hooks in a single component?  
❓ How does React decide when to re-render?  

---

## 📘 Resources

[React Docs – useState](https://reactjs.org/docs/hooks-state.html)  
[Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)  

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!