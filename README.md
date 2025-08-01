# Calculator JS

A simple calculator with theme switching functionality, built with vanilla JavaScript and Webpack.

## Demo

🚀 **Live Demo:** [Link will be added after deployment](https://your-app-url.com)

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

Application will be available at `http://localhost:8080`

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
├── src/                    # Application source code
│   ├── index.html         # Main HTML file
│   ├── index.js           # JavaScript entry point
│   ├── modules/           # JavaScript modules divided by functionality
│   │   ├── handlers.js    # Event handlers
│   │   ├── helpers.js     # Helper functions
│   │   ├── model.js       # Data model and main logic
│   │   ├── storage.js     # Local storage management
│   │   └── variables.js   # Constants and variables
│   └── styles/            # Application styles
│       └── main.scss      # Main SCSS file
├── eslint.config.mjs      # ESLint configuration
├── webpack.config.js      # Webpack configuration
└── package.json           # npm dependencies and scripts
```
