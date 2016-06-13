import React from 'react';
import ReactDOM from 'react-dom';

import AppStore from 'stores/AppStore';
import setCategoryFilter from 'actions/categoryActions';

import App from 'components/App';

// Sloppy
class Provider extends React.Component {
  constructor() {
    super();

    this.unbind = null;
    this.onUpdate = this.onUpdate.bind(this);
    this.dispatchFilterUpdate = this.dispatchFilterUpdate.bind(this);

    this.state = AppStore.getState();
  }

  onUpdate() {
    this.setState(AppStore.getState());
  }

  componentDidMount() {
    this.unbind = AppStore.subscribe(this.onUpdate);
  }

  componentWillUnmount() {
    this.unbind();
  }

  dispatchFilterUpdate(id) {
    AppStore.dispatch(setCategoryFilter(id));

    event.preventDefault();
  }

  render() {
    const { state } = this;

    return (
      <App
        state={state}
        updateCategory={this.dispatchFilterUpdate}
      />
    );
  }
}

ReactDOM.render(<Provider />, document.getElementById('recipes'));
