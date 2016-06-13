import React from 'react';

const propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  handleUpdateCategory: React.PropTypes.func
};

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.handleUpdateCategory(this.props.id);
  }

  render() {
    const { props } = this;

    return (
      <li className="filter-link" onClick={this.handleClick}>{props.name}</li>
    );
  }
}

CategoryItem.propTypes = propTypes;

export default CategoryItem;
