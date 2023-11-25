import { connect } from 'react-redux'
import { filterTodosAction } from '../../redux/actions';
import FilterOption from '../pure/FilterOption';

// Este es un me todo para despachar metodos | acciones hacia el props de un componente.
const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onFilter: () => {
            dispatch(filterTodosAction(ownProps.filter));
        }
    }
}

// const FilterContainer = connect(null, mapDispatchToProps)(FilterButton);
const FilterContainer = connect(null, mapDispatchToProps)(FilterOption);

export default FilterContainer;