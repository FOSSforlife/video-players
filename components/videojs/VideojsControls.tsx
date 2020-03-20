import React from 'react';
import videojs from 'video.js';

const changeCaptionBg = () => {
    let selector = document.querySelector('.vjs-bg-color > select') as HTMLSelectElement;
    selector.value = "#F00";

    selector = document.querySelector('.vjs-bg-opacity > select') as HTMLSelectElement;
    selector.value = "0.5";
}

const changeSrc = (player: videojs.Player | {}) => {
    // (player as videojs.Player).src('https://os-test-public.s3-us-west-2.amazonaws.com/video01/output/59_attitude01.hr.m3u8');

    let tracks = (player as any).audioTracks();
    let track;
    console.log(tracks);
    for(let i = 0; i < tracks.length; i++) {
        track = tracks[i];
        if(track.label === 'German 1') {
        track.enabled = true;
        }
    }
    // console.log((player as any).audioTracks().trigger('change'));

    // document.querySelector('video')
}

const VideojsControls = ({player}: {player: videojs.Player | {}}) => {
    return (
        <div>
            <button onClick={() => {(player as videojs.Player).play()}}>Play</button>
            <button onClick={() => {changeSrc(player)}}>Change src</button>
            <button onClick={changeCaptionBg}>Caption styling</button>
        </div>
    )
}

export default VideojsControls;