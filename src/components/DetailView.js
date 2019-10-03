import React from "react";
import "./styles/DetailView.css";

const DetailView = props => {
  if (props.dataList === null) {
    return (
      <section className="detail-view">
        <img className="sprite-image" />
        <div className="data-wrapper">
          <h1 className="data-name"></h1>
          <p className="data-char"></p>
        </div>
      </section>
    );
  }
  const {
    dataList: {
      id,
      sprites: { front_default },
      weight,
      name,
      base_experience,
      abilities
    }
  } = props;
  console.log(id);
  console.log(weight);
  return (
    <section className="detail-view">
      <img className="sprite-image" src={front_default} />
      <div className="data-wrapper">
        <h1 className="data-name">{name}</h1>
        <p className="data-char">{weight}</p>
        <p className="data-char">{base_experience}</p>
        <p className="data-char">{abilities[0].ability.name}</p>
        <p className="data-char"></p>
      </div>
    </section>
  );
};

export default DetailView;
