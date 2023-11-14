import { connect } from 'react-redux'
import { filterTodosAction } from '../../redux/actions';
import FilterButton from '../pure/filter/FilterButton'


// const mapStateToProps = (state) => {
//     return { 
//         todos: filterTodos(state.todoState, type),
//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onFilter: () => {
            dispatch(filterTodosAction(ownProps.filter));
        }
    }
}

const FilterContainer = connect(null, mapDispatchToProps)(FilterButton);

export default FilterContainer;