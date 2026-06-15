# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: N/A
- **Render duration**: 301.9 ms
- **Screenshot**: ![Sort countries](performance-starter/screenshots/baseline/sort-countries.png)

### Interaction B: Search countries

- **Commit duration**: N/A
- **Render duration**: 142.6 ms
- **Screenshot**: ![Search countries](performance-starter/screenshots/baseline/search-countries.png)

### Interaction C: Change year

- **Commit duration**: N/A
- **Render duration**: 272.6 ms
- **Screenshot**: ![Change year](performance-starter/screenshots/baseline/change-year.png)

### Interaction D: Toggle column

- **Commit duration**: N/A
- **Render duration**: 298.6 ms
- **Screenshot**: ![Toggle column](performance-starter/screenshots/baseline/toggle-column.png)

## Optimized Measurements

### Interaction A: Sort countries

- **Commit duration**: N/A
- **Render duration**: 70.2 ms
- **Screenshot**: ![Sort countries](performance-starter/screenshots/optimized/sort-countries-opt.png)

### Interaction B: Search countries

- **Commit duration**: N/A
- **Render duration**: 30.1 ms
- **Screenshot**: ![Search countries](performance-starter/screenshots/optimized/search-countries-opt.png)

### Interaction C: Change year

- **Commit duration**: N/A
- **Render duration**: 89.5 ms
- **Screenshot**: ![Change year](performance-starter/screenshots/optimized/change-year-opt.png)

### Interaction D: Toggle column

- **Commit duration**: N/A
- **Render duration**: 11.8 ms
- **Screenshot**: ![Toggle column](performance-starter/screenshots/optimized/toggle-column-opt.png)

## Summary of Improvements

| Interaction      | Baseline (ms) | Optimized (ms) | Improvement |
| ---------------- | ------------- | -------------- | ----------- |
| Sort countries   | 301.9         | 70.2           | 76.7%       |
| Search countries | 142.6         | 30.1           | 78.9%       |
| Change year      | 272.6         | 89.5           | 67.2%       |
| Toggle column    | 298.6         | 11.8           | 96.0%       |
| **Average**      | **253.9**     | **50.4**       | **80.2%**   |
