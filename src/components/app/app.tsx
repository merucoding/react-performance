import { useCallback, useMemo, useState } from 'react';
import { useCo2Data } from '../../hooks/useCo2Data';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { SearchBar } from '../search-bar/search-bar';
import { YearSelector } from '../year-selector/year-selector';
import { CountryList } from '../country-list/country-list';
import { ColumnModal } from '../column-modal/column-modal';
import { getAvailableYears } from '../../utils/data-transformers';
import { CountrySortSelect } from '../country-sort/country-sort';
import type { CountrySort, OrderSort } from '../../types';
import {
  COUNTRY_SORT,
  INITIAL_COLUMN_VALUE,
  INITIAL_SELECTED_YEAR,
  ORDER_SORT,
} from '../../constants';

import styles from './app.module.css';

export const App = () => {
  const { data, isLoading, error } = useCo2Data();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number>(INITIAL_SELECTED_YEAR);
  const [sortField, setSortField] = useState<CountrySort>(COUNTRY_SORT.population);
  const [sortOrder, setSortOrder] = useState<OrderSort>(ORDER_SORT.desc);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(INITIAL_COLUMN_VALUE);
  const [isColumnModalOpen, setIsColumnModalOpen] = useState<boolean>(false);

  const years = useMemo(() => (data ? getAvailableYears(data) : []), [data]);

  const handleSortOrderToggle = useCallback(() => {
    setSortOrder((prev) => (prev === ORDER_SORT.asc ? ORDER_SORT.desc : ORDER_SORT.asc));
  }, []);

  const handleColumnToggle = useCallback((column: string) => {
    setSelectedColumns((prev) =>
      prev.includes(column) ? prev.filter((c) => c !== column) : [...prev, column]
    );
  }, []);

  const handleModalToggle = useCallback(() => {
    setIsColumnModalOpen((prev) => !prev);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className={styles.errorMessage}>Error: {error}</div>;
  }

  if (!data) {
    return <div className={styles.noDataMessage}>No data available</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CO₂ Emissions Data Explorer</h1>

      <div className={styles.controls}>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <YearSelector year={selectedYear} years={years} onChange={setSelectedYear} />

        <CountrySortSelect
          sortField={sortField}
          sortOrder={sortOrder}
          onChange={setSortField}
          onSortOrderToggle={handleSortOrderToggle}
        />

        <div className={styles.columnButtonContainer}>
          <button onClick={handleModalToggle} className={styles.columnButton}>
            Select columns ({selectedColumns.length} selected)
          </button>
        </div>
      </div>

      <CountryList
        countries={data}
        searchQuery={searchQuery}
        selectedColumns={selectedColumns}
        selectedYear={selectedYear}
        sortField={sortField}
        sortOrder={sortOrder}
      />

      <ColumnModal
        isOpen={isColumnModalOpen}
        selectedColumns={selectedColumns}
        onToggle={handleColumnToggle}
        onClose={handleModalToggle}
      />
    </div>
  );
};
