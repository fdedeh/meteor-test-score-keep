import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Player from './Player';

export default class PlayersList extends React.Component {
  renderPlayers(){
    if(this.props.players.length === 0){
      return <div className="item__message"><p>Add some players</p></div>;
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player} />;
      })
    }
  }
  render() {
    return(
      <div><FlipMove maintainContainerHeight={true} easing="ease-out" enterAnimation="elevator" leaveAnimation="elevator">{this.renderPlayers()}</FlipMove></div>
    )
  }
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired
}
