import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayersList from './PlayersList'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subTitle="Created by Déda"/>
        <div className="wrapper">
          <PlayersList players={this.props.players}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
}

App.propTypes ={
  players: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
