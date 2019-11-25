import React, { useEffect } from "react"
import Palette from "./Palette/Palette"
import { connect } from "react-redux"
import { getLatestPalettes } from "./serverReq"

const LatestPalettes = ({ latestPalettes, getLatestPalettes }) => {
  useEffect(() => {
    getLatestPalettes()
  }, [])
  return (
    <section>
      <h2>Top Palettes</h2>
      {latestPalettes.map(p => (
        <Palette palette={p} />
      ))}
    </section>
  )
}

const mapStateToProps = state => ({
  latestPalettes: state.latestPalettes
})

const mapDispatchToProps = {
  getLatestPalettes
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestPalettes)
