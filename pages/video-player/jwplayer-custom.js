import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPLayerContainer from '../../components/jwplayer/jwPlayer';
import JwPlayerControls from '../../components/jwplayer/jwPlayerControls';

export default class JwTest extends React.Component {
  state = {
    player: {},
    videoPlayerReady: false
  }

  render() {

    const playlist = [{
      file: 'https://os-test-public.s3-us-west-2.amazonaws.com/video01/output/59_attitude01.hr.m3u8',
    }];

    this.playerId = `${Math.floor(Math.random()*10000)}`;
    const onReady = (player) => {
      console.log('player', player);
      console.log('window.jwplayer()', window.jwplayer());
      console.log('window.jwplayer(this.playerId)', window.jwplayer(this.playerId));
      this.setState({
        // player: window.jwplayer(this.playerId), // no idea why this doesn't work!!!
        player: window.jwplayer(),
        videoPlayerReady: true
      });
    }

    const config = {
      width: '100%',
      controls: false,
    }

    return (
        <React.Fragment>
            <ReactJWPLayerContainer playerId={this.playerId} playlist={playlist} onReady={onReady} config={config}></ReactJWPLayerContainer>
            {this.state.videoPlayerReady && <JwPlayerControls player={this.state.player} /> }
        </React.Fragment>
    );
  }
}
