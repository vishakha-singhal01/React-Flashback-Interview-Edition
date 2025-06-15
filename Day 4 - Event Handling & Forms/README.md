# Day 4 – Event Handling & Forms 🔄  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins  

---

## 🧠 Why Is This Crucial?

Forms are everywhere.  
From login screens to payment pages, mastering event handling in React ensures you handle user input correctly and efficiently.

---

## 🎯 Event Handling in React

✅ Events in React are named using camelCase (`onClick`, `onChange`)  
✅ React wraps native events inside a synthetic event system for cross-browser compatibility  
✅ Event handlers receive the event object as an argument  
✅ You often use arrow functions or binding to access `this` properly (in class components)  

```jsx
function HandleClickExample() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
````

---

## 📝 Forms in React

React forms are **controlled** using state.
Each input has a value controlled by React state, updated via `onChange`.

```jsx
function FormExample() {
  const [name, setName] = React.useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}!</p>
    </form>
  );
}
```

---

## ⚠️ Common Mistakes

❌ Not preventing default form submission  
❌ Forgetting to update state on input change  
❌ Not validating input before submission  

---

## 🧠 React Interview Hotspots

❓ How do you handle events in React?  
❓ What is the synthetic event system?  
❓ What’s the difference between controlled and uncontrolled components?  
❓ Why use `e.preventDefault()` in forms?  
❓ How do you manage multiple form inputs in React?  

---

### ✨ Key Concepts

✅ Use camelCase event handlers (`onClick`, `onSubmit`)  
✅ Use state to control form inputs  
✅ Prevent default behavior with `e.preventDefault()`  
✅ Inputs must have `value` and `onChange` for control  
✅ Can use one `handleChange` function for multiple inputs  

---

## 📘 Resources

[React – Handling Events](https://reactjs.org/docs/handling-events.html)  
[React – Forms](https://reactjs.org/docs/forms.html)  

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

---

## Mini Exercise

Try building a login form with two fields (email & password) and print values on form submit.

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily posts & updates
⭐ Don’t forget to star the repo if you're finding this series helpful!

````
