import React from 'react';
import videojs from 'video.js';

const play = (player: videojs.Player | {}) => {
    let p = (player as videojs.Player);
    if (p.paused()) p.play();
    else p.pause();
}

const fullscreen = (player: videojs.Player | {}) => {
    let p = (player as videojs.Player);
    if (!p.isFullscreen()) p.requestFullscreen();
    else p.exitFullscreen();
}

const changeCaptionBg = () => {
    let selector = document.querySelector('.vjs-bg-color > select') as HTMLSelectElement;
    selector.value = "#F00";

    selector = document.querySelector('.vjs-bg-opacity > select') as HTMLSelectElement;
    selector.value = "0.5";
}
changeCaptionBg;

const changeAudioTrack = (player: videojs.Player | {}, lang: string) => {
    let tracks = (player as any).audioTracks();
    let track;
    console.log(tracks);
    for(let i = 0; i < tracks.length; i++) {
        track = tracks[i];
        if(track.label === lang) {
        track.enabled = true;
        }
    }
};

const changeCaption = (player: videojs.Player | {}, lang: string) => {
    let tracks = (player as videojs.Player).textTracks();

    for (let i = 0; i < tracks.length; i++) {
    let track = tracks[i];

    // find the captions track that's in english
    if (track.kind === 'captions' && track.label === lang) {
        track.mode = 'showing';
    }
    }

};

const VideojsControls = ({player}: {player: videojs.Player | {}}) => {
    return (
        <div style={{position: 'fixed', left: '0', top: '2rem'}}>
            <button style={{fontSize: '1.5rem'}}onClick={() => {play(player)}}>Play/Pause</button>
            <button style={{fontSize: '1.5rem'}}onClick={() => {changeAudioTrack(player, 'English')}}>English Audio</button>
            <button style={{fontSize: '1.5rem'}}onClick={() => {changeAudioTrack(player, 'German 1')}}>German Audio</button>
            <button style={{fontSize: '1.5rem'}}onClick={() => {changeCaption(player, 'English')}}>English Subtitles</button>
            <button style={{fontSize: '1.5rem'}}onClick={() => {changeCaption(player, 'German 1')}}>German Subtitles</button>
            <button style={{fontSize: '1.5rem'}}onClick={() => {fullscreen(player)}}>Fullscreen</button>
        </div>
    )
}

export default VideojsControls;