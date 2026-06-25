# Pokemon 2026Q2 Stage3 React

## How to start

1. Install NodeJS
1. Install VS Code
1. Install Git
1. Clone repository
1. Open repository on VSCode
1. Install node modules:
   ```bash
   npm i
   ```
1. Create a file `.env.local` from a file `.env.local.copy`
1. Start app:
   ```bash
   npm run dev
   ```

## Deploy to GitHub pages

On a file `.env.local` change variable `VITE_HTML_BASE`

```bash
npm run format:fix  # pretty code
npm run lint        # linting code
npm run build       # creating dist folder
npm run deploy      # deploying dist folder to gh-pages
```
