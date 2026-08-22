# 🎓 College Discovery Platform

A modern web platform that helps students **discover, compare, and evaluate colleges** based on courses, fees, placements, ratings, and other important academic information.

The platform provides an easy-to-use interface for students to explore colleges, compare multiple institutions, view details, and make better decisions about their higher education.

---

## 🚀 Features

### 🏫 College Discovery

* Browse and discover colleges
* View college details
* Search colleges by name and location
* Explore available courses
* View college ratings and statistics

### ⚖️ College Comparison

* Compare multiple colleges side-by-side
* Compare:

  * ⭐ Ratings
  * 📚 Courses
  * 💰 Fees
  * 💼 Placement packages
  * 👨‍🎓 Student information
  * 📍 Location

### 🔎 Search & Filtering

* Search colleges quickly
* Filter colleges based on relevant criteria
* Find colleges according to student requirements

### 📊 Student Dashboard

* Personalized dashboard
* Recommended colleges
* Saved colleges
* Recent reviews
* Scholarships
* Performance/statistics visualization

### ⭐ Reviews & Ratings

* View student reviews
* Check college ratings
* Analyze feedback before selecting a college

### 💰 Scholarships

* Scholarship information
* Scholarship discovery
* Scholarship-related widgets and information

### 🎨 Modern UI

* Responsive design
* Clean and intuitive interface
* Reusable React components
* Custom CSS styling
* Dashboard-based user experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript / TypeScript
* React Router
* CSS
* Recharts

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

## 📁 Project Structure

```text
College-Discovery-Platform/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Colleges/
│   │   ├── Compare/
│   │   ├── CollegeDetails/
│   │   ├── Dashboard/
│   │   └── ...
│   │
│   ├── context/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Chandra99275/College-Discovery-Platform.git
```

### 2. Navigate into the project

```bash
cd College-Discovery-Platform
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

If your project uses environment variables, create a `.env` file in the project root.

Example:

```env
VITE_API_URL=http://localhost:5000/api
```

Do not commit sensitive credentials or API keys to GitHub.

---

## 📊 Core Modules

| Module             | Description                            |
| ------------------ | -------------------------------------- |
| 🏠 Home            | Landing page and platform overview     |
| 🏫 Colleges        | Browse and search colleges             |
| 🔍 Search          | Find colleges using search and filters |
| ⚖️ Compare         | Compare multiple colleges              |
| 📖 College Details | Detailed college information           |
| ⭐ Reviews          | College ratings and reviews            |
| 💰 Scholarships    | Scholarship information                |
| 📊 Dashboard       | Personalized student dashboard         |
| 🎯 Recommendations | Recommended colleges for students      |

---

## 🔄 Application Flow

```text
                    ┌─────────────────┐
                    │      User       │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │      Home       │
                    └────────┬────────┘
                             │
                ┌────────────┼────────────┐
                ▼            ▼            ▼
          ┌──────────┐ ┌──────────┐ ┌───────────┐
          │ Colleges │ │  Search  │ │ Dashboard │
          └────┬─────┘ └────┬─────┘ └─────┬─────┘
               │            │              │
               └────────────┼──────────────┘
                            ▼
                    ┌─────────────────┐
                    │ College Details │
                    └────────┬────────┘
                             │
                  ┌──────────┴──────────┐
                  ▼                     ▼
           ┌────────────┐        ┌────────────┐
           │   Compare  │        │   Reviews  │
           └────────────┘        └────────────┘
```

---

## 🎯 Project Objectives

The main objectives of the College Discovery Platform are:

* Simplify the college selection process
* Provide important college information in one place
* Allow students to compare colleges easily
* Help students understand fees and placement information
* Provide college reviews and ratings
* Help students discover scholarships
* Provide personalized recommendations

---

## 💡 Why This Project?

Choosing the right college can be difficult because students often need to collect information from multiple websites.

The College Discovery Platform brings important information together into a single platform, making it easier for students to:

**Discover → Compare → Analyze → Decide**

---

## 📈 Future Enhancements

Planned improvements include:

* 🤖 AI-powered college recommendations
* 🎯 Personalized college prediction based on student profile
* 📍 Location-based college discovery
* 📊 Advanced college analytics
* 🔐 User authentication and authorization
* ❤️ Save/favorite colleges
* 🔔 Scholarship notifications
* 📝 Advanced review system
* 💬 Student discussion/community section
* 📱 Progressive Web App support
* ☁️ Cloud deployment

---

## 🧪 Development

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📌 Git Commands

Clone the project:

```bash
git clone https://github.com/Chandra99275/College-Discovery-Platform.git
```

Create a new branch:

```bash
git checkout -b feature/new-feature
```

Add changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "Add new feature"
```

Push changes:

```bash
git push origin feature/new-feature
```

---

## 👨‍💻 Author

**Yarlagadda Chandra Mahesh Goud**

Computer Science Undergraduate | Full-Stack Developer | Cyber Security Enthusiast

GitHub:
https://github.com/Chandra99275

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is developed for educational and portfolio purposes.
