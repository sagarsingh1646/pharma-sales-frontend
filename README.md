# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


pharma-sales-frontend/
│
├── public/                    # Static files
│   └── favicon.ico
│
├── src/
│   ├── api/                    # Axios setup & API service functions
│   │   ├── axiosInstance.js
│   │   └── authApi.js          # Authentication related APIs
│   │   └── salesApi.js         # Sales related APIs
│
│   ├── assets/                 # Images, icons, fonts
│   │   ├── images/
│   │   └── icons/
│
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Buttons, Modals, Inputs, Loaders etc.
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   └── layout/             # Navbar, Sidebar etc.
│   │       ├── Navbar.jsx
│   │       └── Sidebar.jsx
│
│   ├── features/               # Feature-based foldering (Redux + UI)
│   │   ├── auth/               # Login, Signup, Auth related state
│   │   │   ├── AuthSlice.js
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   │
│   │   └── sales/              # Sales related state & components
│   │       ├── SalesSlice.js
│   │       ├── SalesList.jsx
│   │       └── CreateSale.jsx
│
│   ├── hooks/                   # Custom hooks
│   │   └── useAuth.js
│
│   ├── pages/                    # Top-level pages
│   │   ├── Dashboard.jsx
│   │   └── NotFound.jsx
│
│   ├── redux/                     # Global Redux store
│   │   └── store.js
│
│   ├── routes/                     # Centralized route handling
│   │   └── AppRoutes.jsx
│
│   ├── styles/                     # Tailwind configs & global styles
│   │   └── globals.css
│
│   ├── utils/                       # Helper functions
│   │   ├── constants.js
│   │   └── formatDate.js
│
│   ├── App.jsx
│   └── main.jsx
│
├── .env                             # Environment variables
├── package.json
└── tailwind.config.js

