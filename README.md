# MVP Карточная игра "Мемо"

В этом репозитории реализован MVP карточкой игры "Мемо" по [тех.заданию](./docs/mvp-spec.md)

## Разработка

Проект реализован на основе шаблона [Create React App](https://github.com/facebook/create-react-app).

### Как разрабатывать

- Установите зависимости командой `npm install`
- Запустите dev сервер `npm start`
- Откройте адрес в браузере

### Стек и инструменты

Для стилей в коде используются css modules.

Настроены eslint и prettier. Корректность кода проверяется автоматически перед каждым коммитом с помощью lefthook (аналог husky). Закомитить код, который не проходит проверку eslint не получится.

### Доступные команды

#### `npm start`

Запускает приложение в режиме разработки.

Откройте [http://localhost:3000](http://localhost:3000) чтобы посмотреть его в браузере.

#### `npm run build`

Собирает оптимизированный и минифицированный продакшен билд приложения в папку `build`.
После сборке, приложение готово к деплою.

#### `npm run deploy`

Деплоит приложение в github pages. По сути, запускает сборку и коммитит билд в ветку gh-pages.

(!) github pages должен быть включен в настройках репозитория и настроен на ветку gh-pages

#### `npm run lint`

Запускает eslint проверку кода, эта же команда запускается перед каждым коммитом.
Если не получается закоммитить, попробуйте запустить эту команду и исправить все ошибки и предупреждения.



###NEW

Добавлен новый режим:реализован режим, при котором игра завершается после трех ошибок.


Включение режима: режим включается с помощью чекбокса на странице выбора уровня.

Счетчик ошибок: добавлен вывод количества оставшихся попыток на игровой экран ("Осталось попыток: 3" и так далее).

Конец игры: при достижении трех ошибок появляется модальное окно о завершении игры.

Предплагаемое время на выполнение ДЗ №2 5 часов
Затрачено времени: 4 часа.


Добавлена связь с api.
Добавлена страница Лидерборда.

Предплагаемое время на выполнение ДЗ №2 5 часов
атрачено времени: 6,5 часов
