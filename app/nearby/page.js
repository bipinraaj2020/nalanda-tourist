import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { NearbyCard } from '@/components/Cards/Cards';
import nearbyPlaces from '@/data/nearby.json';

export const metadata = {
    title: 'Nearby Destinations | Explore Nalanda',
    description: 'Discover places near Nalanda including Rajgir, Pawapuri, Bodh Gaya, and more historical sites in Bihar.',
};

export default function NearbyPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://rajgirsafari.bihar.gov.in/images/5.jpeg"
                        alt="Nearby Destinations"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>EXPLORE THE REGION</span>
                    <h1 className={styles.heroTitle}>
                        Discover Beyond Nalanda
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Extend your journey to the surrounding treasures of Bihar. From ancient capitals to pilgrimage sites, the region offers endless exploration.
                    </p>
                </div>
            </section>

            {/* Quick Overview */}
            <section className={styles.overview}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewCard}>
                            <span className={styles.overviewIcon}>🗺️</span>
                            <h3 className={styles.overviewTitle}>6+</h3>
                            <p className={styles.overviewText}>Major Destinations</p>
                        </div>
                        <div className={styles.overviewCard}>
                            <span className={styles.overviewIcon}>🚗</span>
                            <h3 className={styles.overviewTitle}>12-250 km</h3>
                            <p className={styles.overviewText}>Distance Range</p>
                        </div>
                        <div className={styles.overviewCard}>
                            <span className={styles.overviewIcon}>⏰</span>
                            <h3 className={styles.overviewTitle}>1-4 hrs</h3>
                            <p className={styles.overviewText}>Travel Time</p>
                        </div>
                        <div className={styles.overviewCard}>
                            <span className={styles.overviewIcon}>🏛️</span>
                            <h3 className={styles.overviewTitle}>UNESCO</h3>
                            <p className={styles.overviewText}>Heritage Sites</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Places Grid */}
            <section className={styles.places}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Popular Destinations</h2>
                        <p className={styles.sectionSubtitle}>
                            Explore the spiritual and historical wonders within reach of Nalanda.
                        </p>
                    </div>

                    <div className={styles.placesGrid}>
                        {nearbyPlaces.map((place, index) => (
                            <NearbyCard key={place.id} place={place} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips Section */}
            <section className={styles.travelTips}>
                <div className={styles.container}>
                    <h2 className={styles.tipsTitle}>Travel Tips</h2>

                    <div className={styles.tipsGrid}>
                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>🚌</div>
                            <h3 className={styles.tipCardTitle}>Getting Around</h3>
                            <p className={styles.tipCardText}>
                                Local buses and shared autos are available from Nalanda. For comfort, hire a private taxi or use app-based cab services from Patna.
                            </p>
                        </div>

                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>📅</div>
                            <h3 className={styles.tipCardTitle}>Best Time to Visit</h3>
                            <p className={styles.tipCardText}>
                                October to March offers pleasant weather. Avoid the summer months (April-June) due to extreme heat in the region.
                            </p>
                        </div>

                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>🎒</div>
                            <h3 className={styles.tipCardTitle}>What to Pack</h3>
                            <p className={styles.tipCardText}>
                                Comfortable walking shoes, sun protection, water bottles, and modest clothing for religious sites are essential.
                            </p>
                        </div>

                        <div className={styles.tipCard}>
                            <div className={styles.tipIcon}>📱</div>
                            <h3 className={styles.tipCardTitle}>Stay Connected</h3>
                            <p className={styles.tipCardText}>
                                Download offline maps as network coverage can be patchy in rural areas. Keep emergency contacts handy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suggested Itineraries */}
            <section className={styles.itineraries}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Suggested Itineraries</h2>
                    <p className={styles.sectionSubtitle}>
                        Plan your perfect trip with our curated routes.
                    </p>

                    <div className={styles.itineraryGrid}>
                        <div className={styles.itineraryCard}>
                            <div className={styles.itineraryHeader}>
                                <span className={styles.duration}>2 Days</span>
                                <h3 className={styles.itineraryTitle}>Buddhist Circuit</h3>
                            </div>
                            <p className={styles.itineraryDesc}>
                                Nalanda → Rajgir → Bodh Gaya. Follow the footsteps of Buddha through ancient monasteries and the place of his enlightenment.
                            </p>
                            <ul className={styles.itineraryStops}>
                                <li>Day 1: Nalanda Ruins, Hiuen Tsang Memorial, Rajgir</li>
                                <li>Day 2: Bodh Gaya, Mahabodhi Temple</li>
                            </ul>
                            <Link href="#" className={styles.itineraryBtn}>View Details</Link>
                        </div>

                        <div className={styles.itineraryCard}>
                            <div className={styles.itineraryHeader}>
                                <span className={styles.duration}>1 Day</span>
                                <h3 className={styles.itineraryTitle}>Jain Pilgrimage</h3>
                            </div>
                            <p className={styles.itineraryDesc}>
                                Nalanda → Pawapuri → Kundalpur. Visit significant Jain sites including where Lord Mahavira attained Moksha.
                            </p>
                            <ul className={styles.itineraryStops}>
                                <li>Morning: Kundalpur temples</li>
                                <li>Afternoon: Pawapuri Jal Mandir</li>
                            </ul>
                            <Link href="#" className={styles.itineraryBtn}>View Details</Link>
                        </div>

                        <div className={styles.itineraryCard}>
                            <div className={styles.itineraryHeader}>
                                <span className={styles.duration}>3 Days</span>
                                <h3 className={styles.itineraryTitle}>Complete Bihar Heritage</h3>
                            </div>
                            <p className={styles.itineraryDesc}>
                                Nalanda → Rajgir → Vaishali → Patna. A comprehensive tour of Bihar&apos;s ancient history and modern capital.
                            </p>
                            <ul className={styles.itineraryStops}>
                                <li>Day 1: Nalanda University Complex</li>
                                <li>Day 2: Rajgir & Hot Springs</li>
                                <li>Day 3: Vaishali, Patna Museum</li>
                            </ul>
                            <Link href="#" className={styles.itineraryBtn}>View Details</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Explore?</h2>
                        <p className={styles.ctaText}>
                            Start planning your journey through the ancient lands of Bihar today.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/hotels" className={styles.ctaPrimaryBtn}>
                                Book Accommodation
                            </Link>
                            <Link href="/destinations" className={styles.ctaSecondaryBtn}>
                                View All Attractions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
