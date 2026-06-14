import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';

import styles from './country-list.module.css';
import { memo, useMemo } from 'react';

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
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
          if (sortField === 'name') {
            return sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
          }

          const popA = getPopulationForYear(createYearDataMap(a.data), selectedYear) || 0;
          const popB = getPopulationForYear(createYearDataMap(b.data), selectedYear) || 0;

          return sortOrder === 'asc' ? popA - popB : popB - popA;
        });
    }, [countries, searchQuery, selectedYear, sortField, sortOrder]);

    return (
      <div className={styles.countryList}>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            selectedYear={selectedYear}
            selectedColumns={selectedColumns}
          />
        ))}
      </div>
    );
  }
);
