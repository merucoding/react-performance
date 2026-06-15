export const INITIAL_COLUMN_VALUE = ['year', 'population', 'co2', 'co2_per_capita'];

export const AVAILABLE_COLUMN_LIST = [
  'year',
  'population',
  'co2',
  'co2_per_capita',
  'cement_co2',
  'cement_co2_per_capita',
  'coal_co2',
  'coal_co2_per_capita',
  'gas_co2',
  'gas_co2_per_capita',
  'oil_co2',
  'oil_co2_per_capita',
  'methane',
  'methane_per_capita',
  'nitrous_oxide',
  'nitrous_oxide_per_capita',
  'temperature_change_from_co2',
  'total_ghg',
  'total_ghg_per_capita',
] as const;

export const ORDER_SORT = {
  asc: 'asc',
  desc: 'desc',
} as const;

export const COUNTRY_SORT = {
  population: 'population',
  name: 'name',
} as const;

export const INITIAL_SELECTED_YEAR = 2020;
