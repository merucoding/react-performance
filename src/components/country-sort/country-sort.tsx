import { memo } from 'react';
import { COUNTRY_SORT, ORDER_SORT } from '../../constants';
import type { CountrySort, OrderSort } from '../../types';
import styles from './country-sort.module.css';

type CountrySortSelectProps = {
  sortField: CountrySort;
  sortOrder: OrderSort;
  onChange: (value: CountrySort) => void;
  onSortOrderToggle: () => void;
};

export const CountrySortSelect = memo(({
  sortField,
  sortOrder,
  onChange,
  onSortOrderToggle,
}: CountrySortSelectProps) => {
  return (
    <div className={styles.sortContainer}>
      <label className={styles.sortLabel}>Sort by:</label>
      <select
        value={sortField}
        onChange={(e) => onChange(e.target.value as CountrySort)}
        className={styles.sortSelect}
      >
        <option value={COUNTRY_SORT.population}>Population</option>
        <option value={COUNTRY_SORT.name}>Name</option>
      </select>

      <button onClick={onSortOrderToggle} className={styles.sortButton}>
        {sortOrder === ORDER_SORT.asc ? 'Ascending' : 'Descending'}
      </button>
    </div>
  );
});
