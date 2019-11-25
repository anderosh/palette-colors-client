import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { getColors, savePalette } from "./serverReq"
import { Link } from "react-router-dom"
import Palette from "./Palette/Palette"

const GetColors = ({
  imagePicked,
  getColors,
  colorsNewPalette,
  savePalette
}) => {
  const [paletteName, setPaletteName] = useState("")

  useEffect(() => {
    getColors(imagePicked)
  }, [])

  const handleName = event => {
    setPaletteName(event.target.value)
  }

  const handleSubmit = () => {
    const palette = {
      name: paletteName,
      label: colorsNewPalette,
      colors: colorsNewPalette,
      likes: 0
    }
    savePalette(palette)
    console.log(palette)
  }

  return (
    <div>
      <h1>New Palette</h1>
      <img src={imagePicked}></img>
      <div>
        <h2>{paletteName}</h2>

        {colorsNewPalette &&
          colorsNewPalette.length > 0 &&
          colorsNewPalette.map(p => console.log(p))}

        <input
          type="text"
          name="paletteName"
          placeholder="Name"
          onChange={handleName}
        ></input>
        <Link to="/">
          <button onClick={handleSubmit}>Save Palette</button>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  imagePicked: state.imagePicked,
  colorsNewPalette: state.colorsNewPalette
})
const mapDispatchToProps = {
  getColors,
  savePalette
}
export default connect(mapStateToProps, mapDispatchToProps)(GetColors)
