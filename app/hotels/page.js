'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { HotelCard } from '@/components/Cards/Cards';
import hotels from '@/data/hotels.json';

export default function HotelsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('all');
    const [sortBy, setSortBy] = useState('recommended');

    const filteredHotels = hotels
        .filter(hotel => {
            // Search filter
            if (searchQuery && !hotel.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }
            // Price filter
            if (priceFilter === 'budget' && hotel.price > 2500) return false;
            if (priceFilter === 'mid' && (hotel.price < 2500 || hotel.price > 5000)) return false;
            if (priceFilter === 'luxury' && hotel.price < 5000) return false;
            return true;
        })
        .sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
                        alt="Hotels in Nalanda"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Find Sanctuary near the<br />Ancient Ruins
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Experience the legacy of Nalanda with our curated selection of stays rooted in history.
                    </p>

                    {/* Search Bar */}
                    <div className={styles.searchContainer}>
                        <div className={styles.searchBar}>
                            <div className={styles.searchInput}>
                                <span className={styles.searchIcon}>🔍</span>
                                <input
                                    type="text"
                                    placeholder="Hotel name or location"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.dateInput}>
                                <span className={styles.calendarIcon}>📅</span>
                                <input
                                    type="text"
                                    placeholder="Check-in - Check-out"
                                    className={styles.input}
                                />
                            </div>
                            <button className={styles.searchBtn}>Search</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className={styles.filtersSection}>
                <div className={styles.container}>
                    <div className={styles.filters}>
                        <div className={styles.filterGroup}>
                            <select
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value)}
                                className={styles.filterSelect}
                            >
                                <option value="all">Price Range ▾</option>
                                <option value="budget">Budget (Under ₹2,500)</option>
                                <option value="mid">Mid-Range (₹2,500-₹5,000)</option>
                                <option value="luxury">Luxury (₹5,000+)</option>
                            </select>

                            <select className={styles.filterSelect}>
                                <option>Star Rating ▾</option>
                                <option>5 Stars</option>
                                <option>4 Stars</option>
                                <option>3 Stars</option>
                            </select>

                            <select className={styles.filterSelect}>
                                <option>Amenities ▾</option>
                                <option>WiFi</option>
                                <option>Pool</option>
                                <option>Spa</option>
                            </select>

                            <select className={styles.filterSelect}>
                                <option>Guest Rating ▾</option>
                                <option>Excellent (4.5+)</option>
                                <option>Very Good (4.0+)</option>
                                <option>Good (3.5+)</option>
                            </select>
                        </div>

                        <div className={styles.sortGroup}>
                            <span className={styles.sortLabel}>Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className={styles.sortSelect}
                            >
                                <option value="recommended">Recommended</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Guest Rating</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotels Grid */}
            <section className={styles.hotels}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Accommodations in Nalanda</h2>
                        <p className={styles.sectionSubtitle}>
                            Showing {filteredHotels.length} handpicked properties found
                        </p>
                    </div>

                    <div className={styles.hotelsGrid}>
                        {filteredHotels.map((hotel, index) => (
                            <HotelCard key={hotel.id} hotel={hotel} index={index} />
                        ))}
                    </div>

                    {filteredHotels.length === 0 && (
                        <div className={styles.noResults}>
                            <p>No hotels found matching your criteria.</p>
                        </div>
                    )}

                    <div className={styles.loadMore}>
                        <button className={styles.loadMoreBtn}>
                            Load More Properties ↓
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
