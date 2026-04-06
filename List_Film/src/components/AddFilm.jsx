import { useState } from 'react'

function AddFilm({ onAdd }) {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')

  function handleAdd() {
    if (!name.trim()) return
    onAdd(name.trim(), genre.trim(), year.trim())
    setName('')
    setGenre('')
    setYear('')
  }

  return (
    <div className="add-film">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Название" />
      <input value={genre} onChange={e => setGenre(e.target.value)} placeholder="Жанр" />
      <input value={year} onChange={e => setYear(e.target.value)} placeholder="Год" maxLength={4} />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  )
}

export default AddFilm
