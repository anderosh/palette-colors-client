import React from 'react';

const Palette = ({ palette }) => (
  <div>
    {palette &&
      palette.length > 0 &&
      palette.map(p => (
        <article key={p._id}>
          <h3>{p.name}</h3>
          <div>
            <tr>
              <td>{p.colors[0].label}</td>
              <td>{p.colors[1].label}</td>
              <td>{p.colors[2].label}</td>
              <td>{p.colors[3].label}</td>
              <td>{p.colors[4].label}</td>
            </tr>
            <tr>
              <td>{p.colors[0].color}</td>
              <td>{p.colors[1].color}</td>
              <td>{p.colors[2].color}</td>
              <td>{p.colors[3].color}</td>
              <td>{p.colors[4].color}</td>
            </tr>
          </div>
          <h4>Likes :{p.likes}</h4>
        </article>
      ))}
  </div>
);

export default Palette;
