# MobiZone – Mobile Phone Shop (React.js)

A responsive online phone store featuring five brands: **Vivo, Oppo, Infinix, iPhone and Tecno** (3 phones each, 15 total).

## Features
- Home page with brand cards and top-rated phones
- Phone listing with brand, RAM, search, price slider and sorting
- Phone detail page with full specifications and related phones
- Shopping cart (add, remove, change quantity, clear) saved in localStorage
- **Registration** with validation (name, email, Pakistani phone, strong password, confirm password, terms)
- **Login** with validation, show/hide password and redirect back after login
- Checkout is protected: you must be logged in, form is pre-filled and validated
- Order confirmation with order number
- Phone pictures on every page, easy to replace with real photos
- Fully responsive with mobile menu

## Changing phone pictures
Every phone is drawn as an SVG illustration by default. To use real photos, put
`phone-1.jpg` ... `phone-15.jpg` in `public/images/` (see the README.txt in that
folder). They replace the drawings everywhere automatically.

## Tech Stack
React 18, React Router 6, Context API (useReducer), Vite, plain CSS

## Important note
Accounts are stored in the browser's localStorage for demonstration. A real
website would use a backend server and hashed passwords. Prices and specs are sample values.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push the project to a GitHub repository.
2. On vercel.com, sign in with GitHub, click **Add New → Project**, import the repo and **Deploy**.

`vercel.json` makes sure page refreshes on routes like `/cart` work.
