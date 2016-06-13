import React from 'react';

import CategoryList from 'components/CategoryList';
import RecipeList from 'components/RecipeList';

const propTypes = {
  state: React.PropTypes.object,
  updateCategory: React.PropTypes.func
};

class App extends React.Component {
  getRecipesByCategory() {
    const appState = this.props.state;
    const activeCategoryId = appState.activeCategoryId;
    const recipes = appState.recipes;

    if (!activeCategoryId) {
      return [];
    }

    return recipes.filter((recipe) => {
      return recipe.categoryId === activeCategoryId;
    });
  }

  getRecipeList() {
    if (!this.props.state.activeCategoryId) {
      return (<div />);
    }

    return (<RecipeList recipes={this.getRecipesByCategory()} />);
  }

  render() {
    const { props } = this;

    return (
      <div>
        <h1>{props.state.title}</h1>
        <div className="flexbox-container">
          <CategoryList categories={props.state.categories}
            setActiveCategory={props.updateCategory}
          />
          {this.getRecipeList()}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
