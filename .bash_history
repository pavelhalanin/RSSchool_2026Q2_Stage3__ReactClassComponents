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
