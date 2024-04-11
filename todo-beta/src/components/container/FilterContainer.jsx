import { connect } from 'react-redux'
import { filterTodosAction } from '../../redux/actions';
import FilterOption from '../pure/filter/FilterOption';
import FilterBar from '../../layouts/filterbar/FilterBar';
import React from 'react';




// Este es un me todo para despachar metodos | acciones hacia el props de un componente.
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onFilterAction: () => {
            dispatch(filterTodosAction(ownProps.filter));
        }
    }
}

// const FilterContainer = connect(null, mapDispatchToProps)(FilterButton);
const FilterContainer = connect(null, mapDispatchToProps)(FilterOption);

export default FilterContainer;