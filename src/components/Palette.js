import React from "react";
import { connect } from "react-redux";

const Palette = ({ palette }) => (
  <div>
    {palette &&
      palette.length > 0 &&
      palette.map(p => (
        <article key={p._id}>
          <h3>{p.name}</h3>
          <div>
            <span>{p.colors[1]}</span>
            <span>{p.colors[2]}</span>
            <span>{p.colors[3]}</span>
            <span>{p.colors[4]}</span>
            <span>{p.colors[5]}</span>
          </div>
          <h4>Likes :{p.likes}</h4>
        </article>
      ))}
  </div>
);

export default Palette;
