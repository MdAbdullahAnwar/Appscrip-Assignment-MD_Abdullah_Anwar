import { Heart } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import styles from './ProductCard.module.css';

const ProductCard = ({ product, onToggleFavorite, isFavorite }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        rootMargin: '50px 0px',
        threshold: 0.1 
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className={styles.productCard} ref={cardRef}>
      <div className={styles.imageContainer}>
        {isInView ? (
          <>
            <img 
              ref={imageRef}
              src={product.image} 
              alt={product.title}
              className={styles.productImage}
              loading="lazy"
              onLoad={handleImageLoad}
              style={{ opacity: isImageLoaded ? 1 : 0 }}
            />
            {!isImageLoaded && (
              <div className={styles.imagePlaceholder}>
                <div className={styles.loadingSpinner}></div>
              </div>
            )}
          </>
        ) : (
          <div className={styles.imagePlaceholder}>
            <div className={styles.loadingSpinner}></div>
          </div>
        )}
      </div>
      <div className={styles.productInfo}>
        <div className={styles.titleRow}>
          <h3 className={styles.productTitle}>{product.title}</h3>
          <button
            onClick={() => onToggleFavorite(product.id)}
            className={styles.favoriteButton}
          >
            <Heart 
              size={20}
              className={`${styles.heartIcon} ${isFavorite ? styles.favorite : ''}`}
            />
          </button>
        </div>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productDescription}>
          Sign in or Create an account to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
