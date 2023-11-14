import SearchBar from "../searchbar/SearchBar";
import FilterOptions from "./FilterOptions";
// Import css file for this component from '../../styles/css/filter.bar.css.
import "./filter.bar.css";
const FilterBar = () => {
  return (
    <div className="t-filterbar-container">
      <span>Sort by: </span>
      <FilterOptions />
      <SearchBar />
      
    </div>
  );
};

FilterBar.propTypes = {};

export default FilterBar;
