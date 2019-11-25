import React from "react"

const Palette = ({ palette }) => (
  <div>
    <h4>{palette.name}</h4>
    <tr>
      {palette.colors.map(c => (
        <th>{c.label}</th>
      ))}
    </tr>
    <tr>
      {palette.colors.map(c => (
        <td>{c.color}</td>
      ))}
    </tr>
  </div>
)

export default Palette
