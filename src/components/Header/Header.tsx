function Header({onSearch}: { onSearch: (key: string) => void }) {
  return (
    <header className="text-center text-light my-4">
      <h1 className="mb-5">Todo List</h1>
      <input
        type="text"
        className="form-control m-auto"
        name="search"
        placeholder="search todos"
        onChange={e => onSearch(e.target.value)}
      />
    </header>
  )
}

export default Header
