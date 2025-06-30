# Day 16 – Controlled vs Uncontrolled Components

When working with forms in React, components can be **controlled** or **uncontrolled**.

Understanding the difference is critical for handling forms, validation, and debugging state-related issues effectively.

---

## ✨ Key Concepts

✅ **Controlled components** get their value from React state  
✅ Updates are handled with `onChange` and `setState`  
✅ Great for real-time validation and consistent UI behavior  
✅ **Uncontrolled components** use `ref` to access DOM value directly  
✅ Better for quick forms or when performance is key  
✅ You can mix both patterns if needed — but do so carefully

---

## ⚠️ Common Mistakes

❌ Trying to mix both patterns incorrectly  
❌ Forgetting to sync state with input in controlled components  
❌ Overengineering simple forms with controlled components  
❌ Forgetting `defaultValue` or `defaultChecked` in uncontrolled inputs  
❌ Using uncontrolled inputs when controlled is needed (e.g. validation)

---

## 🧠 React Interview Hotspots

❓ What’s the difference between controlled and uncontrolled components?  
❓ When would you use one over the other?  
❓ Can we combine both in a form?  
❓ How do you access values in an uncontrolled component?  
❓ Which is better for performance?

---

## Mini Exercise

Build two text inputs — one controlled and one uncontrolled.  
Try validating both and printing values to console on submit.

---

## 📘 Resources

[React Docs – Forms](https://reactjs.org/docs/forms.html)  
[Controlled vs Uncontrolled Inputs – Guide](https://reactjs.org/docs/uncontrolled-components.html)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
