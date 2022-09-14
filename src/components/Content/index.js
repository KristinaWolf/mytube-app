import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContentAction } from "../../store/content/actions";
import {
  getContentData,
  getContentLoading,
} from "../../store/content/selectors";
import Spinner from "../Spinner";
import Player from "../Player";
import Card from "../Card";
import "./index.scss";

const apiKey = process.env.REACT_APP_API_YOUTUBE;

const Content = () => {
  const dispatch = useDispatch(); // диспатчит action в redux
  const location = useLocation();
  const query = location.pathname.slice(1);
  const cardsList = useSelector(getContentData); //забирает переменные, данные из редакс
  const loading = useSelector(getContentLoading);
  const [cards, setCards] = useState(); // хранит состояние
  const [playerState, setPlayerState] = useState(false);
  const [playerVideo, setPlayerVideo] = useState();

  useEffect(() => {
    dispatch(
      getContentAction.request({
        part: "snippet",
        key: apiKey,
        order: "viewCount",
        q: query,
        maxResults: 12,
      })
    );
  }, []); // только 1 раз обработка, чтобы к серверу доп запросов не было

  useEffect(() => {
    //хуки жизненного цикла
    setCards(cardsList);
  }, [cardsList]);

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

export default Content;
