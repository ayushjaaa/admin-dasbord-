# 🧠 Task Management Board with Drag & Drop, Filtering & Redux

live line :- https://admin-dasbord-qq.vercel.app/
A modern task management app (like Trello or Jira) built with React, Redux Toolkit, and DnD Kit. It allows you to add tasks, drag them across columns, and filter tasks based on category. Tasks are persisted in local storage.

---

## 🚀 Features

- ✅ Create and manage tasks
- ✅ Drag & drop between Todo, In Progress, Done columns
- ✅ Tasks saved in `localStorage` (auto persistence)
- ✅ Responsive layout with Tailwind CSS
- ✅ Built using Redux Toolkit for state management

---
  
## 📁 Folder Structure

src/
│ 
├── components/
│ └── TaskColumn.jsx # Displays tasks inside columns
│
├── pages/
│ └── Home.jsx # Main dashboard page with filters + drag-drop
│
├── redux/
│ └── TodoSlice.js # Redux logic for add/move/set task
│
├── utils/
│ └── filterTasks.js # Helper to filter tasks by category
│
└── App.jsx / index.js # Entry points

yaml
Copy
Edit

---

## 🧩 Technologies Used

- React ⚛️
- Redux Toolkit 🧰
- React Router 🧭
- DnD Kit 🧲
- Tailwind CSS 💨
- FontAwesome / HeroIcons 🎨
- LocalStorage (for persistence) 💾

---

## 🖼️ UI Overview

- **Todo / In Progress / Done Columns**: Show tasks according to their status

- **Create Task Button**: Redirects to `/form` route for new task
- **Drag & Drop**: Move tasks between columns easily

---

## 🛠️ How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
🧠 How Filtering Works
Each task has a category field (like "Option A", "Option B")

Filter is stored in local state (useState)

When rendering columns, only filtered tasks are passed

js
Copy
Edit
getFilteredTasks(tasks.Todo, selectedFilter)
🛡️ Best Practices Followed
Tasks stored in Redux for centralized state

UI-level filter state using React

Data persisted with localStorage on every update

DnDContext used to track drag-end and dispatch Redux actions

Modular and clean folder structure

✅ Upcoming Improvements
 Add task due dates and sort by date

 Backend integration with MongoDB (MERN)

 Add authentication (JWT)

 Reorder tasks inside columns

📸 Screenshots
Add screenshots here if available for UI preview
   
🙌 Made with ❤️ by Ayush (learning MERN Stack) 
yaml
Copy
Edit

---

live demo link:- "https://admin-dasbord.vercel.app/home"







