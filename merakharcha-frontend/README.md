# Merakharcha

**Split Expenses. Track Spending. Stay Organized.**

Merakharcha is a clean and intuitive expense management application
built for friends, roommates, and small teams. Easily split bills, track
spending habits, and settle balances --- all in one place.

> Developed and maintained by a **solo developer**.

## Features

-   **Groups Management** --- Create groups for trips, roommates,
    friends, and team`s\
-   **Smart Expense Splitting** --- Equal, custom, and percentage-based
    split options\
-   **Real-Time Tracking** --- Clear summaries of expenses and balances\
-   **Visual Insights** --- Monthly analytics, charts, category
    breakdowns\
-   **Multiple Settlement Methods** --- UPI, Bank Transfer, Cash\
-   **Activity Notifications** --- Stay updated on group activity\
-   **Access Anywhere** --- Fully responsive, cross-device support\
-   **Reports** --- Exportable insights and detailed history

## Tech Stack

-   **Framework:** Next.js 16 (App Router)\
-   **Frontend:** React 19 + TypeScript\
-   **Styling:** Tailwind CSS v4\
-   **Components:** shadcn/ui\
-   **Icons:** Lucide React\
-   **Charts:** Recharts\
-   **Notifications:** Sonner\
-   **Analytics:** Vercel Analytics

## Project Structure

    merakharcha/
    ├── app/
    │   ├── dashboard/          
    │   ├── groups/              
    │   ├── expenses/            
    │   ├── profile/             
    │   ├── friends/             
    │   ├── notifications/       
    │   ├── settle-up/           
    │   ├── reports/             
    │   ├── settings/            
    │   ├── help/                
    │   ├── layout.tsx           
    │   ├── page.tsx             
    │   └── globals.css          
    ├── components/
    │   ├── navbar.tsx           
    │   ├── footer.tsx           
    │   └── ui/                  
    ├── hooks/                   
    ├── lib/                     
    └── public/                  

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm / yarn / pnpm

### Installation

``` bash
git https://github.com/devlpr-nitish/merakharcha.git
cd merakharcha/merakharcha-frontend
npm install
```

### Run Development Server

``` bash
npm run dev
```

Open: http://localhost:3000

## Usage Overview

### Authentication

-   Email signup and login\
-   Password recovery

### Dashboard

-   Summary of balances\
-   Recent expenses\
-   Quick actions

### Groups

-   Create or join groups\
-   Add members\
-   View group-specific expenses

### Adding Expenses

-   Add title, amount, category, and notes\
-   Choose split type (equal/custom/percentage)

### Analytics & Reports

-   Monthly spending overview\
-   Category insights\
-   Group-wise spending patterns

### Settlement

-   View balances\
-   Settle via UPI, Bank Transfer, Cash\
-   Track settlement history

## 🎨 Design System

-   **Typography:** Geist font family\
-   **Themes:** Light & Dark\
-   **Components:** Reusable shadcn/ui\
-   **Responsive:** Mobile-first layout\
-   **Accessibility:** Semantic HTML and ARIA labels

## 🔧 Environment Variables

``` env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📱 Pages Overview

  Page              Route                Description
  ----------------- -------------------- -------------------------
  Landing           `/`                  Homepage
  Dashboard         `/dashboard`         Summary & quick actions
  Groups            `/groups`            All groups
  Create Group      `/groups/create`     Create a new group
  Group Details     `/groups/[id]`       Group overview
  Expenses          `/expenses`          All expenses
  Create Expense    `/expenses/create`   Add new expense
  Expense Details   `/expenses/[id]`     Detailed view
  Profile           `/profile`           User settings
  Friends           `/friends`           Friend management
  Notifications     `/notifications`     Alerts
  Settle Up         `/settle-up`         Balance settlement
  Payment           `/settle-up/[id]`    Payment workflow
  Reports           `/reports`           Analytics
  Settings          `/settings`          Preferences
  Help              `/help`              FAQs

## Deployment

### Deploy on Vercel

``` bash
npm install -g vercel
vercel
```

### Production Build

``` bash
npm run build
npm run start
```

## Scripts

``` bash
npm run dev
npm run build
npm run start
npm run lint
```

## 💡 Future Enhancements

-   Payment integrations (Razorpay / Stripe)\
-   Push/email notifications\
-   Recurring expenses\
-   Budgeting tools\
-   Currency localization\
-   Group chat\
-   AI-powered insights\
-   Mobile app (React Native)

## Troubleshooting

### Port Already in Use

``` bash
npm run dev -- -p 3001
```

### Build Issues

``` bash
rm -rf .next
npm run build
```

## 🤝 Contributing

This is currently a **solo-developed project**, but contributions and
suggestions are welcome.

## 📄 License

This project is licensed under the **MIT License**.

## ✨ Built with ❤️ by Nitish
