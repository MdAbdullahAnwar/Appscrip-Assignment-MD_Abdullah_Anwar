import ProductCard from "./ProductCard";
import styles from './ProductGrid.module.css';

const ProductGrid = ({ products, favorites, toggleFavorite, showFilters }) => {
  return (
    <div className={`${styles.productGrid} ${showFilters ? styles.withFilters : ''}`}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleFavorite={toggleFavorite}
          isFavorite={favorites.has(product.id)}
          priority={index < 4}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
