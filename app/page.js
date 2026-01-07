'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { DestinationCard } from '@/components/Cards/Cards';
import destinations from '@/data/destinations.json';

export default function Home() {
  const topAttractions = destinations.slice(0, 3);

  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes('@')) {
      setSubscribeStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setSubscribeStatus('loading');

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demo purposes, we'll just simulate success
      // In production, you'd send this to your backend/email service
      console.log('Subscribed with email:', email);

      setSubscribeStatus('success');
      setMessage('Thank you for subscribing! 🎉');
      setEmail('');

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscribeStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setSubscribeStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/39a431eb34b337cc14d2c07e65aee5b6_1000x1000.jpg"
            alt="Nalanda University Ruins"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>HERITAGE OF INDIA</span>
          <h1 className={styles.heroTitle}>
            Discover the Ancient Seat<br />of Knowledge
          </h1>
          <p className={styles.heroSubtitle}>
            Walk through the corridors where history was written. Experience the<br />
            serenity and wisdom of Nalanda.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/destinations" className={styles.primaryBtn}>
              Start Exploring →
            </Link>
            <button className={styles.secondaryBtn}>
              <span className={styles.playIcon}>▶</span>
              Watch Video
            </button>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <div className={styles.imageFrame}>
                <Image
                  src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/041023-Taresh-Datta-Lead.jpg?resize=740%2C524&ssl=1"
                  alt="Ancient Stupa"
                  fill
                  className={styles.aboutImg}
                />
                <div className={styles.imageLabel}>
                  <span className={styles.labelYear}>5th Century CE</span>
                </div>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>ABOUT NALANDA</span>
              <h2 className={styles.aboutTitle}>
                A Legacy of<br />
                <span className={styles.highlight}>Enlightenment</span>
              </h2>
              <p className={styles.aboutText}>
                Founded in the 5th century CE, Nalanda was a renowned mahavihara (great monastery) in ancient Magadha. It stands as a monument to the intellectual curiosity of ancient India.
              </p>
              <p className={styles.aboutText}>
                As the world&apos;s first residential university, it attracted scholars from China, Korea, Japan, Tibet, Mongolia, Turkey, Sri Lanka, and Southeast Asia. Today, these ruins whisper stories of philosophy, astronomy, mathematics, and logic.
              </p>
              <Link href="/history" className={styles.readMore}>
                Read Full History →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions Section */}
      <section className={styles.attractions}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Top Attractions</h2>
              <p className={styles.sectionSubtitle}>
                Explore the remnants of monasteries, temples, and lecture halls that once housed 10,000 students.
              </p>
            </div>
            <Link href="/destinations" className={styles.viewAll}>
              View All Sites →
            </Link>
          </div>

          <div className={styles.attractionsGrid}>
            {topAttractions.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Trip Section */}
      <section className={styles.planTrip}>
        <div className={styles.container}>
          <h2 className={styles.planTitle}>Plan Your Perfect Trip</h2>

          <div className={styles.planGrid}>
            <div className={styles.planCard}>
              <div className={styles.planIcon}>🏨</div>
              <h3 className={styles.planCardTitle}>Comfortable Stay</h3>
              <p className={styles.planCardText}>
                Find handpicked stays for budget-friendly guest houses.
              </p>
              <Link href="/hotels" className={styles.planLink}>
                FIND HOTELS
              </Link>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planIcon}>🍛</div>
              <h3 className={styles.planCardTitle}>Local Cuisine</h3>
              <p className={styles.planCardText}>
                Taste the authentic flavors of Magadha and Bihar.
              </p>
              <Link href="/restaurants" className={styles.planLink}>
                EXPLORE FOOD
              </Link>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planIcon}>🗺️</div>
              <h3 className={styles.planCardTitle}>Travel Guides</h3>
              <p className={styles.planCardText}>
                Curated itineraries for history buffs and spiritual seekers.
              </p>
              <Link href="/nearby" className={styles.planLink}>
                VIEW GUIDES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Plan your visit today</h2>
            <p className={styles.newsletterText}>
              Sign up for our newsletter to get travel tips, historical insights, and updates about Nalanda tourism.
            </p>
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribeStatus === 'loading'}
              />
              <button
                type="submit"
                className={styles.subscribeBtn}
                disabled={subscribeStatus === 'loading'}
              >
                {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p className={`${styles.subscribeMessage} ${subscribeStatus === 'success' ? styles.successMessage : styles.errorMessage}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
