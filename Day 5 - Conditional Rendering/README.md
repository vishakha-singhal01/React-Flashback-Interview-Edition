# Day 5: Conditional Rendering ⚛️  
**React Flashback: Interview Edition**  
🔁 Quick Revision for Interviews • Estimated Read Time: 3 mins

---

## 🔍 What Is Conditional Rendering?

Conditional rendering in React means displaying different UI elements based on specific conditions — like user login, errors, loading states, or feature toggles.

---

## 💡 Real Examples

### Ternary Operator

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
````

### Logical AND (Short-circuit)

```jsx
{hasError && <ErrorBanner />}
```

### Early Return

```jsx
if (loading) return <Spinner />;
return <Main />;
```

### Render Nothing

```jsx
{!showModal && null}
```

---

## ✨ Key Concepts

✅ Use JSX expressions to render different elements  
✅ `null` means "render nothing" in JSX — totally valid  
✅ Prefer early returns for cleaner logic  
✅ Avoid deeply nested ternaries  
✅ Move logic outside JSX if it gets messy  

---

## ⚠️ Common Mistakes

❌ Overusing nested ternaries  
❌ Forgetting to return `null` when needed  
❌ Confusing `&&` behavior with falsy/truthy values  
❌ Putting heavy logic directly inside JSX  

---

## 🧠 React Interview Hotspots

❓ What are 4 ways to conditionally render in React?  
❓ What’s the best way to avoid messy ternaries?  
❓ When should you return `null` in JSX?  
❓ Difference between if-else vs ternary in JSX?  
❓ What is short-circuit rendering and when to use it?  

---

## 📘 Resources

[React – Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)  
[JSX Gotchas](https://reactjs.org/docs/jsx-in-depth.html)  

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity  

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!