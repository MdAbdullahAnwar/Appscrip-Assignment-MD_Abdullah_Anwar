"use client";

import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import FilterBar from "../components/filters/FilterBar";
import FilterSidebar from "../components/filters/FilterSidebar";
import ProductGrid from "../components/products/ProductGrid";
import styles from './page.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: "all",
    occasion: "all",
    work: "all",
    fabric: "all",
    segment: "all",
    suitableFor: "all",
    rawMaterials: "all",
    pattern: "all"
  });
  const [loading, setLoading] = useState(true);

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        
        const transformedProducts = data.map(product => ({
          id: product.id,
          title: product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          description: product.description,
          ideal: getRandomIdeal(),
          occasion: getRandomOccasion()
        }));
        
        setProducts(transformedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getRandomIdeal = () => {
    const ideals = ["men", "women", "kids", "unisex"];
    return ideals[Math.floor(Math.random() * ideals.length)];
  };

  const getRandomOccasion = () => {
    const occasions = ["casual", "formal"];
    return occasions[Math.floor(Math.random() * occasions.length)];
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <Layout>
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={styles.heroTitle}>
            DISCOVER OUR PRODUCTS
          </h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </section>

      <FilterBar 
        products={products} 
        showFilters={showFilters} 
        setShowFilters={setShowFilters}
      />

      <div className="container">
        <div className={styles.contentWrapper}>
          {showFilters && (
            <div className={styles.filterSidebar}>
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          )}
          <div className={`${styles.productContent} ${showFilters ? styles.withSidebar : ''}`}>
            {loading ? (
              <div className={styles.loadingContainer}>
                <p>Loading products...</p>
              </div>
            ) : (
              <ProductGrid 
                products={products}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                showFilters={showFilters}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
