import React, { Component } from 'react';
import { connect } from 'react-redux';
import Score from './score'


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.once_a_second();
    }, 1000)
  }

  once_a_second() {
    this.props.dispatch({
      type: 'UPDATE_DISTANCE'
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <Score distance={this.props.distance} engine_speed={this.props.engine_speed}></Score>
        </div>
        <div class="row">
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.gameReducer
})

export default connect(mapStateToProps)(Game);