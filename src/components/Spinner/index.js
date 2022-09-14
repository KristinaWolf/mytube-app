import React from "react";
import spiner from "../../assets/spiner.gif";
import "./index.scss";

const Spinner = () => {
    return (
        <div className="spinner__wrap">
            <img src={spiner} alt='Загрузка' className="spinner__img" />
        </div>
    );
}

export default Spinner;