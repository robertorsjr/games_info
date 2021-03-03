import React from 'react';
import styled from 'styled-components'
import YouTube from 'react-youtube';

const Video = styled.div`
  height:211px;
  width:407px;
`

function BoxVideo({game}) {

  const opts = {
    height: '211',
    width: '407',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  if(game && game.clip && game.clip.video){
    return (
      <Video>
        <YouTube videoId={game.clip.video} opts={opts }/>
      </Video>
    );
  
  }

  return null
  
}

export default BoxVideo;