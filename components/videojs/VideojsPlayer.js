import React, { Component } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'
import { vjsEpisodeList } from './vjsEpisodeList';

class VideojsPlayer extends Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
    this.props.onReady(this.player);

    /**
     * Fetch the controlBar component and add the new vjsEpisodeList component as a child
     * You can pass options here if desired in the second object.
     */
    // this.player.getChild('controlBar').addChild('vjsEpisodeList', {});
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video ref={node => (this.videoNode = node)} className="video-js" />
        </div>
      </div>
    )
  }
}

export default VideojsPlayer
