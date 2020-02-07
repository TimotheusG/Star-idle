import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'


class Missions extends Component {

    constructor(props) {
        super(props);
        this.small_scout = this.small_scout.bind(this);
    }

   small_scout() {
        this.props.dispatch({
            type: 'SET_FLYING',
            input: !this.props.isFlying
        });
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <Button onClick={this.small_scout}>Small Scouting Run</Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.gameReducer
})

export default connect(mapStateToProps)(Missions);