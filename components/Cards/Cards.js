import Image from 'next/image';
import Link from 'next/link';
import styles from './Cards.module.css';

export function DestinationCard({ destination, index }) {
    return (
        <div className={`${styles.destinationCard} animate-fade-in stagger-${(index % 6) + 1}`}>
            <div className={styles.imageWrapper}>
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                />
                <button className={styles.favoriteBtn} aria-label="Add to favorites">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
                <span className={`${styles.categoryBadge} ${styles[destination.categoryClass || 'default']}`}>
                    {destination.category}
                </span>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{destination.name}</h3>
                <p className={styles.cardDescription}>{destination.description}</p>
                {destination.hours && (
                    <p className={styles.hours}>
                        <span className={styles.hoursIcon}>🕐</span>
                        Open: {destination.hours}
                    </p>
                )}
                <Link href={`/destinations#${destination.id}`} className={styles.learnMore}>
                    Learn More →
                </Link>
            </div>
        </div>
    );
}

export function HotelCard({ hotel, index }) {
    return (
        <div className={`${styles.hotelCard} animate-fade-in stagger-${(index % 6) + 1}`}>
            <div className={styles.imageWrapper}>
                <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                />
                <span className={styles.ratingBadge}>
                    ⭐ {hotel.rating}
                </span>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{hotel.name}</h3>
                <p className={styles.location}>
                    <span className={styles.locationIcon}>📍</span>
                    {hotel.distance}
                </p>
                <div className={styles.amenities}>
                    {hotel.amenities.slice(0, 3).map((amenity, i) => (
                        <span key={i} className={styles.amenityTag}>{amenity}</span>
                    ))}
                </div>
                <div className={styles.priceRow}>
                    <div className={styles.price}>
                        <span className={styles.priceLabel}>Starts from</span>
                        <span className={styles.priceValue}>₹{hotel.price.toLocaleString()}</span>
                        <span className={styles.priceUnit}>/night</span>
                    </div>
                    <button className={styles.viewDetailsBtn}>Book Now</button>
                </div>
            </div>
        </div>
    );
}

export function DishCard({ dish, index }) {
    return (
        <div className={`${styles.dishCard} animate-fade-in stagger-${(index % 6) + 1}`}>
            <div className={styles.imageWrapper}>
                <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                />
                <span className={`${styles.vegBadge} ${dish.isVeg ? styles.veg : styles.nonVeg}`}>
                    {dish.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
                </span>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{dish.name}</h3>
                <p className={styles.cardDescription}>{dish.description}</p>
                <div className={styles.dishMeta}>
                    {dish.prepTime && (
                        <span className={styles.metaItem}>
                            <span>⏱️</span> {dish.prepTime}
                        </span>
                    )}
                    {dish.spiceLevel && (
                        <span className={styles.metaItem}>
                            <span>🌶️</span> {dish.spiceLevel}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export function NearbyCard({ place, index }) {
    return (
        <div className={`${styles.nearbyCard} animate-fade-in stagger-${(index % 6) + 1}`}>
            <div className={styles.imageWrapper}>
                <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.cardImage}
                />
                <span className={styles.distanceBadge}>
                    {place.distance} from Nalanda
                </span>
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{place.name}</h3>
                <p className={styles.cardDescription}>{place.description}</p>
                <div className={styles.highlights}>
                    {place.highlights.slice(0, 2).map((highlight, i) => (
                        <span key={i} className={styles.highlightTag}>{highlight}</span>
                    ))}
                </div>
                <Link href="#" className={styles.learnMore}>
                    Explore →
                </Link>
            </div>
        </div>
    );
}
