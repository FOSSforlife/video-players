import React from 'react'
import VideojsPlayer from '../../components/videojs/VideojsPlayer'
import videojs, { VideoJsPlayerOptions } from 'video.js';

type MyProps = {
  message: string;
};
type MyState = {
  videoPlayerReady: boolean;
};

export default class Index extends React.Component<MyProps, MyState> {
  player: videojs.Player | {} = {};

  state: MyState = {
    videoPlayerReady: false
  }

  render() {
    const videoJsOptions: VideoJsPlayerOptions = {
      techOrder: ['html5'],
      autoplay: false,
      controls: true,
      sources: [
            {
            src: 'https://os-test-public.s3-us-west-2.amazonaws.com/video01/output/59_attitude01.hr.m3u8',
            type: 'application/x-mpegURL',
            },
        ],
    fluid: true
    }

    const onReady = (player: videojs.Player) => {
      this.player = player;
      this.setState({
        videoPlayerReady: true
      });
    }

    return (
        <React.Fragment>
            <VideojsPlayer {...videoJsOptions} onReady={onReady} />
        </React.Fragment>
    );
  }
}
