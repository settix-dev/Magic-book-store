export const filterCategories = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi",
];

const CategoryFilter = ({ category, handleFilterChange }) => {
  return (
    <div>
      <select
        value={category}
        // onChange={(e) => setCategory(e.target.value === 'All' ? '' : e.target.value)}
        onChange={(category) => handleFilterChange(category)}
      >
        <option value="All">All</option>
        {filterCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
