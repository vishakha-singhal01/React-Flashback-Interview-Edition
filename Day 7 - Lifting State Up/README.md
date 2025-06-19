# Day 7 – Lifting State Up 📤  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 4 mins

---

## 🔍 What Is Lifting State Up?

When two or more components need to share the same data,  
you move that state to their closest common parent and pass it down via props.

This keeps the data in sync across components and avoids duplication or conflicting updates.

---

## 💡 Example

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter value={count} />
      <Increment onIncrement={() => setCount(count + 1)} />
    </>
  );
}
````

`<Counter />` displays the value
`<Increment />` updates it — both share state from the parent

---

## ✨ Key Concepts

✅ Shared state lives in the nearest common ancestor  
✅ Data flows down via props; actions flow up via callbacks  
✅ Avoids duplicating state across sibling components  
✅ Helps maintain single source of truth  
✅ Improves predictability and debuggability  

---

## ⚠️ Common Mistakes

❌ Keeping separate state in siblings instead of sharing  
❌ Passing down too many props (prop drilling)  
❌ Updating parent state without `useCallback` causing re-renders  
❌ Lifting state too early when not actually needed  

---

## 🧠 React Interview Hotspots

❓ What is lifting state up and when should you do it?  
❓ How do you pass state and callbacks between components?  
❓ What are the signs that state should be lifted?  
❓ Difference between lifting state and global state (Context/Redux)?  
❓ What problems does lifting state solve?  

---

## 📘 Resources

[React Docs – Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)  
[State Management Patterns](https://react.dev/learn/sharing-state-between-components)  

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!