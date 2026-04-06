import { useState } from 'react'

const statusLabel = { want: 'Хочу посмотреть', watching: 'Смотрю', done: 'Просмотрел' }

function nextStatus(s) {
  if (s === 'want') return 'watching'
  if (s === 'watching') return 'done'
  return 'want'
}

function FilmRow({ film, onDel, onSetStatus, onEdit, onToggleEdit }) {
  const [eName, setEName] = useState(film.name)
  const [eGenre, setEGenre] = useState(film.genre)
  const [eYear, setEYear] = useState(film.year)
  const [eRate, setERate] = useState(film.rate)

  function handleCancel() {
    setEName(film.name)
    setEGenre(film.genre)
    setEYear(film.year)
    setERate(film.rate)
    onToggleEdit(film.id)
  }

  return (
    <li className="film-row">
      {film.edit ? (
        <div className="edit-block">
          <input value={eName} onChange={e => setEName(e.target.value)} placeholder="Название" />
          <input value={eGenre} onChange={e => setEGenre(e.target.value)} placeholder="Жанр" />
          <input value={eYear} onChange={e => setEYear(e.target.value)} placeholder="Год" maxLength={4} />
          <select value={eRate} onChange={e => setERate(Number(e.target.value))}>
            <option value={0}>Без оценки</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button onClick={() => onEdit(film.id, { name: eName, genre: eGenre, year: eYear, rate: eRate })}>Сохранить</button>
          <button onClick={handleCancel}>Отмена</button>
        </div>
      ) : (
        <div className="view-block">
          <span className={`film-name${film.status === 'done' ? ' done' : ''}`}>{film.name}</span>
          <span className="film-meta">{film.genre}{film.year ? `, ${film.year}` : ''}</span>
          {film.rate > 0 && <span className="film-rate">{'\u2605'.repeat(film.rate)}{'\u2606'.repeat(5 - film.rate)}</span>}
          <span className={`film-status status-${film.status}`}>{statusLabel[film.status]}</span>
          <button onClick={() => onSetStatus(film.id, nextStatus(film.status))}>
            {film.status === 'want' ? 'Смотрю' : film.status === 'watching' ? 'Просмотрел' : 'Сбросить'}
          </button>
          <button onClick={() => onToggleEdit(film.id)}>Изменить</button>
          <button onClick={() => onDel(film.id)}>Удалить</button>
        </div>
      )}
    </li>
  )
}

export default FilmRow
