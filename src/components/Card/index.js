import React from "react";
import moment from "moment";
import "./index.scss";

const Card = ({ cardsData, playerState, setPlayerState, setPlayerVideo }) => {
  return (
    <>
      <div className="card__wrap">
        <div className="card__video-player">
          <img
            onClick={() => {
              setPlayerState(!playerState);
              setPlayerVideo(cardsData.id.videoId);
            }}
            src={cardsData.snippet.thumbnails.medium.url}
            alt="текст"
            className="card__img"
          />
        </div>
        <div className="card__text">
          <div className="card__text-name">
            <h3
              className="card__title"
              onClick={() => {
                setPlayerState(!playerState);
                setPlayerVideo(cardsData.id.videoId);
              }}
            >
              {cardsData.snippet.title}
            </h3>
            <span className="card__when">
              {moment(cardsData.snippet.publishedAt).format("DD.MM.YYYY")}
            </span>
          </div>
          <span className="card__performer">
            {cardsData.snippet.channelTitle}
          </span>
          <p className="card__description">{cardsData.snippet.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
