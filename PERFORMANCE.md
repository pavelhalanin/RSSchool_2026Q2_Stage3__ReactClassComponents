# Performance Optimization Report

## Baseline Measurements

### Interaction A: Sort countries

- **Commit duration**: 0.4 s
- **Render duration**: 408.2 ms
- **Screenshot**: ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-A-Sort-countries/image.png)

<details open>
  <summary>What I do:</summary>

  1. `npm run dev`
  1. Open http://localhost:5173/
  1. `Fn` + `F12`
  1. On Dev Tools open `Profiler` tab
  1. Click to blue circle with title `Start profiling`
    ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-A-Sort-countries/image-0.png)
  1. I changed `Population` to `Name` on select `Sort by`
  1. I wait all renders
  1. Click to red circle with title `Stop profiling`
    
      - Flamegraph chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-A-Sort-countries/image-2.png)
      - Ranked chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-A-Sort-countries/image-3.png)
      - JSON profile: [open](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-A-Sort-countries/profiling-data.15.06.2026.00-56-40.json)
</details>

### Interaction B: Search countries

- **Commit duration**: 0.1 s
- **Render duration**: 118.9 ms
- **Screenshot**: ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-B-Search-countries/image.png)

<details open>
  <summary>What I do:</summary>

  1. Reload page
  1. I click to blue circle with title `Start profiling` on F12 DevTools on tab `Profiler`
    ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-B-Search-countries/image-1.png)
  1. I changed `Search countries` input from `<empty>` to `Belarus`
  1. I wait all renders
  1. I click to red circle with title `Stop profiling` on F12 DevTools on tab `Profiler`
    
      - Flamegraph chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-B-Search-countries/image-2.png)
      - Ranked chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-B-Search-countries/image-3.png)
      - JSON profile: [open](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-B-Search-countries/profiling-data.15.06.2026.01-11-10.json)
</details>

### Interaction C: Change year

- **Commit duration**: 0.4 s
- **Render duration**: 404.2 ms
- **Screenshot**: ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-C-Change-year/image.png)

<details open>
  <summary>What I do:</summary>

  1. Reload page
  1. I click to blue circle with title `Start profiling` on F12 DevTools on tab `Profiler`
    ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-C-Change-year/image-0.png)
  1. I changed `Select year` input from `2020` to `2024`
  1. I wait all renders
  1. I click to red circle with title `Stop profiling` on F12 DevTools on tab `Profiler`
      - 2020 replaced by 2024. All renderings have been completed.
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-C-Change-year/image-1.png)
      - Flamegraph chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-C-Change-year/image-2.png)
      - Ranked chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-C-Change-year/image-3.png)
      - JSON profile: [open](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-C-Change-year/profiling-data.15.06.2026.01-24-59.json)
</details>

### Interaction D: Toggle column

- **Commit duration**: 0.5 s
- **Render duration**: 471 ms
- **Screenshot**: ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-D-Toggle-column/image.png)

<details open>
  <summary>What I do:</summary>

  1. Reload page
  1. I click to `Select columns (4 selected)` button
    ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-D-Toggle-column/image-0.png)
  1. I wait all renderes
  1. I click to blue circle with title `Start profiling` on F12 DevTools on tab `Profiler`
    ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-D-Toggle-column/image-1.png)
  1. I unselect `co2_per_capita
  1. I wait all renders
  1. I click to red circle with title `Stop profiling` on F12 DevTools on tab `Profiler`
      - All renderings have been completed - and click red circle
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-D-Toggle-column/image-2.png)
      - Flamegraph chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-D-Toggle-column/image-3.png)
      - Ranked chart:
          ![screenshot](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-D-Toggle-column/image-4.png)
          ![c:\Users\Pavel\Downloads\profiling-data.15.06.2026.01-48-34.json](image-5.png)
      - JSON profile: [open](./docs/Performance-Optimization-Report/Baseline-Measurements/Interaction-D-Toggle-column/profiling-data.15.06.2026.01-48-34.json)
</details>
