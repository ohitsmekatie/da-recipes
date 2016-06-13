import React from 'react';
import CategoryItem from 'components/CategoryItem';

const propTypes = {
  categories: React.PropTypes.array,
  setActiveCategory: React.PropTypes.func
};

class CategoryList extends React.Component {
  render() {
    const { props } = this;

    return (
      <ul className="flexbox-col">
        {props.categories.map((category, index) => {
          return (
            <CategoryItem
              key={index}
              id={category.id}
              name={category.name}
              handleUpdateCategory={props.setActiveCategory}
            />
          );
        })}
      </ul>
    );
  }
};

CategoryList.propTypes = propTypes;

export default CategoryList;
