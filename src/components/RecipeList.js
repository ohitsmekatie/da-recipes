import React from 'react';

const propTypes = {
  recipes: React.PropTypes.array
};

class RecipeList extends React.Component {
  getRecipes() {
    const recipes = this.props.recipes;

    if (!recipes.length) {
      return (
        <h3>Nothing here yet!</h3>
      );
    }

    return recipes.map((recipe, index) => {
      return (
        <li key={index}>
          <a href={recipe.link} target="_blank">{recipe.title}</a>
        </li>
      );
    })
  }

  render() {
    const { props } = this;

    return (
      <ul className="flexbox-col">
        {this.getRecipes()}
      </ul>
    );
  }
}

RecipeList.propTypes = propTypes;

export default RecipeList;
