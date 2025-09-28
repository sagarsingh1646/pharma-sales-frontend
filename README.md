# Pharmaceutical Sales Tracking System

A **React + Vite** based web application to manage and track pharmaceutical sales, with user management for sales representatives and managers.

---

## Features

### User Management
- **Signup:** New users are treated as **Sales Representatives** by default.
- **Login / Logout:** Secure authentication for all users.

### Dashboard
- **Sales Representatives:**
  - View all their sales transactions.
  - See total sales, total units sold, and total transactions.
  - Edit or delete sales transactions.

- **Managers:**
  - View all transactions from different sales representatives.
  - See total sales, total units sold, total transactions, and active sales representatives.
  - Access sales reports through the **Reports** page.
  
### Reports (Manager Only)
- View ranking of sales representatives based on their sales.
- See top-selling products and their rankings.

---

## Pages
- `/signup` - Signup page
- `/login` - Login page (also serves as the home page)
- `/dashboard` - Dashboard for sales representatives and managers
- `/reports` - Sales report view (accessible by managers only)

---

## Installation

### Prerequisites
- Node.js v18+ and npm installed.
- Backend server running separately. (**See backend repository for setup guide.**)


### Steps

1. **Clone the repository**
```bash
git clone https://github.com/sagarsingh1646/pharma-sales-frontend
cd pharma-sales-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
- At the root of the project, create a `.env` file and add the backend URL:
```env
VITE_API_URL=<backend base url>
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open in browser**
- The app will typically run at: [http://localhost:5173](http://localhost:5173)

---

## Notes
- This project requires the backend to be running separately.
- Make sure the `.env` file is configured with the correct backend URL.
- For backend setup instructions, check the [backend repository](https://github.com/sagarsingh1646/pharma-sales-backend).

---

## Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS
- **State Management:** Redux
- **Routing:** React Router DOM

## Deployed URL
- [Frontend URL](https://pharma-sales.netlify.app/).
- Note: The first backend response may take some time because it is hosted on a free server that spins down during inactivity, which can delay requests by up to 50 seconds or more.

## Demo Accounts
> Use the following demo accounts to explore the app.

### Manager Account (Cannot be created through the app)
- **Email:** sagar@pharma.com
- **Password:** Sagar123

### Sales Representative Account (You can also create new accounts)
- **Email:** rohit@gmail.com
- **Password:** Rohit@123
