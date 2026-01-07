import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Explore Nalanda - Discover the Ancient Seat of Knowledge',
  description: 'Your digital guide to exploring Nalanda, Bihar. Discover UNESCO World Heritage ruins, local cuisine, accommodations, and the rich history of the ancient university.',
  keywords: 'Nalanda, Bihar, tourism, UNESCO, ancient university, Buddhist, heritage, India travel',
  openGraph: {
    title: 'Explore Nalanda - Tourism Portal',
    description: 'Discover the ancient seat of knowledge. Plan your visit to Nalanda, Bihar.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
