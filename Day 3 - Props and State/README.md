# Day 3 – Props & State 🔄  
**React Flashback: Interview Edition**  
📚 Quick Revision for Interviews • Estimated Read Time: 3 mins  

---

## ⚛️ What are Props & State?

In React, **props and state** are the two core ways to manage data in components.

- **Props** = data passed **from parent to child**
- **State** = data managed **within the component itself**

They serve different purposes but often work together.

---

## 🧩 Props (Short for Properties)

Props make components dynamic and reusable.  
They are **read-only** and passed like attributes in JSX.

```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

<Welcome name="Vishakha" />
````

✅ Props are immutable  
✅ Help in breaking the UI into reusable components  
✅ Allow parent-child communication

---

## 🔁 State (Local Memory of a Component)

State is used to handle data that **changes over time**, like input values, toggles, or counters.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

✅ State triggers re-render  
✅ Can only be updated using `setState` (or `setSomething`)  
✅ Is local to the component unless lifted 

---

### ✨ Key Differences

✅ Props are passed to the component; State is managed inside  
✅ Props are immutable; State is mutable via setters  
✅ Props are great for config/data; State is best for dynamic interaction

---

## React Interview Hotspots

❓ What is the difference between props and state?  
❓ Are props immutable? Why?  
❓ How does state update affect re-rendering?  
❓ Can we pass state as props?  
❓ Why should you never mutate state directly?

---

## Mini Exercise

1. Create a component that displays a username using props
2. Create a counter using state
3. Pass data from parent to child using props

---

## 📘 Resources

* [Props in React](https://reactjs.org/docs/components-and-props.html)
* [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
* [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

**[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React revision posts
🌟 If this helped, don’t forget to give a ⭐ to this repo!
