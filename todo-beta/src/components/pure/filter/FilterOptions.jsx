import FilterContainer from '../../container/FilterContainer';

const FilterOptions = () => {
    return (
      <div className='t-btngroup-container'>
        <FilterContainer filter="SHOW_ALL">all</FilterContainer>
        <FilterContainer filter="PRIORITY">priority</FilterContainer>{" "}
        <FilterContainer filter="LEVEL">level</FilterContainer>{" "}
        <FilterContainer filter="COMPLETED">completed</FilterContainer>{" "}
        <FilterContainer filter="PENDING">pending</FilterContainer>{" "}
      </div>
    );
}

export default FilterOptions;
