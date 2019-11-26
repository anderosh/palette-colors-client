import React from 'react';
import './Palette.css';

const Palette = ({ palette }) => (
  <div className="Palette">
    <h4 className="Palette-name">{palette.name}</h4>
    <table>
      <thead>
        <tr>
          {palette.colors.slice(0, 5).map(c => (
            <th
              className="Palette-background"
              style={{ backgroundColor: c.color }}
            ></th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="Palette-colors">
          {palette.colors.slice(0, 5).map(c => (
            <td>{c.color}</td>
          ))}
        </tr>
        <tr className="Palette-labels">
          {palette.colors.slice(0, 5).map(c => (
            <td>{c.label}</td>
          ))}
        </tr>
      </tbody>
    </table>
    <div className="Palette-buttons">
      <a href="#" className="Palette-buttons-likes">
        {' '}
        Likes: {palette.likes} <i class="far fa-thumbs-up"></i>
      </a>
      <a href="#" className="Palette-buttons-fav">
        {' '}
        Add to favorites <i class="far fa-star"></i>
      </a>
    </div>
  </div>
);

export default Palette;
