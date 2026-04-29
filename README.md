# RS School 2026 Q2 Stage 3 React

## React Class Components

- [task](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md)

### Functional Requirements (max **100 points**)

- [ ] Feature 1: Application Layout Structure (**5 points**)

    **As a** user
    **I want** to see a clearly organized page layout
    **So that** I can easily interact with the search functionality and view results

    **Scenario:** Page Layout Organization

    - **Given** I am on the application page
    - **Then** I should see two distinct sections:
    - A smaller search section at the top
    - A larger results section at the bottom

    **Acceptance Criteria:**

    - The page contains exactly two main sections: a search area and a results area.
    - Both sections are visually distinct and clearly separated by layout or styling (e.g., spacing, borders, or background).

- [ ] Feature 2: Search Functionality with Local Storage (**15 points**)

    **As a** user
    **I want** to have a search interface that remembers my last search
    **So that** I can continue my previous search session

    **Scenario:** Initial Search Component Load

    - **Given** I open the application
    - **When** the search component loads
    - **Then** it should check local storage for a previous search term
    - **And** populate the search input if a term exists
    - **Or** leave it empty if no previous term is found

    **Acceptance Criteria:**

    - When the application loads, the search component checks local storage for a previously saved search term:
    - If a saved search term exists, it is automatically displayed in the search input field.
    - If no saved search term exists in local storage, the search input field remains empty.

- [ ] Feature 3: Search Results Display (**10 points**)

    **As a** user
    **I want** to see search results clearly displayed
    **So that** I can easily review the found items

    **Scenario:** Results Display Format

    - **Given** I am viewing the results section
    - **Then** each result should display:
    - Item name
    - Item description

    **Acceptance Criteria:**

    - Search results are displayed in the results section after a search is performed.
    - Each result item includes at least the following fields:
    - Name
    - Description
    - Results are presented in a clear and readable format (consistent spacing, alignment, and typography).

- [ ] Feature 4: Initial Data Load (**10 points**)

    **As a** user
    **I want** to see relevant items when I first open the application
    **So that** I can start browsing immediately

    **Scenario:** Default Data Load

    - **Given** I open the application
    - **When** it initially loads
    - **Then** it should fetch the first page of items based on:
    - The search term from input if it exists
    - All available items if no search term exists

    **Acceptance Criteria:**

    - On initial load, the application **sends a data request** according to the defined logic:
    - If a search term exists in the input, the request includes that term.
    - If no search term exists, the request retrieves all available items.
    - The items **returned by the request** are correctly **displayed** in the results section.
    - The displayed items **match the query** used in the request.

- [ ] Feature 5: Search Execution (**20 points**)

    **As a** user
    **I want** to search for specific items
    **So that** I can find relevant content

    **Scenario:** Perform Search

    - **Given** I am on the search page
    - **When** I enter a search term
    - **And** click the "Search" button
    - **Then** the system should:
    - Remove any trailing spaces from the input
    - Fetch the first page of matching results
    - Update the display with new results

    **Acceptance Criteria:**

    - When the **Search** button is clicked, if the input text hasn’t changed, **no new request** is made.
    - **Extra spaces** at the start or end of the search text are **removed**.
    - The app sends a **request for the first page** of results only.
    - The **search term** is included in the request.
    - The **results area** shows the items from the server response.

- [ ] Feature 6: Search Term Persistence (**5 points**)

    **As a** user
    **I want** my search terms to be saved
    **So that** I can resume my search later

    **Scenario:** Save Search Term

    - **Given** I perform a search
    - **When** I click the "Search" button
    - **Then** the search term should be saved to local storage
    - **And** overwrite any existing saved term

    **Acceptance Criteria:**

    - If the search text **has not changed**, nothing happens.
    - If the text **has changed**, the **trimmed value** (without extra spaces) is **saved to local storage**, replacing the previous one.

- [ ] Feature 7: Loading State Indication (**10 points**)

    **As a** user
    **I want** to know when the application is loading data
    **So that** I understand when to wait for results

    **Scenario:** API Request Loading State

    - **Given** I initiate any API request
    - **Then** I should see a loading indicator (Spinner/Skeleton/Loading Bar/Blur)
    - **And** the indicator should remain until data loads

    **Acceptance Criteria:**

    - A **loading indicator** (e.g., spinner, skeleton, or loading bar) appears **while data is being loaded**.
    - The indicator **remains visible** until the data is fully received and displayed.
    - Once loading is complete, the **indicator is hidden**.

- [ ] Feature 8: Error Handling (**10 points**)

    **As a** user
    **I want** to be informed when something goes wrong
    **So that** I understand why my request failed

    **Scenario:** Failed API Request

    - **Given** I make a search request
    - **When** the server returns an error (4xx or 5xx)
    - **Then** I should see a meaningful error message

    **Acceptance Criteria:**

    - A **clear, human-readable error message** is shown to the user when the server returns an error (4xx or 5xx).
    - The **console remains clean** — no uncaught errors or unnecessary error logs are displayed.

- [ ] Feature 9: Application Error Boundary (**15 points**)

    **As a** user
    **I want** the application to handle errors gracefully
    **So that** I can still use the app even if parts of it fail

    **Scenario:** Error Boundary Implementation

    - **Given** an error occurs in the application
    - **Then** the error should be logged to the console
    - **And** a fallback UI should be displayed
    - **And** there should be a test button to simulate errors

    **Acceptance Criteria:**

    - A **test button** is available to simulate an application error.
    - Clicking the test button **triggers an error** that is **logged in the console**.
    - A **fallback UI** is displayed when an error occurs.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
