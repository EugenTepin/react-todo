import React from "react";
import { VisibilityFilters } from 'actions'


class TodoFooter extends React.Component {
  render() {
    const itemsCount = this.props.itemsCount;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsCount}</strong> {itemsCount === 1 ? "item" : "items"}{" "}
          left
        </span>
        <ul className="filters">
          <li>
            <a href="#" onClick={(e) => { this.props.setVisibilityFilterClick(VisibilityFilters.SHOW_ALL);  }} >All</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { this.props.setVisibilityFilterClick(VisibilityFilters.SHOW_ACTIVE); }} >Active</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { this.props.setVisibilityFilterClick(VisibilityFilters.SHOW_COMPLETED); }} >Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={(e) => { this.props.clearComplitedItemsClick();}} >Clear Completed</button>
      </footer>
    );
  }
}

export default TodoFooter;
