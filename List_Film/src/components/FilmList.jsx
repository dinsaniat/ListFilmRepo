import FilmRow from './FilmRow'

function FilmList({ films, onDel, onSetStatus, onEdit, onToggleEdit, onClear }) {
  return (
    <div>
      <button className="clear-btn" onClick={onClear}>Очистить просмотренные</button>
      {films.length === 0
        ? <p className="empty">Ничего не найдено</p>
        : (
          <ul className="film-list">
            {films.map(f => (
              <FilmRow
                key={f.id}
                film={f}
                onDel={onDel}
                onSetStatus={onSetStatus}
                onEdit={onEdit}
                onToggleEdit={onToggleEdit}
              />
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default FilmList
