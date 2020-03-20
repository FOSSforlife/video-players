import React from 'react';

const changeSubtitles = (player, langNum) => {
  player.setCurrentAudioTrack(langNum);
}

const JwPlayerControls = ({ player }) => {
  console.log(player);
    return (
        <div style={{position: 'fixed', left: '0', top: '2rem'}}>
          <button style={{fontSize: '1.5rem'}}onClick={() => {player.play()}}>Play/Pause</button>
          <button style={{fontSize: '1.5rem'}}onClick={() => {player.setCurrentAudioTrack(0)}}>English Audio</button>
          <button style={{fontSize: '1.5rem'}}onClick={() => {player.setCurrentAudioTrack(1)}}>German Audio</button>
          <button style={{fontSize: '1.5rem'}}onClick={() => {player.setCurrentCaptions(1)}}>English Subtitles</button>
          <button style={{fontSize: '1.5rem'}}onClick={() => {player.setCurrentCaptions(2)}}>German Subtitles</button>
        </div>
    )
}

export default JwPlayerControls;