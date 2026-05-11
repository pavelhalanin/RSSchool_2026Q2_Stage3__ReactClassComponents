git init
git checkout -b class-components

git add README.md
git commit -m "chore: initial commit with README"
git config user.name secret
git config user.email secret@secret.local
git commit -m "chore: initial commit with README"

git remote add origin git@github.com:pavelhalanin/RSSchool_2026Q2_Stage3__ReactClassComponents.git
git push -u origin class-components

# npm create vite@latest rs-react-app -- --template react-ts
npm create vite@latest . -- --template react-ts

npm i -D @eslint/js@9 eslint@9 eslint-plugin-react
npm install -D prettier eslint-config-prettier

npx prettier --check .
npx prettier --write .

npm install --save-dev husky

npm install -D @vitest/coverage-v8
npm run test:coverage

npm install -D @vitest/ui
npm run test:ui

npm install -D @testing-library/react
npm install -D jsdom
npm install -D @testing-library/jest-dom
npm install -D msw
