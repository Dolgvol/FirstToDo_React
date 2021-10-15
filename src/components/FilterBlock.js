

const FilterBlock = (props) => {

   return (
      <div className="filter-block">

      <select name="filter" className="filter">
        <option value="active" className="filter-option">Active</option>
        <option value="archived" className="filter-option">Archived</option>
        <option value="all" className="filter-option">All Notes</option>
      </select>

    </div>
   )
}

export default FilterBlock
