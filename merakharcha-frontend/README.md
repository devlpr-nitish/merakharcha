# Merakharcha

**Manage Shared Finances with Ease**

Merakharcha is a modern, user-friendly expense management application designed to simplify splitting expenses among friends, roommates, and business teams. Track spending patterns, gain financial insights, and settle debts effortlessly.

## 🌟 Features

- **Manage Groups**: Organize expenses for different groups (friends, roommates, business teams)
- **Track Spending**: Monitor and analyze expense patterns over time with real-time data
- **Get Insights**: Understand spending habits with detailed analytics and visual reports
- **Instant Access**: Access your expense data anytime, anywhere, on any device
- **Multiple Payment Methods**: Support for UPI, Bank Transfer, and Cash settlements
- **Smart Notifications**: Stay updated with real-time notifications on group activities
- **Expense Splitting**: Flexible splitting options (equal, custom, percentage-based)
- **Settlement Management**: Easy payment tracking and settlement workflows
- **Reports & Analytics**: Comprehensive analytics with category breakdown and monthly trends

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Charts**: [Recharts](https://recharts.org)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Language**: [TypeScript](https://www.typescriptlang.org)

## 📁 Project Structure

\`\`\`
merakharcha/
├── app/
│   ├── dashboard/           # Main dashboard page
│   ├── groups/              # Group management pages
│   ├── expenses/            # Expense tracking pages
│   ├── profile/             # User profile management
│   ├── friends/             # Friend connections
│   ├── notifications/       # Activity notifications
│   ├── settle-up/           # Payment settlement
│   ├── reports/             # Analytics & reports
│   ├── settings/            # User settings
│   ├── help/                # Support & FAQ
│   ├── layout.tsx           # Root layout with Navbar
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles
├── components/
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer component
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── public/                  # Static assets
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/merakharcha.git
   cd merakharcha
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 Usage

### Landing Page
Visit the home page to learn about Merakharcha's features and get started.

### Authentication
- Sign up with email and create a password
- Log in with existing credentials
- Secure authentication with password recovery option

### Dashboard
- View your balance overview at a glance
- See recent expenses and group summaries
- Quick actions to add expenses or create groups

### Managing Groups
- Create new groups for different purposes
- Add members and manage group settings
- View group-specific expenses and balances

### Adding Expenses
- Create new expenses with flexible splitting options
- Choose split type: Equal, Custom amounts, or Percentage-based
- Add notes and categories to organize expenses

### Tracking & Analytics
- View all expenses with filtering and search
- Generate detailed reports by category and group
- Track monthly spending trends
- Analyze expense patterns over time

### Settlement
- View pending payments and settle debts
- Multiple payment methods (UPI, Bank Transfer, Cash)
- Upload payment receipts for confirmation
- Track settlement history

## 🎨 Design System

The application uses a cohesive design system with:

- **Color Palette**: Professional light and dark themes
- **Typography**: Geist font family for clean, modern appearance
- **Components**: Reusable shadcn/ui components
- **Responsive Design**: Mobile-first approach for all screen sizes
- **Accessibility**: ARIA labels and semantic HTML throughout

## 🔧 Environment Variables

Currently, the application runs with no required environment variables for development. For production deployment:

\`\`\`env
# Add any required API endpoints or secrets here
NEXT_PUBLIC_API_URL=your_api_url
\`\`\`

## 📱 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Marketing homepage |
| Dashboard | `/dashboard` | Main app overview |
| Groups | `/groups` | Manage expense groups |
| Create Group | `/groups/create` | Create new group |
| Group Details | `/groups/[id]` | View group details |
| Expenses | `/expenses` | List all expenses |
| Create Expense | `/expenses/create` | Add new expense |
| Expense Details | `/expenses/[id]` | View expense details |
| Profile | `/profile` | User account settings |
| Friends | `/friends` | Manage friend connections |
| Notifications | `/notifications` | Activity feed |
| Settle Up | `/settle-up` | Payment management |
| Payment | `/settle-up/[id]` | Complete payment |
| Reports | `/reports` | Analytics & insights |
| Settings | `/settings` | App preferences |
| Help | `/help` | FAQ & support |

## 🚀 Deployment

### Deploy to Vercel

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📝 Scripts

\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💡 Future Enhancements

- Integration with payment gateways (Stripe, Razorpay)
- Email notifications and reminders
- Advanced analytics with ML-based recommendations
- Mobile app (React Native)
- Currency support for international users
- Group chat and messaging
- Scheduled expenses and recurring payments
- Budget tracking and alerts

## 🐛 Troubleshooting

### Port Already in Use
\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Build Errors
\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run build
\`\`\`

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

Built with ❤️ by Nitish
