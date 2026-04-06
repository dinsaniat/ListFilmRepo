function Head({ count, done, left }) {
  return (
    <div className="head">
      <h1>Мой список фильмов</h1>
      <p>Всего: {count} · Просмотрено: {done} · Осталось: {left}</p>
    </div>
  )
}

export default Head
