function FilterBar({
  filter,
  onFilterChange
}) {
  return (
    <div>
      <button
        className={filter === "all" ? "active-filter" : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        className={
          filter === "active"
            ? "active-filter"
            : ""
        }
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>

      <button
        className={
          filter === "completed"
            ? "active-filter"
            : ""
        }
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterBar