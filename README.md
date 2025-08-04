# Calculator JS

A simple calculator with theme switching functionality, built with vanilla JavaScript and Webpack.

## Demo

🚀 **Deployed App:**
[https://calculator-js-woad.vercel.app/](https://calculator-js-woad.vercel.app/)

## Task

Task requirements link:
[Project Requirements](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## How to run the app

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Install dependencies

```bash
npm install
```

### Development mode

```bash
npm run dev
```

### Production build

```bash
npm run build
```

Build files will be generated in the `dist/` folder

### Additional commands

```bash
npm run lint       # ESLint code checking
npm run lint:fix   # Auto-fix ESLint errors
npm run format     # Format code with Prettier
```

## Project structure

```
calculator-js/
├── src/                        # Application source code
│   ├── index.html             # Main HTML file
│   ├── index.js               # JavaScript entry point
│   ├── modules/               # JavaScript modules divided by functionality
│   │   ├── calculator/        # Calculator functionality
│   │   │   ├── handlers.js    # Calculator event handlers
│   │   │   ├── model.js       # Calculator logic and data model
│   │   │   └── variables.js   # Calculator variables
│   │   └── theme/             # Theme switching functionality
│   │       ├── storage.js     # Theme local storage management
│   │       ├── theme.js       # Theme switching logic
│   │       └── variables.js   # Theme variables
│   └── styles/                # Application styles
│       └── main.scss          # Main SCSS file
├── eslint.config.mjs          # ESLint configuration
├── package-lock.json          # npm dependencies lock file
├── package.json               # npm dependencies and scripts
├── README.md                  # Project documentation
└── webpack.config.js          # Webpack configuration
```
