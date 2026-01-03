import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import styles from './FilterSidebar.module.css';

const FilterSidebar = ({ filters, setFilters }) => {
  const [openSections, setOpenSections] = useState({
    customizable: true,
    idealFor: true,
    occasion: true,
    work: true,
    fabric: true,
    segment: true,
    suitableFor: true,
    rawMaterials: true,
    pattern: true
  });

  const [idealFor, setIdealFor] = useState("all");
  const [occasion, setOccasion] = useState("all");

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleIdealForChange = (value) => {
    setIdealFor(value);
    setFilters({ ...filters, idealFor: value });
  };

  const handleOccasionChange = (value) => {
    setOccasion(value);
    setFilters({ ...filters, occasion: value });
  };

  return (
    <div className={styles.filterSidebar}>
      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('customizable')}>
          <span className={styles.sectionTitle}>CUSTOMIZABLE</span>
          {openSections.customizable ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.customizable && (
          <div className={styles.sectionContent}>
            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="customizable"
                checked={filters.customizable}
                onChange={(e) => setFilters({...filters, customizable: e.target.checked})}
                className={styles.checkbox}
              />
              <label htmlFor="customizable" className={styles.checkboxLabel}>
                Customizable
              </label>
            </div>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('idealFor')}>
          <span className={styles.sectionTitle}>IDEAL FOR</span>
          {openSections.idealFor ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.idealFor && (
          <div className={styles.sectionContent}>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="ideal" 
                  checked={idealFor === "all"}
                  onChange={() => handleIdealForChange("all")}
                  className={styles.radioInput}
                /> 
                All
              </label>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="ideal" 
                  checked={idealFor === "men"}
                  onChange={() => handleIdealForChange("men")}
                  className={styles.radioInput}
                /> 
                Men
              </label>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="ideal" 
                  checked={idealFor === "women"}
                  onChange={() => handleIdealForChange("women")}
                  className={styles.radioInput}
                /> 
                Women
              </label>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="ideal" 
                  checked={idealFor === "kids"}
                  onChange={() => handleIdealForChange("kids")}
                  className={styles.radioInput}
                /> 
                Kids
              </label>
            </div>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('occasion')}>
          <span className={styles.sectionTitle}>OCCASION</span>
          {openSections.occasion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.occasion && (
          <div className={styles.sectionContent}>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="occasion" 
                  checked={occasion === "all"}
                  onChange={() => handleOccasionChange("all")}
                  className={styles.radioInput}
                /> 
                All
              </label>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="occasion" 
                  checked={occasion === "casual"}
                  onChange={() => handleOccasionChange("casual")}
                  className={styles.radioInput}
                /> 
                Casual
              </label>
              <label className={styles.radioLabel}>
                <input 
                  type="radio" 
                  name="occasion" 
                  checked={occasion === "formal"}
                  onChange={() => handleOccasionChange("formal")}
                  className={styles.radioInput}
                /> 
                Formal
              </label>
            </div>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('work')}>
          <span className={styles.sectionTitle}>WORK</span>
          {openSections.work ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.work && (
          <div className={styles.sectionContent}>
            <p className={styles.filterText}>All options available.</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('fabric')}>
          <span className={styles.sectionTitle}>FABRIC</span>
          {openSections.fabric ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.fabric && (
          <div className={styles.sectionContent}>
            <p className={styles.filterText}>All.</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('segment')}>
          <span className={styles.sectionTitle}>SEGMENT</span>
          {openSections.segment ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.segment && (
          <div className={styles.sectionContent}>
            <p className={styles.filterText}>All.</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('suitableFor')}>
          <span className={styles.sectionTitle}>SUITABLE FOR</span>
          {openSections.suitableFor ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.suitableFor && (
          <div className={styles.sectionContent}>
            <p className={styles.filterText}>All.</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('rawMaterials')}>
          <span className={styles.sectionTitle}>RAW MATERIALS</span>
          {openSections.rawMaterials ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.rawMaterials && (
          <div className={styles.sectionContent}>
            <p className={styles.filterText}>All.</p>
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <div className={styles.sectionHeader} onClick={() => toggleSection('pattern')}>
          <span className={styles.sectionTitle}>PATTERN</span>
          {openSections.pattern ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {openSections.pattern && (
          <div className={styles.sectionContent}>
            <p className={styles.filterText}>All.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
