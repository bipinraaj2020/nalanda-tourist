'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { DishCard } from '@/components/Cards/Cards';
import dishes from '@/data/dishes.json';

export default function RestaurantsPage() {
    const [filter, setFilter] = useState('all');

    const filteredDishes = filter === 'all'
        ? dishes
        : filter === 'veg'
            ? dishes.filter(d => d.isVeg)
            : dishes.filter(d => !d.isVeg);

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1920&q=80"
                        alt="Cuisine of Nalanda"
                        fill
                        priority
                        className={styles.heroImage}
                    />
                    <div className={styles.heroOverlay} />
                </div>

                <div className={styles.heroContent}>
                    <span className={styles.heroBadge}>CULINARY JOURNEY</span>
                    <h1 className={styles.heroTitle}>
                        The Taste of Nalanda
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Savor the ancient flavors of Magadh, where history meets culinary art in every bite.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="#dishes" className={styles.primaryBtn}>
                            Explore Dishes
                        </Link>
                        <button className={styles.secondaryBtn}>
                            View Food Map
                        </button>
                    </div>
                </div>
            </section>

            {/* Legacy Section */}
            <section className={styles.legacy}>
                <div className={styles.container}>
                    <h2 className={styles.legacyTitle}>A Legacy on a Platter</h2>
                    <p className={styles.legacyText}>
                        Nalanda&apos;s cuisine is deeply influenced by the simplicity of Buddhist traditions and the earthy richness of rural Bihar. From the smoky aroma of roasted litti to the delicate sweetness of Silao&apos;s khaja, every dish tells a story of the land&apos;s history, agriculture, and heritage.
                    </p>

                    <div className={styles.cookingMethods}>
                        <div className={styles.methodCard}>
                            <span className={styles.methodIcon}>🔥</span>
                            <div>
                                <h3 className={styles.methodTitle}>Clay Oven</h3>
                                <p className={styles.methodDesc}>Traditional flame cooking</p>
                            </div>
                        </div>
                        <div className={styles.methodCard}>
                            <span className={styles.methodIcon}>🍯</span>
                            <div>
                                <h3 className={styles.methodTitle}>Seasonal</h3>
                                <p className={styles.methodDesc}>Farm fresh ingredients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signature Dishes Section */}
            <section id="dishes" className={styles.dishes}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <h2 className={styles.sectionTitle}>Signature Dishes</h2>
                            <p className={styles.sectionSubtitle}>
                                Iconic flavors that define Bihar&apos;s culinary heritage.
                            </p>
                        </div>
                        <div className={styles.filterButtons}>
                            <button
                                className={`${styles.filterBtn} ${filter === 'all' ? styles.active : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === 'veg' ? styles.active : ''}`}
                                onClick={() => setFilter('veg')}
                            >
                                🟢 Veg
                            </button>
                            <button
                                className={`${styles.filterBtn} ${filter === 'nonveg' ? styles.active : ''}`}
                                onClick={() => setFilter('nonveg')}
                            >
                                🔴 Non-Veg
                            </button>
                        </div>
                    </div>

                    <div className={styles.dishesGrid}>
                        {filteredDishes.map((dish, index) => (
                            <DishCard key={dish.id} dish={dish} index={index} />
                        ))}
                    </div>

                    <div className={styles.viewMore}>
                        <Link href="#" className={styles.viewMoreLink}>
                            View All Menu →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Did You Know Section */}
            <section className={styles.didYouKnow}>
                <div className={styles.container}>
                    <div className={styles.didYouKnowGrid}>
                        <div className={styles.didYouKnowContent}>
                            <span className={styles.badge}>FOOD HISTORY</span>
                            <h2 className={styles.didYouKnowTitle}>Did You Know?</h2>
                            <p className={styles.didYouKnowText}>
                                Nalanda&apos;s culinary heritage is strongly influenced by the dietary practices of ancient scholars at Nalanda University. The cuisine emphasized ingredients that aid digestion and mental clarity, such as sattu, seasonal greens, and light spices.
                            </p>

                            <div className={styles.factCards}>
                                <div className={styles.factCard}>
                                    <div className={styles.factIcon}>🌾</div>
                                    <div>
                                        <h4 className={styles.factTitle}>Superfood Sattu</h4>
                                        <p className={styles.factDesc}>High in protein, perfect for yogis and scholars</p>
                                    </div>
                                </div>
                                <div className={styles.factCard}>
                                    <div className={styles.factIcon}>🍃</div>
                                    <div>
                                        <h4 className={styles.factTitle}>Eco-friendly</h4>
                                        <p className={styles.factDesc}>Sustainable, farm-fresh ingredients</p>
                                    </div>
                                </div>
                                <div className={styles.factCard}>
                                    <div className={styles.factIcon}>🔥</div>
                                    <div>
                                        <h4 className={styles.factTitle}>Chulha Cooking</h4>
                                        <p className={styles.factDesc}>Earth ovens used for a smoky, earthy flavor</p>
                                    </div>
                                </div>
                            </div>

                            <Link href="/history" className={styles.readMoreBtn}>
                                Read Full History
                            </Link>
                        </div>

                        <div className={styles.didYouKnowImage}>
                            <Image
                                src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80"
                                alt="Traditional Bihari Cooking"
                                fill
                                className={styles.factImage}
                            />
                            <div className={styles.imageCaption}>
                                Traditional Chulha cooking is a dying art
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recipe Newsletter */}
            <section className={styles.newsletter}>
                <div className={styles.container}>
                    <div className={styles.newsletterContent}>
                        <h2 className={styles.newsletterTitle}>Taste the Authentic Recipes</h2>
                        <p className={styles.newsletterText}>
                            Sign up to receive a curated list of authentic Bihari recipes and restaurant recommendations in Nalanda straight to your inbox.
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
