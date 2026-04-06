function SortFilm({ filter, onFilter, sort, onSort }) {
  return (
    <div className="sort-film">
      <div className="filter-btns">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => onFilter('all')}>Все</button>
        <button className={filter === 'want' ? 'active' : ''} onClick={() => onFilter('want')}>Хочу посмотреть</button>
        <button className={filter === 'watching' ? 'active' : ''} onClick={() => onFilter('watching')}>Смотрю</button>
        <button className={filter === 'done' ? 'active' : ''} onClick={() => onFilter('done')}>Просмотрел</button>
      </div>
      <div className="sort-btns">
        <button className={sort === 'name' ? 'active' : ''} onClick={() => onSort(sort === 'name' ? 'none' : 'name')}>По названию</button>
        <button className={sort === 'rate' ? 'active' : ''} onClick={() => onSort(sort === 'rate' ? 'none' : 'rate')}>По оценке</button>
      </div>
    </div>
  )
}

export default SortFilm
