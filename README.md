# Мой список фильмов

Учебный проект на React. Позволяет вести личный список фильмов с оценками и статусами.

## Как запустить

```bash
npm install
npm run dev
```

Открыть в браузере: http://localhost:5173

---

## Компоненты

| Файл | Назначение |
|------|------------|
| `App.jsx` | Главный компонент. Хранит state и все функции |
| `Head.jsx` | Заголовок и статистика: всего / просмотрено / осталось |
| `AddFilm.jsx` | Поля ввода (название, жанр, год) и кнопка добавления |
| `FindFilm.jsx` | Поле поиска по названию |
| `SortFilm.jsx` | Кнопки фильтра по статусу и сортировки |
| `FilmList.jsx` | Выводит список через `map()`, кнопка очистки просмотренных |
| `FilmRow.jsx` | Один фильм: название, жанр, год, оценка, статус, кнопки |

---

## Данные фильма

```js
{ id, name, genre, year, rate, status, edit }
// status: 'want' | 'watching' | 'done'
// rate: 0–5
```

---

## Props

`App` передаёт пропсы дочерним компонентам:
- `Head` — `count`, `done`, `left`
- `AddFilm` — `onAdd`
- `FindFilm` — `search`, `onSearch`
- `SortFilm` — `filter`, `onFilter`, `sort`, `onSort`
- `FilmList` — `films`, `onDel`, `onSetStatus`, `onEdit`, `onToggleEdit`, `onClear`

`FilmList` передаёт каждый фильм в `FilmRow`.

---

## State

| Переменная | Компонент | Назначение |
|------------|-----------|------------|
| `films` | `App.jsx` | Массив всех фильмов |
| `search` | `App.jsx` | Строка поиска |
| `filter` | `App.jsx` | Фильтр по статусу |
| `sort` | `App.jsx` | Сортировка (none / name / rate) |
| `name`, `genre`, `year` | `AddFilm.jsx` | Поля формы добавления |
| `eName`, `eGenre`, `eYear`, `eRate` | `FilmRow.jsx` | Поля формы редактирования |

---

## onClick

- `AddFilm.jsx` — кнопка «Добавить»
- `SortFilm.jsx` — кнопки фильтра и сортировки
- `FilmRow.jsx` — кнопки «Смотрю» / «Просмотрел» / «Сбросить», «Изменить», «Сохранить», «Отмена», «Удалить»
- `FilmList.jsx` — кнопка «Очистить просмотренные»

## onChange

- `AddFilm.jsx` — ввод названия, жанра, года
- `FindFilm.jsx` — ввод поискового запроса
- `FilmRow.jsx` — ввод при редактировании (название, жанр, год, оценка)

---

## map()

`FilmList.jsx` — перебирает массив `films` и рендерит `FilmRow` для каждого элемента.

---

## key

В `FilmList.jsx` каждый `FilmRow` получает `key={f.id}`. Используется `id`, а не индекс.

---

## Условный рендеринг

- `FilmList.jsx` — если список пуст, выводится «Ничего не найдено»
- `FilmRow.jsx` — если `film.status === 'done'`, название зачёркнуто
- `FilmRow.jsx` — если `film.edit`, отображается форма редактирования вместо строки
- `FilmRow.jsx` — если оценка > 0, отображаются звёзды
- `FilmRow.jsx` — текст кнопки статуса зависит от текущего `status`

## Как запустить

```bash
npm install
npm run dev
```

Открыть в браузере: http://localhost:5173
