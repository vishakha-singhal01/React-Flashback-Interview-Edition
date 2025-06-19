# Day 6: Lists & Keys in React 🔑  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins

---

## 🔍 What Are Lists & Keys?

Rendering lists in React means using the `.map()` function to display multiple components from an array.  
Each item must have a unique `key` prop so React can track element updates efficiently.

---

## 💡 Example

```jsx
const fruits = ["Apple", "Banana", "Cherry"];

return (
  <ul>
    {fruits.map((fruit) => (
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
);
````

---

## ✨ Key Concepts

✅ `.map()` helps render lists of JSX elements  
✅ Every item must have a `key` prop  
✅ Keys should be unique and stable  
✅ Avoid using `index` as key unless list is static  
✅ Keys help React track which items changed or were removed  
✅ `key` is not available as a prop inside the component  

---

## ⚠️ Common Mistakes

❌ Using index as key in dynamic lists  
❌ Not providing any key at all  
❌ Using non-unique values as keys  
❌ Trying to access `key` inside the component  

---

## 🧠 React Interview Hotspots

❓ Why does React need keys for lists?  
❓ What happens if keys aren’t unique?  
❓ Is it okay to use index as a key? When?  
❓ How does React use keys during reconciliation?  
❓ Can `key` be accessed as a prop inside a component?  

---

## 📘 Resources

[React – Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)  
[JSX Tips for Rendering Lists](https://react.dev/learn/rendering-lists)  

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!