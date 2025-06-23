# Day 10 – React Lifecycle (Old vs Hooks) 🔄  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins

---

## 🔍 Why React Lifecycle Matters

Before Hooks, React used lifecycle methods in **class components** to control what happens at each stage.  
With Hooks, we now use `useEffect()` in **functional components** to manage the same behavior but in a more flexible way.

---

## 🧪 Lifecycle Comparison Table

| Phase         | Class Component                | useEffect Equivalent               |
|---------------|--------------------------------|------------------------------------|
| Mount         | `componentDidMount`           | `useEffect(() => {}, [])`         |
| Update        | `componentDidUpdate`          | `useEffect(() => {}, [dep])`      |
| Unmount       | `componentWillUnmount`        | `return () => {}` inside `useEffect` |

---

## ✨ Key Concepts

✅ Class components use **dedicated lifecycle methods**  
✅ Functional components use **`useEffect`** for all lifecycle phases  
✅ The **dependency array** is the key to controlling behavior  
✅ Cleanup logic in `useEffect` mimics `componentWillUnmount`  
✅ Multiple `useEffect`s can be used for separation of concerns  

---

## ⚠️ Common Mistakes

❌ Confusing `useEffect(() => {}, [])` with `useEffect(() => {})`  
❌ Forgetting cleanup for subscriptions, timers, or events  
❌ Using old lifecycle patterns in functional components  
❌ Placing side effects directly in the render body  

---

## 🧠 React Interview Hotspots

❓ How does React lifecycle differ in class vs functional components?  
❓ What does `useEffect(() => {}, [])` do?  
❓ How do you mimic `componentWillUnmount` using Hooks?  
❓ Can you replace `shouldComponentUpdate` with Hooks?  
❓ How do multiple `useEffect` hooks behave together?  

---

## 📘 Resources

[React Docs – Lifecycle Methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle)  
[React – useEffect Guide](https://react.dev/learn/synchronizing-with-effects)  

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs shifting from class to hooks  
✅ Anyone who prefers clarity over complexity  

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
