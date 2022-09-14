import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getContentData,
  getContentLoading,
} from "../../store/content/selectors";
import Spinner from "../Spinner";
import Player from "../Player";
import Card from "../Card";
// import "./index.scss";

const SearchList = () => {    
  const cards = useSelector(getContentData);
  const [playerState, setPlayerState] = useState(false);
  const [playerVideo, setPlayerVideo] = useState();
  const loading = useSelector(getContentLoading);

  return (
    <div className="contents">
      <div className="contents__wrap">
        {loading ? (
          <Spinner />
        ) : (
          cards &&
          cards.map((el) => {
            return (
              <Card
                key={Math.random(1000)}
                cardsData={el}
                playerState={playerState}
                setPlayerState={setPlayerState}
                setPlayerVideo={setPlayerVideo}
              />
            );
          })
        )}

        {playerState && (
          <Player
            idVideo={playerVideo}
            playerState={playerState}
            setPlayerState={setPlayerState}
          />
        )}
      </div>
    </div>
  );
};

export default SearchList;
