import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'History of Nalanda | Explore Nalanda',
    description: 'Discover the rich history of Nalanda University, the ancient center of learning from the 5th century CE.',
};

const timelineEvents = [
    {
        id: 1,
        era: '5TH CENTURY CE',
        title: 'The Foundation',
        description: 'Founded by Kumaragupta I of the Gupta dynasty, the monastery established a tradition of scholarship blessed by the patronage of Lord Buddha and Mahavira\'s disciples.',
        image: 'https://images.unsplash.com/photo-1691348293238-a5974ac44619?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        side: 'left',
    },
    {
        id: 2,
        era: '7TH - 8TH CENTURY',
        title: 'The Golden Age',
        description: 'At its peak, Nalanda attracted students from China, Japan, Korea, Tibet, Central Asia, and beyond. The university housed 10,000+ students and 2,000 teachers studying philosophy, astronomy, and medicine.',
        image: 'https://literaturecurry.com/uploads/blog/a23f68a6-b84b-4b5b-af79-bade3ebe664b_nalanda.jpg',
        side: 'right',
        highlight: true,
    },
    {
        id: 3,
        era: '630 - 643 CE',
        title: 'The Global Pilgrimage',
        description: 'The famous Chinese traveler Xuanzang (Hiuen Tsang) studied at Nalanda for five years. He later took hundreds of manuscripts back to China, forever connecting East Asian Buddhism to Nalanda.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksby3CjgAKQlTP-hEzde3NUiMD2j9uoX11Q&s',
        side: 'left',
    },
    {
        id: 4,
        era: '1193 CE',
        title: 'The Great Destruction',
        description: 'The university was attacked and destroyed by Bakhtiyar Khilji\'s forces, bringing an abrupt end to centuries of learning. The library reportedly burned for months, and monks fled to Tibet and Nepal.',
        image: 'https://caleidoscope.in/wp-content/uploads/2020/08/History-of-Nalanda-University.jpg',
        side: 'right',
    },
    {
        id: 5,
        era: '19TH CENTURY',
        title: 'The Rediscovery',
        description: 'Scottish scholar Alexander Cunningham identified the ruins as ancient Nalanda in the 1860s. Systematic excavations unearthed the grandeur of the ancient institution once lost to time.',
        image: 'https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/12/IMG_9861.jpeg',
        side: 'left',
    },
    {
        id: 6,
        era: '2014 - PRESENT',
        title: 'A Modern Phoenix',
        description: 'In a historic collaboration between East Asian nations, Nalanda University was revived as a modern international university, returning after 800 years to its mission of cross-cultural learning.',
        image: 'https://nalandauniv.edu.in/wp-content/uploads/2021/07/2-min-1.jpg',
        side: 'right',
        isNew: true,
    },
];

export default function HistoryPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://static.toiimg.com/photo/103854870.cms"
                        alt="Nalanda History"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        The Intellectual Capital of the<br />Ancient World
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Journey through time to discover the legacy of the magnificent Magadh empire, the cradle of knowledge that illuminated Asia for centuries.
                    </p>
                </div>

                <div className={styles.scrollHint}>
                    <span>Scroll to explore</span>
                    <div className={styles.scrollArrow}>↓</div>
                </div>
            </section>

            {/* Chronicle Introduction */}
            <section className={styles.chronicle}>
                <div className={styles.container}>
                    <h2 className={styles.chronicleTitle}>Chronicle of Enlightenment</h2>
                    <p className={styles.chronicleText}>
                        Established in the 5th century AD, Nalanda University was one of the most historically significant seats of learning on Earth. It produced great minds who influenced East Asian thought, science, and spirituality. It came under the patronage of the Gupta dynasty, Pala Empire, and Buddhist leaders.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={styles.timeline}>
                <div className={styles.container}>
                    <div className={styles.timelineLine} />

                    {timelineEvents.map((event) => (
                        <div
                            key={event.id}
                            className={`${styles.timelineItem} ${styles[event.side]} ${event.highlight ? styles.highlight : ''}`}
                        >
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineImage}>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className={styles.eventImage}
                                    />
                                    {event.isNew && (
                                        <span className={styles.newBadge}>NEW</span>
                                    )}
                                </div>
                                <div className={styles.timelineText}>
                                    <span className={styles.era}>{event.era}</span>
                                    <h3 className={styles.eventTitle}>{event.title}</h3>
                                    <p className={styles.eventDescription}>{event.description}</p>
                                    {event.highlight && (
                                        <div className={styles.stats}>
                                            <div className={styles.stat}>
                                                <span className={styles.statNumber}>10,000+</span>
                                                <span className={styles.statLabel}>Students</span>
                                            </div>
                                            <div className={styles.stat}>
                                                <span className={styles.statNumber}>2,000+</span>
                                                <span className={styles.statLabel}>Teachers</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={styles.timelineDot} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Walk Where History Section */}
            <section className={styles.walkHistory}>
                <div className={styles.container}>
                    <div className={styles.walkContent}>
                        <h2 className={styles.walkTitle}>Walk Where History Was Written</h2>
                        <p className={styles.walkText}>
                            Experience the ruins of the ancient complex yourself. The site is a UNESCO World Heritage location with guided tours available.
                        </p>
                        <div className={styles.walkButtons}>
                            <Link href="/destinations" className={styles.primaryBtn}>
                                Plan Your Trip
                            </Link>
                            <button className={styles.secondaryBtn}>
                                📥 Download Guide
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legacy Numbers */}
            <section className={styles.legacyNumbers}>
                <div className={styles.container}>
                    <div className={styles.numbersGrid}>
                        <div className={styles.numberCard}>
                            <span className={styles.number}>700+</span>
                            <span className={styles.numberLabel}>Years of Operation</span>
                        </div>
                        <div className={styles.numberCard}>
                            <span className={styles.number}>12</span>
                            <span className={styles.numberLabel}>Academic Monasteries</span>
                        </div>
                        <div className={styles.numberCard}>
                            <span className={styles.number}>9M+</span>
                            <span className={styles.numberLabel}>Books in Library</span>
                        </div>
                        <div className={styles.numberCard}>
                            <span className={styles.number}>100+</span>
                            <span className={styles.numberLabel}>Countries Represented</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
