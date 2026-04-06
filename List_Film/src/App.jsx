import { useState } from 'react'
import Head from './components/Head'
import AddFilm from './components/AddFilm'
import FindFilm from './components/FindFilm'
import SortFilm from './components/SortFilm'
import FilmList from './components/FilmList'
import './styles.css'

const start = [
  { id: 1, name: 'Интерстеллар', genre: 'Фантастика', year: '2014', rate: 5, status: 'done', edit: false },
  { id: 2, name: 'Зелёная миля', genre: 'Драма', year: '1999', rate: 5, status: 'done', edit: false },
  { id: 3, name: 'Начало', genre: 'Триллер', year: '2010', rate: 4, status: 'watching', edit: false },
  { id: 4, name: 'Дюна', genre: 'Фантастика', year: '2021', rate: 0, status: 'want', edit: false },
]

function App() {
  const [films, setFilms] = useState(start)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('none')

  function add(name, genre, year) {
    const film = { id: Date.now(), name, genre, year, rate: 0, status: 'want', edit: false }
    setFilms([...films, film])
  }

  function del(id) {
    setFilms(films.filter(f => f.id !== id))
  }

  function setStatus(id, status) {
    setFilms(films.map(f => f.id === id ? { ...f, status } : f))
  }

  function edit(id, data) {
    setFilms(films.map(f => f.id === id ? { ...f, ...data, edit: false } : f))
  }

  function toggleEdit(id) {
    setFilms(films.map(f => f.id === id ? { ...f, edit: !f.edit } : f))
  }

  function clearDone() {
    setFilms(films.filter(f => f.status !== 'done'))
  }

  let list = films.filter(f => f.name.toLowerCase().includes(search.toLowerCase()))
  if (filter !== 'all') list = list.filter(f => f.status === filter)
  if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
  if (sort === 'rate') list = [...list].sort((a, b) => b.rate - a.rate)

  const done = films.filter(f => f.status === 'done').length
  const left = films.filter(f => f.status !== 'done').length

  return (
    <div className="app">
      <Head count={films.length} done={done} left={left} />
      <AddFilm onAdd={add} />
      <FindFilm search={search} onSearch={setSearch} />
      <SortFilm filter={filter} onFilter={setFilter} sort={sort} onSort={setSort} />
      <FilmList
        films={list}
        onDel={del}
        onSetStatus={setStatus}
        onEdit={edit}
        onToggleEdit={toggleEdit}
        onClear={clearDone}
      />
    </div>
  )
}

export default App
