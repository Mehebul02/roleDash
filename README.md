# Frontend Interview Assessment (React + Redux)

## Overview
This project is a **role-based login and dashboard system** built using React, Redux, and React Router. It simulates authentication with mock tokens stored locally to demonstrate role-based access control for Admin, Merchant, and Member users.  

## Objectives
- Role-based login and registration for Admin, Merchant, and Member.
- Protected routes based on user role.
- Dashboard views for each role with dummy data.
- State management using Redux.

## Authentication
- **Admin Login:** Email + Password
- **Merchant Login:** Store Details + Password
- **Member Login:** Phone/Email + Password or OTP simulation
- On successful login/registration, a fake token is stored in `localStorage`:
  - `admin-token`
  - `merchant-token`
  - `member-token`
- Tokens and user roles are managed in Redux.
- Users are redirected to their respective dashboard after login.

## Dashboards

### Admin Dashboard
- Manage Users and Merchants
- Display dummy table data

### Merchant Dashboard
- Approve Purchases (table with approve button)
- Lookup Customers (search bar with dummy results)
- Set Contribution Rate (number input form)
- Notifications (list of "Approval Requests")

### Member Dashboard
- Points Summary (dummy overview)

## Routing
- Implemented using **React Router**
- Routes:
  - `/login/admin`
  - `/login/merchant`
  - `/login/member`
  - `/dashboard/admin`
  - `/dashboard/merchant`
  - `/dashboard/member`
- Protected Routes: Users without correct role are redirected to login page.

## State Management (Redux)
- Authentication state (token, user role) managed in Redux
- Dummy dashboard data stored in Redux store
- Logout clears token and resets Redux state

## UI/UX
- Built with **Material-UI** or **TailwindCSS**
- Clean and simple design

## Extra Features (Optional)
- Load dummy dashboard data from JSON files
- Form validation for login inputs
- Loader for actions/sections

## Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-link>
