function FindFilm({ search, onSearch }) {
  return (
    <div className="find-film">
      <input
        value={search}
        onChange={e => onSearch(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  )
}

export default FindFilm
