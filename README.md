# Calculator JS

Простой калькулятор с возможностью переключения темы, созданный на чистом JavaScript с
использованием Webpack.

## Task

Ссылка на условие задачи:
[Требования к проекту](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## How to run the app

### Предварительные требования

- Node.js (версия 14 или выше)
- npm

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:8080`

### Сборка для production

```bash
npm run build
```

Готовые файлы будут в папке `dist/`

### Дополнительные команды

```bash
npm run lint       # Проверка кода ESLint
npm run lint:fix   # Автоматическое исправление ошибок ESLint
npm run format     # Форматирование кода с помощью Prettier
```

## Структура проекта

```
calculator-js/
├── src/                    # Исходный код приложения
│   ├── index.html         # Главный HTML файл
│   ├── index.js           # Точка входа JavaScript
│   ├── modules/           # JavaScript модули, разделенные по функциональности
│   │   ├── handlers.js    # Обработчики событий
│   │   ├── helpers.js     # Вспомогательные функции
│   │   ├── model.js       # Модель данных и основная логика
│   │   ├── storage.js     # Работа с локальным хранилищем
│   │   └── variables.js   # Константы и переменные
│   └── styles/            # Стили приложения
│       └── main.scss      # Главный SCSS файл
├── eslint.config.mjs      # Конфигурация ESLint
├── webpack.config.js      # Конфигурация Webpack
└── package.json           # Зависимости и скрипты npm
```
