import React from 'react'
import Measure from 'react-measure'
import window from 'window-or-global'

// library properties (don't change the width/height)
const properties = {
  width: 460,
  height: 380,
  fps: 24,
}

export class Construction extends React.Component {
  state = {
    bounds: {
      width: properties.width,
      height: properties.height,
    },
    defaultDpr: 1,
  }

  canvasRef = React.createRef()

  get dpr() {
    // These shennanigans are to workaround not having access to 'window' in ssr
    return window.devicePixelRatio || this.state.defaultDpr
  }

  get scale() {
    return this.state.bounds.width / properties.width
  }

  get baseWidth() {
    return properties.width
  }

  get baseHeight() {
    return properties.width
  }

  componentDidMount() {
    // Only load this module in component did mount because it used `window`
    const { default: ConstructionRender } = require('./construction.render')
    const createjs = require('createjs')
    this.canvas = this.canvasRef.current
    this.stage = new createjs.Stage(this.canvas)
    this.stage.addChild(new ConstructionRender())
    createjs.Ticker.setFPS(properties.fps)
    createjs.Ticker.addEventListener('tick', this.stage)
    this.setState({ defaultDpr: window.devicePixelRatio })
  }

  componentDidUpdate() {
    this.stage.scaleX = this.dpr * this.scale
    this.stage.scaleY = this.dpr * this.scale
  }

  render() {
    return (
      <Measure
        bounds
        onResize={rect => {
          this.setState({ bounds: rect.bounds })
        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef}>
            <canvas
              ref={this.canvasRef}
              width={this.baseWidth * this.dpr * this.scale}
              height={this.baseHeight * this.dpr * this.scale}
              style={{
                width: `${this.baseWidth * this.scale}px`,
                height: `${this.baseHeight * this.scale}px`,
                display: 'block',
              }}
            />
          </div>
        )}
      </Measure>
    )
  }
}
