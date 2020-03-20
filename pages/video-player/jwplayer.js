import React from 'react';
import ReactDOM from 'react-dom';
import ReactJWPLayerContainer from '../../components/jwplayer/jwPlayer';

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
      this.setState({
        player: window.jwplayer(this.playerId),
        videoPlayerReady: true
      });
    }

    const config = {
      width: '100%',
      controls: true,
    }

    return (
        <React.Fragment>
            <ReactJWPLayerContainer playerId={this.playerId} playlist={playlist} onReady={onReady} config={config}></ReactJWPLayerContainer>
        </React.Fragment>
    );
  }
}
