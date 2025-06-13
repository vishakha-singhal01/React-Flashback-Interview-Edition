# Day 2 – JSX & Rendering Elements ⚛️  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins  

---

## 💡 What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write **HTML-like code in JavaScript**.

Instead of calling `React.createElement()`, we use JSX to make our code readable and expressive:

```jsx
const element = <h1>Hello, JSX!</h1>;
``` 
⚠️ Important:
JSX is not HTML. It’s syntactic sugar over React.createElement.

## Why Use JSX?

✅ Improves readability  
✅ Enables writing UI in a declarative way  
✅ Easier to visualize UI components  
✅ Can embed expressions using `{}`  
✅ Helps build tree-like component structures  

JSX in Action
Example: Embedding JavaScript in JSX

```jsx
const name = "Vishakha";
const element = <h1>Hello, {name}!</h1>;
```

JSX allows expressions inside {} – you can use variables, functions, and more.

🧱 Rendering Elements
React DOM takes care of updating the DOM when your data changes.

```jsx
const element = <h1>Hello React!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

Rendering is idempotent – rendering the same element multiple times doesn’t change the output.

Only the necessary DOM updates are made using the virtual DOM diffing algorithm.

## 🧠 Interview Questions You’ll Definitely Face

❓ What is JSX? How is it different from HTML?  
❓ Can a component return multiple elements in JSX?  
❓ Why do we wrap multiple elements in a parent tag or fragment?  
❓ Why are `className` and `htmlFor` used instead of `class` and `for`?  
❓ What happens behind the scenes when we write JSX?  

## 💻 Mini Exercise

```jsx
function Welcome({ name }) {
  return <h2>Welcome back, {name}!</h2>;
}

const element = <Welcome name="React Developer" />;
```

### Use create-react-app or Vite to try this in-browser.

## 📘 Resources

- [JSX Official Docs](https://reactjs.org/docs/introducing-jsx.html)  
- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)  
- [JSX Gotchas](https://reactjs.org/docs/jsx-in-depth.html)  

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

🔗 [Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/) for daily updates  
⭐ Star this repo if it’s helping you crack React interviews  