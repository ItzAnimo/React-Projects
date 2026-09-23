import { useState } from "react"

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("")

  function handleChange(event) {
    const value = event.target.value

    setSearch(value)
    onSearch(value)
  }

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={handleChange}
    />
  )
}

export default SearchBar