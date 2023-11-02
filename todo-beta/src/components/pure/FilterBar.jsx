import FilterOptions from "./FilterOptions";
// Import css file for this component from '../../styles/css/filter.bar.css.
import "../../styles/css/filter.bar.css";

const FilterBar = () => {
  return (
    <div className="t-filterbar-container">
      <FilterOptions />
    </div>
  );
};

FilterBar.propTypes = {};

export default FilterBar;
