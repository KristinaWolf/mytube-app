import React from 'react';
import ReactPlayer from 'react-player';
// import YouTube from 'react-youtube';
import './index.scss';

const Player = ({idVideo, playerState, setPlayerState}) => {
  return (
    <div className="player__wrap">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${idVideo}`} />
      <div className="player__close" onClick={()=>setPlayerState(!playerState)}>✕</div>
    </div>
  );
}

export default Player;