# RS School 2026 Q2 Stage 3 React

## React Class Components

1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md
1. Deploy: https://pavelhalanin.github.io/RSSchool_2026Q2_Stage3__ReactClassComponents/
1. Deadline 05.05.2026

### Checklist

Functional Requirements (max **100 points**)

---

- [ ] Feature 1: Application Layout Structure (**5 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 1: Application Layout Structure (**5 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Функция 1: Структура макета приложения (5 баллов)

  **Как** пользователь
  **Я хочу** видеть четко организованный макет страницы
  **Чтобы** легко взаимодействовать с поиском и просматривать результаты

  **Сценарий**: Организация макета страницы
  - **Допустим** я нахожусь на странице приложения
  - **Тогда** я должен видеть две отдельные области:
  - Меньшую область поиска вверху
  - Бóльшую область результатов внизу

  **Критерии приемки**:
  - Страница содержит ровно две основные области: область поиска и область результатов.
  - Обе области визуально различимы и четко разделены расположением или стилями (например, отступами, границами или цветом фона).

  ***

  </details>

---

- [ ] Feature 2: Search Functionality with Local Storage (**15 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 2: Search Functionality with Local Storage (**15 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Функция 2: Поиск с использованием Local Storage (**15 баллов**)

  **Как** пользователь
  **Я хочу** иметь интерфейс поиска, который запоминает мой последний запрос
  **Чтобы** я мог продолжить предыдущую сессию поиска

  **Сценарий:** Начальная загрузка компонента поиска
  - **Допустим** я открываю приложение
  - **Когда** компонент поиска загружается
  - **Тогда** он должен проверить в local storage наличие предыдущего поискового запроса
  - **И** заполнить поле ввода, если запрос существует
  - **Или** оставить его пустым, если предыдущий запрос не найден

  **Критерии приемки:**
  - При загрузке приложения компонент поиска проверяет в local storage наличие ранее сохраненного поискового запроса:
  - Если сохраненный поисковый запрос существует, он автоматически отображается в поле ввода.
  - Если в local storage нет сохраненного поискового запроса, поле ввода остается пустым.

  ***

  </details>

---

- [ ] Feature 3: Search Results Display (**10 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 3: Search Results Display (**10 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Feature 3: Отображение результатов поиска (**10 баллов**)

  **В роли** пользователя
  **Я хочу** видеть четкое отображение результатов поиска
  **Чтобы** легко просматривать найденные элементы

  **Сценарий:** Формат отображения результатов
  - **Допустим** я нахожусь в секции результатов
  - **Тогда** каждый результат должен отображать:
  - Название элемента
  - Описание элемента

  **Критерии приемки:**
  - Результаты поиска отображаются в секции результатов после выполнения поиска.
  - Каждый элемент результата включает как минимум следующие поля:
  - Название
  - Описание
  - Результаты представлены в понятном и читаемом формате (согласованные отступы, выравнивание и типографика).

  ***

  </details>

---

- [ ] Feature 4: Initial Data Load (**10 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 4: Initial Data Load (**10 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Feature 4: Начальная загрузка данных (**10 баллов**)

  **В роли** пользователя
  **Я хочу** видеть релевантные элементы при первом открытии приложения
  **Чтобы** сразу начать просмотр

  **Сценарий:** Загрузка данных по умолчанию
  - **Допустим** я открываю приложение
  - **Когда** оно загружается
  - **Тогда** оно должно получить первую страницу элементов на основе:
  - Поискового запроса из поля ввода, если он существует
  - Всех доступных элементов, если поисковый запрос отсутствует

  **Критерии приемки:**
  - При начальной загрузке приложение **отправляет запрос данных** в соответствии с заданной логикой:
  - Если в поле ввода есть поисковый запрос, запрос включает этот термин.
  - Если поисковый запрос отсутствует, запрос получает все доступные элементы.
  - Элементы, **возвращенные запросом**, корректно **отображаются** в секции результатов.
  - Отображаемые элементы **соответствуют запросу**, использованному в запросе.

  ***

  </details>

---

- [ ] Feature 5: Search Execution (**20 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 5: Search Execution (**20 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Функция 5: Выполнение поиска (**20 баллов**)

  **Как** пользователь
  **Я хочу** искать конкретные элементы
  **Чтобы** находить релевантный контент

  **Сценарий:** Выполнение поиска
  - **Дано** я нахожусь на странице поиска
  - **Когда** я ввожу поисковый запрос
  - **И** нажимаю кнопку "Поиск"
  - **Тогда** система должна:
  - Удалить конечные пробелы из введённого текста
  - Загрузить первую страницу соответствующих результатов
  - Обновить отображение новыми результатами

  **Критерии приемки:**
  - При нажатии кнопки **Поиск**, если введённый текст не изменился, **новый запрос не выполняется**.
  - **Лишние пробелы** в начале или конце поискового текста **удаляются**.
  - Приложение отправляет **запрос только на первую страницу** результатов.
  - **Поисковый запрос** включается в запрос.
  - **Область результатов** показывает элементы из ответа сервера.

  ***

  </details>

---

- [ ] Feature 6: Search Term Persistence (**5 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 6: Search Term Persistence (**5 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Функция 6: Сохранение поискового запроса (**5 баллов**)

  **Как** пользователь
  **Я хочу** чтобы мои поисковые запросы сохранялись
  **Чтобы** я мог продолжить поиск позже

  **Сценарий:** Сохранение поискового запроса
  - **Дано** я выполняю поиск
  - **Когда** я нажимаю кнопку "Поиск"
  - **Тогда** поисковый запрос должен быть сохранён в локальное хранилище
  - **И** перезаписывать любой существующий сохранённый запрос

  **Критерии приемки:**
  - Если поисковый текст **не изменился**, ничего не происходит.
  - Если текст **изменился**, **очищенное значение** (без лишних пробелов) **сохраняется в локальное хранилище**, заменяя предыдущее.

  ***

  </details>

---

- [ ] Feature 7: Loading State Indication (**10 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 7: Loading State Indication (**10 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Функция 7: Индикация состояния загрузки (**10 баллов**)

  **Как** пользователь
  **Я хочу** знать, когда приложение загружает данные
  **Чтобы** понимать, когда нужно ждать результаты

  **Сценарий:** Состояние загрузки API-запроса
  - **Дано** я инициирую любой API-запрос
  - **Тогда** я должен видеть индикатор загрузки (Спиннер/Скелетон/Полоса загрузки/Размытие)
  - **И** индикатор должен оставаться, пока данные загружаются

  **Критерии приемки:**
  - **Индикатор загрузки** (например, спиннер, скелетон или полоса загрузки) появляется **пока данные загружаются**.
  - Индикатор **остаётся видимым**, пока данные не будут полностью получены и отображены.
  - После завершения загрузки **индикатор скрывается**.

  ***

  </details>

---

- [ ] Feature 8: Error Handling (**10 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 8: Error Handling (**10 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Функция 8: Обработка ошибок (**10 баллов**)

  **Как** пользователь
  **Я хочу** получать уведомление, когда что-то идёт не так
  **Чтобы** понимать, почему мой запрос не выполнился

  **Сценарий:** Неудачный API-запрос
  - **Дано** я выполняю поисковый запрос
  - **Когда** сервер возвращает ошибку (4xx или 5xx)
  - **Тогда** я должен видеть понятное сообщение об ошибке

  **Критерии приемки:**
  - **Понятное, человекочитаемое сообщение об ошибке** показывается пользователю, когда сервер возвращает ошибку (4xx или 5xx).
  - **Консоль остаётся чистой** — не отображается необработанных ошибок или ненужных логов ошибок.

  ***

  </details>

---

- [ ] Feature 9: Application Error Boundary (**15 points**)

  <details>
    <summary>EN</summary>

  ***

  ### Feature 9: Application Error Boundary (**15 points**)

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

  ***

  </details>

  <details>
    <summary>RU</summary>

  ***

  ### Функция 9: Граница ошибок приложения (**15 баллов**)

  **Как** пользователь
  **Я хочу** чтобы приложение корректно обрабатывало ошибки
  **Чтобы** я мог продолжать пользоваться приложением, даже если отдельные его части не работают

  **Сценарий:** Реализация границы ошибок
  - **Дано** в приложении возникает ошибка
  - **Тогда** ошибка должна быть залогирована в консоль
  - **И** должен отображаться запасной интерфейс
  - **И** должна быть тестовая кнопка для симуляции ошибок

  **Критерии приемки:**
  - Доступна **тестовая кнопка** для симуляции ошибки приложения.
  - При нажатии на тестовую кнопку **возникает ошибка**, которая **логируется в консоль**.
  - При возникновении ошибки отображается **запасной интерфейс (fallback UI)**.

  ***

  </details>

---

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
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

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
]);
```
