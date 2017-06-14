import React, {Component} from 'react';
import CounterListContainer from '../containers/CounterListContainer';
import Buttons from './Buttons';
import { getRandomColor } from '../utils';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div>
        <div className="App">
          <Buttons
            onCreate={onCreate}
            onRemove={onRemove}
          />
        </div>
        <CounterListContainer/>
      </div>
    );
  }
}

const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove(getRandomColor()))
});

export default connect(null, mapToDispatch)(App);
