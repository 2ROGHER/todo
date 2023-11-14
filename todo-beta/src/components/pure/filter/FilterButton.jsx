import PropTypes from "prop-types";
// Let's import styles from this button component
import './filter.button.css';

const FilterButton = ({ onFilter, children }) => {
  return (
    <button onClick={onFilter} className="t-btn-filter">
      {children}
    </button>
  );
};

FilterButton.propTypes = {
  onFilter: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default FilterButton;
