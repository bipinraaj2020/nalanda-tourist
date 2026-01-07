# Explore Nalanda - Tourism Website

A responsive, multi-page tourism website promoting Nalanda, Bihar. This project serves as a digital guide for tourists, showcasing the historical significance, accommodation options, and local cuisine of the region.

![Explore Nalanda](https://whc.unesco.org/uploads/thumbs/site_1502_0010-1200-630-20160616154106.jpg)

## 🏛️ Features

- **Landing Page** - Hero section with Nalanda ruins, about section, and top attractions
- **Destinations** - Grid layout of famous places with filtering by category
- **Hotels** - Accommodation listings with search, filters, and pricing
- **Restaurants** - Local cuisine showcase with signature dishes
- **Nearby** - Nearby destinations like Rajgir, Pawapuri with travel itineraries
- **History** - Timeline of Nalanda's rich 1500+ year history

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules (Pure CSS, no UI libraries)
- **Images**: Next.js Image Component for optimization
- **Fonts**: Inter & Outfit from Google Fonts

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nalanda-tourism
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nalanda-tourism/
├── app/
│   ├── layout.js          # Root layout with Navbar & Footer
│   ├── page.js             # Landing page
│   ├── destinations/       # Tourist attractions page
│   ├── hotels/             # Accommodations page
│   ├── restaurants/        # Local cuisine page
│   ├── nearby/             # Nearby destinations page
│   └── history/            # Historical timeline page
├── components/
│   ├── Navbar/             # Sticky navigation
│   ├── Footer/             # Site footer
│   └── Cards/              # Reusable card components
├── data/
│   ├── destinations.json   # Tourist spots data
│   ├── hotels.json         # Hotels data
│   ├── dishes.json         # Food items data
│   └── nearby.json         # Nearby places data
└── public/
    └── images/             # Static images
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- 📱 Mobile (375px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## ✨ Key Highlights

- **Custom CSS** - No Bootstrap/MUI, demonstrating pure CSS skills
- **Image Optimization** - Using Next.js `<Image />` component
- **Client-Side Routing** - Seamless navigation between pages
- **Sticky Navbar** - Fixed navigation with scroll effects
- **Interactive Filters** - Category filters on destinations and restaurants
- **Modern UI** - Glassmorphism, gradients, and micro-animations

## 🎨 Design System

### Colors
- Primary: `#F5C518` (Golden Yellow)
- Text: `#1A1A1A` (Near Black)
- Background: `#FFFFFF`, `#F5F5F5`

### Typography
- Headings: Outfit
- Body: Inter

## 📄 License

This project is created for internship submission purposes.

---

Made with ❤️ for Nalanda Tourism
