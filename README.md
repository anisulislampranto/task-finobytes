# 🎯 Role-Based Dashboard (React + Redux)

A simple **role-based authentication dashboard** built with React, Redux Toolkit, and React Router v6.  
Supports **Admin**, **Merchant**, and **Member** roles with protected routes and dummy dashboard data.

---

## 🚀 Features
- **Role-based login & registration**:
  - Admin: Email + Password → `/login/admin`  
  - Merchant: Store Name + Password → `/login/merchant`  
  - Member: Phone/Email + Password or OTP → `/login/member`

- **Role-specific dashboards**:
  - Admin → `/dashboard/admin`  
  - Merchant → `/dashboard/merchant`  
  - Member → `/dashboard/member`

- **Protected Routes**  
  Prevent unauthorized access: users with no or wrong roles are redirected to login.

- **State Management with Redux Toolkit**  
  - Authentication state: token, role, user  
  - Dummy dashboard data (users, merchants, purchases)  
  - Logout clears `localStorage` & resets Redux state  

---

## 🛠 Tech Stack
- React  
- Redux Toolkit  
- React Router v6  
- Tailwind CSS (for styling)  

---

## 📦 Installation & Setup
```bash
git clone https://github.com/anisulislampranto/task-finobytes.git
cd task-finobytes

npm install
npm start
