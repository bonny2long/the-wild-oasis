# The Wild Oasis

A modern hotel management system built with React, Vite, and Supabase for managing cabins, bookings, and guests. React Course with Jonas

## Features

### 🏨 Cabin Management

- View and manage cabin inventory
- Add, edit, and delete cabin information
- Upload cabin images
- Track cabin availability and pricing

### 📅 Booking System

- Complete booking management dashboard
- View booking details and guest information
- Check-in and check-out functionality
- Today's activity overview

### 👤 Guest Management

- Guest registration and profiles
- Booking history tracking
- Guest preferences and special requirements

### 📊 Analytics Dashboard

- Sales charts and revenue tracking
- Booking duration analytics
- Occupancy statistics
- Recent bookings and stays overview

### 🔐 Authentication & User Management

- Secure login/logout system
- User registration and profile management
- Password update functionality
- Role-based access control

### ⚙️ Settings & Configuration

- Hotel settings management
- Dark mode toggle
- Customizable booking parameters

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Styled Components, React Icons
- **State Management**: React Query (TanStack Query)
- **Backend**: Supabase
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Notifications**: React Hot Toast
- **Error Handling**: React Error Boundary

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd the-wild-oasis
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:

```env
REACT_APP_SUPABASE_KEY=your_supabase_anon_key
```

4. Configure Supabase:

- Update the `supabaseUrl` in `src/services/supabase.js` with your Supabase project URL
- Ensure your Supabase database is set up with the required tables

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable components
├── context/            # React context providers
├── data/               # Static data and sample files
├── features/           # Feature-based components
│   ├── authentication/ # Login, signup, user management
│   ├── bookings/       # Booking management
│   ├── cabins/         # Cabin management
│   ├── check-in-out/   # Check-in/out functionality
│   ├── dashboard/      # Analytics dashboard
│   └── settings/       # Application settings
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API services and Supabase config
├── styles/             # Global styles
├── ui/                 # UI components and layout
└── utils/              # Utility functions
```

## Key Features Explained

### Dashboard Analytics

The dashboard provides comprehensive insights into hotel operations with:

- Revenue tracking and sales charts
- Booking duration analysis
- Occupancy rates and statistics
- Real-time activity monitoring

### Booking Management

Complete booking lifecycle management including:

- Booking creation and modification
- Guest check-in/check-out processes
- Payment tracking
- Special requests handling

### Cabin Administration

Comprehensive cabin management system featuring:

- Cabin details and amenities
- Image gallery management
- Pricing and availability control
- Maintenance scheduling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and not licensed for public use.
