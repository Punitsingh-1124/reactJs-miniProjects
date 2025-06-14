🔐 Password Generator App

A simple and clean React app that generates secure passwords based on user preferences like length, uppercase, lowercase, numbers, and symbols. Includes password strength indication and copy-to-clipboard functionality.

## 🚀 Features
- Generate strong passwords instantly
- Customize character types
- Password strength checker
- Copy password to clipboard
- Responsive and styled with modern UI

## 📸 Screenshot

![image](https://github.com/user-attachments/assets/ec6c1608-1753-401b-b577-4b42f22c58ec)

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/password-generator.git
   cd password-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```
# 🔵 React Animated Progress Bar

A simple, customizable and accessible React progress bar component using `scaleX` for smooth animations.

## ✨ Features

- Smooth animation using CSS transform
- Auto clamps value between `MIN` and `MAX`
- Calls `onComplete()` when 100% reached
- Text color auto-switches for better visibility

![image](https://github.com/user-attachments/assets/400b6179-ff8b-4dd4-b6d6-224ba60962c0)

---

### 🛠️ Installation

#### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/progress-bar.git
cd progress-bar
```

#### 2. **Install dependencies**

```bash
npm install
```

#### 3. **Run the development server**

```bash
npm run dev
```
# 🔵 Cell Activation Grid (React + Vite)

This is a small React app built using Vite. It renders a 3x3 grid with a specific pattern, where active cells (green) light up as you click them. Once all active cells are filled, they deactivate in reverse order.

---

## 🖼️ Preview

![image](https://github.com/user-attachments/assets/dd09f8b5-e977-45e2-9c57-a50b1b80bda6)

---

## 📌 Features

* 3x3 grid with pattern
* Only valid (1-marked) cells are clickable
* Green animation on activation
* Deactivation in reverse after all active cells are clicked

---

## 🧠 Logic Notes

* `config` array defines the grid layout
* `order[]` tracks the activation sequence
* Once all active cells are clicked, `deactivateCells()` runs, popping them in reverse

---
## 🚀 Getting Started
### 1. Clone the repository

```bash
git clone https://github.com/your-username/grid-lights.git
cd grid-lights
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```
# 🔁 React Custom Memo Hook (Vite)

A small React app using **Vite** that demonstrates a custom memoization hook `useCustomMemo` to avoid unnecessary re-computations.

---

## 📚 What I Learned

- Setup React with **Vite**
- Create custom hooks
- Memoize expensive functions manually
- Optimize performance using `useRef`

---

## ⚙️ Setup

```bash
git clone https://github.com/your-username/useMemo-hook-polyfill.git
cd useMemo-hook-polyfill
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```
---

## 🧠 How It Works

* `counter` triggers an expensive square calculation.
* `counter2` updates don’t trigger re-calculation.
* Memo logic compares dependency changes.

---

# ❤️ Like Button with React + Vite

A simple Like/Unlike button using React and Vite, featuring loading state and error handling.

---

## 🧠 What I Learned

* How to toggle UI state using `useState`
* How to handle `fetch()` API calls with loading and error states
* How to use SVG icons in React components
* How to resolve CORS issues using mock APIs like [JSONPlaceholder](https://jsonplaceholder.typicode.com)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/like-button.git
cd like-button
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```
---



