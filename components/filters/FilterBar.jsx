import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import styles from './FilterBar.module.css';

const SORT_OPTIONS = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE : HIGH TO LOW',
  'PRICE : LOW TO HIGH',
];

const FilterBar = ({ products = [], showFilters, setShowFilters }) => { 
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(SORT_OPTIONS[0]);
  const dropdownRef = useRef(null);

  const handleSortSelect = (option) => {
    setSelectedSortOption(option);
    setIsSortOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.filterBar}>
      <div className={`container ${styles.filterBarContent}`}>
        <div className={styles.filterInfo}>
          <span className={styles.itemCount}>{products.length} ITEMS</span> 
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`${styles.filterToggleButton} ${showFilters ? styles.active : ''}`}
          >
            {showFilters ? (
              <>
                <ChevronLeft size={16} className={styles.directionChevron} />
                <span>HIDE FILTER</span>
              </>
            ) : (
              <>
                <ChevronRight size={16} className={styles.directionChevron} />
                <span>SHOW FILTER</span>
              </>
            )}
          </button>
        </div>
        
        <div className={styles.middleSeparator}></div>
        
        <div className={styles.sortDropdown} ref={dropdownRef}>
            <button 
                className={styles.sortButton}
                onClick={() => setIsSortOpen(!isSortOpen)}
                aria-expanded={isSortOpen}
                aria-haspopup="true"
            >
                <span className={styles.sortButtonText}>{selectedSortOption}</span>
                <ChevronDown size={16} className={`${styles.chevron} ${isSortOpen ? styles.rotated : ''}`} />
            </button>
            
            {isSortOpen && (
                <div className={styles.sortMenu}>
                    {SORT_OPTIONS.map(option => (
                        <div 
                            key={option}
                            className={`${styles.sortItem} ${selectedSortOption === option ? styles.selectedItem : ''}`}
                            onClick={() => handleSortSelect(option)}
                        >
                            <div className={styles.checkIcon}>
                                {selectedSortOption === option && '✓'}
                            </div>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
