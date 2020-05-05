import React from 'react';
import PropTypes from 'prop-types';

import ReactJWPlayer from 'react-jw-player';

const displayName = 'ReactJWPlayerContainer';

const propTypes = {
  playlist: PropTypes.array.isRequired,
};

class ReactJWPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoTitle: '',
    };

    this.onAdPlay = this.onAdPlay.bind(this);
    this.onReady = this.props.onReady.bind(this);
    this.onVideoLoad = this.onVideoLoad.bind(this);

  }

  onAdPlay(event) {
    // track the ad play here
  }
  onVideoLoad(event) {
    this.setState({
      videoTitle: event.item.description // this only works with json feeds!
    });
  }
  render() {
    return (
      <div className='react-jw-player-container'>
        <h1>{ this.state.videoTitle }</h1>
        <ReactJWPlayer
          playlist={this.props.playlist}
          onAdPlay={this.onAdPlay}
          onReady={this.onReady}
          onVideoLoad={this.onVideoLoad}
          playerId={this.props.playerId} // bring in the randomly generated playerId
          playerScript='https://cdn.jwplayer.com/libraries/Z476fpvk.js'
          customProps={this.props.config}
          aspectRatio='16:9'
        />
      </div>
    );
  }
}

ReactJWPlayerContainer.propTypes = propTypes;
ReactJWPlayerContainer.displayName = displayName;
export default ReactJWPlayerContainer;