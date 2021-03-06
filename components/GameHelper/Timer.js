import React, { Component } from 'react';

class Timer extends Component {
  render() {
    const timeStamp = this.props.timeInGame.toTimeString().slice(0, 8);
    return (
      <div className="time">
        <p className="title is-3 is-inline">Time in Game</p> &nbsp;
        <h1 className="title is-3 is-inline">{timeStamp}</h1>
      </div>
    );
  }
}

export default Timer;
