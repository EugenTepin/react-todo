import { connect } from 'react-redux'
import { clearComplitedItems, setVisibilityFilter } from '../../actions'
import TodoFooter from './TodoFooter'

const mapStateToProps = (state) => {
    return {
        itemsCount: state.items.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearComplitedItemsClick: () => {
            dispatch(clearComplitedItems());
        },
        setVisibilityFilterClick: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFooter)

