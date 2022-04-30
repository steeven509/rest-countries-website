import React from "react";

const Card = ({ name, capital, region, population, flags }) => {
    return (
        <div className="card-item">
            <img src={flags.svg} alt="pays" />
            <div className="card-item-infos">
                <h3 className="name">{name}</h3>
                <p className="population">{population}</p>
                <p className="region">{region}</p>
                <span className="capital">{capital}</span>
            </div>
        </div>
    );
};

export default Card;
