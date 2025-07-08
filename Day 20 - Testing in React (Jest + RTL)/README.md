# Day 20 – Testing in React (Jest + React Testing Library)

Writing tests might not sound fun until a tiny change breaks your whole app 😅

React Testing Library (RTL) + Jest helps us write meaningful tests that simulate real user behavior.

---

## ✨ Key Concepts

✅ **Jest** is the test runner used with React  
✅ **React Testing Library** encourages testing components like users interact  
✅ Avoid querying by class/id — prefer roles, labels, text  
✅ Use `render()` to mount components and `screen` to access them  
✅ Use `fireEvent` or `userEvent` to simulate user actions  
✅ Test should focus on behavior, not internal implementation

---

## ⚠️ Common Mistakes

❌ Over-testing implementation details  
❌ Using unstable selectors (like class names)  
❌ Forgetting to clean up or isolate tests  
❌ Not mocking API or external behavior correctly  
❌ Writing too many brittle snapshot tests

---

## 🧠 React Interview Hotspots

❓ Difference between unit and integration tests in React?  
❓ Why use `@testing-library/react` over Enzyme?  
❓ How to test async logic or API calls in React?  
❓ What’s the role of `act()` in tests?  
❓ Best practices for testing inputs and forms?

---

## Mini Exercise

Test that a button click updates the text on screen.  
Test that an input updates state and displays the value.

---

## 📘 Resources

[Jest Docs](https://jestjs.io/docs/getting-started)  
[React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro)  
[RTL Cheat Sheet](https://testing-library.com/docs/queries/about/)

---

## 👩‍💻 Who’s This For?

✅ Freshers revising for interviews  
✅ Working devs needing a React refresher  
✅ Anyone who prefers clarity over complexity

---

🔗 **[Follow me on LinkedIn](https://www.linkedin.com/in/vishakha-singhal-18983b1bb/)** for daily React interview prep posts  
⭐ Don’t forget to star this repo if it helped you!
