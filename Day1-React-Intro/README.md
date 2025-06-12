# ⚛️ Day 1 – Introduction to React  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • ⏱️ Read Time: 3 mins

---

## 🔍 What is React?

React is a **JavaScript library** developed by **Meta (Facebook)** for building fast, interactive user interfaces using a component-based architecture.

Instead of manipulating the DOM manually, React uses a **virtual DOM** to improve performance and update only the necessary parts of the UI efficiently.

---

## 🚀 Why Choose React?

✅ Component-based architecture  
✅ Reusable and maintainable UI logic  
✅ Virtual DOM for optimized rendering  
✅ Declarative code style – easy to predict and debug  
✅ Strong ecosystem (React Router, Redux, etc.)  
✅ Backed by Meta and widely adopted in production apps  

---

## 🚀 Core Concepts

### 1️⃣ JSX – JavaScript + XML  
JSX lets you write HTML-like syntax inside JavaScript. React uses it to describe what the UI should look like.

```jsx
const Greeting = () => <h1>Hello, world!</h1>;
````

JSX is not required, but it makes components cleaner and more readable.

---

### 2️⃣ Components – The Building Blocks

In React, **everything is a component**. These are functions (or classes) that return JSX.

```jsx
function Button() {
  return <button>Click Me</button>;
}
```

You can nest components inside other components and reuse them anywhere in your app.

---

## 🎯 Interview Must-Knows

Here are the **common React questions** you’ll definitely face:

❓ What is React and how does it differ from frameworks like Angular/Vue?  
❓ What is JSX and why do we use it?  
❓ What is the virtual DOM?  
❓ What are components? Types of components?  
❓ Difference between class and functional components?  
❓ Why is React considered declarative?  

---

## ✏️ Mini Exercise – Create Your First React App

Using **Create React App**:

```bash
npx create-react-app my-app
cd my-app
npm start
```

Or, using **Vite (faster dev setup)**:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

Once you’re in, try replacing `App.jsx` with:

```jsx
function App() {
  return <h1>React is 🔥</h1>;
}

export default App;
```

---

## 📚 Useful Resources

* [React Official Docs](https://react.dev)
* [JSX in Depth](https://react.dev/learn/writing-markup-with-jsx)
* [Virtual DOM Explained](https://www.freecodecamp.org/news/virtual-dom-explained/)

---

## 💡 Interview Tip

> Don’t just define React. Show what makes it useful.
> Mention components, reusability, and the ecosystem (hooks, context, routing, etc.) in real-world terms.

---

## ⭐ Stay Connected & Show Support

If you found this helpful:

⭐ **Star** this repository to support the series
👩‍💻 Follow **[Vishakha Singhal on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily updates
🧵 Share your learnings with `#ReactFlashback` and tag me!

---