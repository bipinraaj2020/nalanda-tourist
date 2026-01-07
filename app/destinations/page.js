'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { DestinationCard } from '@/components/Cards/Cards';
import destinations from '@/data/destinations.json';

const categories = ['All', 'Ruins', 'Museums', 'Religious Sites', 'Nature'];

export default function DestinationsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [viewMode, setViewMode] = useState('grid');

    const filteredDestinations = activeCategory === 'All'
        ? destinations
        : destinations.filter(d => {
            const cat = d.category.toLowerCase();
            if (activeCategory === 'Ruins') return cat.includes('heritage') || cat.includes('campus');
            if (activeCategory === 'Museums') return cat.includes('museum');
            if (activeCategory === 'Religious Sites') return cat.includes('temple') || cat.includes('shrine') || cat.includes('religious');
            if (activeCategory === 'Nature') return cat.includes('nature');
            return true;
        });

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://nalandauniv.edu.in/wp-content/uploads/2021/07/3-min-1.jpg"
                        alt="Nalanda Destinations"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>HISTORICAL HERITAGE</span>
                    <h1 className={styles.heroTitle}>Timeless Nalanda</h1>
                    <p className={styles.heroSubtitle}>
                        Discover the seat of ancient knowledge. Walk through the architectural marvels of a bygone era where scholars once gathered from across the world.
                    </p>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className={styles.filters}>
                <div className={styles.container}>
                    <div className={styles.filterTabs}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterTab} ${activeCategory === category ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className={styles.destinations}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <h2 className={styles.sectionTitle}>Major Attractions</h2>
                            <p className={styles.sectionSubtitle}>
                                Must-visit destinations in the city of knowledge.
                            </p>
                        </div>
                        <div className={styles.viewToggle}>
                            <button
                                className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                                onClick={() => setViewMode('grid')}
                                aria-label="Grid view"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                </svg>
                            </button>
                            <button
                                className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
                                onClick={() => setViewMode('list')}
                                aria-label="List view"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <rect x="3" y="4" width="18" height="4" rx="1" />
                                    <rect x="3" y="10" width="18" height="4" rx="1" />
                                    <rect x="3" y="16" width="18" height="4" rx="1" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${styles.destinationsGrid} ${viewMode === 'list' ? styles.listView : ''}`}>
                        {filteredDestinations.map((destination, index) => (
                            <DestinationCard key={destination.id} destination={destination} index={index} />
                        ))}
                    </div>

                    {filteredDestinations.length === 0 && (
                        <div className={styles.noResults}>
                            <p>No destinations found in this category.</p>
                        </div>
                    )}

                    <div className={styles.loadMore}>
                        <button className={styles.loadMoreBtn}>
                            View More Attractions
                        </button>
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
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.emailInput}
                            />
                            <button type="submit" className={styles.subscribeBtn}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
