# React UI Project

A modern, component-based UI project built using **React.js, Tailwind CSS, and Vite**. The website is divided into multiple reusable components to maintain clean, organized, and manageable code.

The project focuses on component reusability, props drilling, and scrollable card layouts to create an interactive and responsive user interface.

## 🚀 Features

* **Component-Based Architecture:** The website is divided into multiple independent and reusable React components.
* **Props Drilling:** Data is passed between components using props to dynamically render content in different sections and cards.
* **Scrollable Cards:** Interactive, scrollable card layouts to display multiple items in an organized way.
* **Tailwind CSS:** Utility-first styling for flexible layouts, spacing, typography, and responsive design.
* **Reusable Components:** Individual components make the code easier to maintain, modify, and extend.
* **Responsive UI:** A flexible layout designed to adapt to different screen sizes.

## 🛠️ Tech Stack

* **React.js** – Building reusable UI components
* **Tailwind CSS** – Styling and responsive layouts
* **JavaScript (ES6+)** – Application logic and dynamic data handling
* **Vite** – Development server and build tool
* **HTML5** – Web page structure

## 📂 Project Structure

```text
ui-project/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── arrow.jsx
│   │   ├── card.jsx
│   │   ├── Cardcontent.jsx
│   │   ├── content.jsx
│   │   ├── Leftcontainer.jsx
│   │   ├── mainContainer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Rightcontainer.jsx
│   │   └── section1.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/tanusrivastava2003/react-ui-project.git
```

### 2. Navigate to the project directory

```bash
cd YOUR-REPOSITORY
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`) to view the website.

## 🧩 Concepts Used

### Component-Based Architecture

The website is divided into multiple components, each responsible for a specific part of the user interface. This makes the application easier to understand, reuse, and maintain.

### Props Drilling

Props are used to pass data from parent components to child components. This approach allows multiple cards to display different content using the same reusable component.

### Scrollable Card Layout

Scrollable cards allow users to navigate through multiple items while keeping the interface organized and accessible.

### Utility-First Styling

Tailwind CSS utility classes are used to style components, manage layouts, and create responsive designs without writing extensive custom CSS.

## 📈 Future Improvements

* Add more interactive features and animations.
* Improve accessibility and responsive behavior.
* Explore Context API to manage data across deeply nested components.
* Add dynamic data fetching from APIs.

## 👩‍💻 Author

**Tanu Srivastava**

B.Tech – Computer Science and Engineering

[GitHub](https://github.com/tanusrivastava2003)

---

⭐ If you find this project useful, feel free to explore the code and share your feedback.
