import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePos} from './../imports/api/players'

import App from './../imports/ui/App'

Meteor.startup(() => {

  Tracker.autorun(() => {
    let p = Players.find({}, {sort:{score:-1}}).fetch();
    let players = calculatePos(p);
    let title = 'KeepScore App';
    ReactDOM.render(<App title={title} players={players}/>, document.getElementById('app'));
  });

});
