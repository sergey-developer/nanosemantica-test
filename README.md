# nanosemantica-test

## Описание
**nanosemantica-test** — это фронтенд-проект на основе React и Vite, разработанный с использованием TypeScript. В проекте настроены инструменты для линтинга, типов и деплоя на GitHub Pages.

## Стек технологий
- **React** 19
- **TypeScript** 5.7
- **Vite** 6.2
- **ESLint** для линтинга
- **gh-pages** для деплоя

## Установка и запуск

### 1. Клонирование репозитория
```sh
git clone https://github.com/sergey-developer/nanosemantica-test.git
cd nanosemantica-test
```

### 2. Установка зависимостей
```sh
yarn install
```

### 3. Запуск в режиме разработки
```sh
yarn dev
```
Приложение будет доступно по адресу `http://localhost:5173` (или другому порту, если `5173` занят).

### 4. Сборка проекта
```sh
yarn build
```
Собранные файлы будут находиться в папке `dist`.

### 5. Просмотр продакшн-версии локально
```sh
yarn preview
```

## Деплой на GitHub Pages
Проект можно развернуть на GitHub Pages с помощью команды:
```sh
yarn deploy
```
После выполнения команда `gh-pages` автоматически задеплоит содержимое `dist` в ветку `gh-pages`. Готовый проект будет доступен по адресу:
[https://sergey-developer.github.io/nanosemantica-test](https://sergey-developer.github.io/nanosemantica-test)

## Линтинг
Для проверки кода с помощью ESLint используйте:
```sh
yarn lint
```

## Структура проекта
```
nanosemantica-test/
├── src/         # Исходный код приложения
├── public/      # Публичные файлы
├── dist/        # Сборка проекта (создается после `yarn build`)
├── .eslintrc.js # Настройки ESLint
├── tsconfig.json # Конфигурация TypeScript
├── vite.config.ts # Конфигурация Vite
└── package.json  # Описание зависимостей и скриптов
```

## Контакты
Если у вас есть вопросы или предложения, создавайте [issues](https://github.com/sergey-developer/nanosemantica-test/issues) в репозитории проекта.