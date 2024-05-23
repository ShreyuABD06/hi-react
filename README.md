# hi-react

# parcel

- parceljs.org
- DEV BUILD
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - To support older browsers
- Error Handling
- Https
- Tree Shaking - Remove unused code
- different Dev and Prod build

# GIT Steps

- git init
- git branch -M main
- git add .
- git push origin main
- git commit -m "ep-01"
- git remote add origin https://github.com/ShreyuABD06/hi-react.git
- git push -u origin main

# NPM

- npm init
- npm install -D parcel
- npm install react
- npm install react-dom
- npx parcel index.html

# For Prod Build

- npx parcel build index.html
- Remove "main": "App.js" in package.json

# Code Changes

- import react
- index.html - Script - type = module

# React Algorithm - > Reconciliation Algorith also known as React Fiber

# Tailwind CSS - postcss (Tool for transforming CSS with javascript)

- npm install -D tailwindcss postcss
- npx tailwindcss init

# Redux

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to app
- Create Slice (Cart slice)
- Dispatch (Action)
- Selector (Subscribe)

# Test

- Install react testing library - npm install -dev @testing-library/react
- Install jest - npm install -D jest
- Install babel dependencies --Jest website ---npm install --save-dev babel-jest @babel/core @babel/preset-env
- create babel.config.js and add config from jest website
- Configure Parcel config file to disable default Babel traspilation - .parcelrc file (Take content from Parcel Website - LHS - Javascript - RHS - Babel) (Thia ia to use above config instead of default)
- Jest Conjiguration -npx jest --init
- install jsdom (From react testig library If you're using Jest 28 or later) ---
- npm install --save-dev jest-environment-jsdom

- JSDOM Browser like for testEnvironment

- Install - npm i -D @babel/preset-react (jsx is'nt supported error)
- Include @babel/preset-react in babel config -- runtime: 'automatic'
- Install npm i -D @testing-library/jest-dom (toBeInTheDocument is not a function)
