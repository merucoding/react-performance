import type { Country, CountrySort, OrderSort } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';
import { memo, useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';

import styles from './country-list.module.css';
import { COUNTRY_SORT, ORDER_SORT } from '../../constants';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedYear: number;
  sortField: CountrySort;
  sortOrder: OrderSort;
};

export const CountryList = memo(
  ({
    countries,
    searchQuery,
    selectedColumns,
    selectedYear,
    sortField,
    sortOrder,
  }: CountryListProps) => {
    const filteredCountries = useMemo(() => {
      return countries
        .filter((c) => c.id.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
          if (sortField === COUNTRY_SORT.name) {
            return sortOrder === ORDER_SORT.asc ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
          }

          const popA = getPopulationForYear(createYearDataMap(a.data), selectedYear) || 0;
          const popB = getPopulationForYear(createYearDataMap(b.data), selectedYear) || 0;

          return sortOrder === ORDER_SORT.asc ? popA - popB : popB - popA;
        });
    }, [countries, searchQuery, selectedYear, sortField, sortOrder]);

    return (
      <div className={styles.countryList}>
        <Virtuoso
          useWindowScroll
          data={filteredCountries}
          itemContent={(_, country) => (
            <CountryCard
              key={country.id}
              country={country}
              selectedYear={selectedYear}
              selectedColumns={selectedColumns}
            />
          )}
        />
      </div>
    );
  }
);
