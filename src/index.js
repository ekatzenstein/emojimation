import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { NodeGroup } from 'resonance';

import emotions from './static/emotions.json';
import background from './static/EmojiBackground.png';

class Tweener extends Component {

  constructor() {
    super();
    //define d3 drawing functions
    const x = d3.scaleLinear()
      .rangeRound([0, 1000]);

    const y = d3.scaleLinear()
      .rangeRound([0, 1000]);

    this.line = d3.line()
      .curve(d3.curveBasisClosed)
      .x(function (d) { return x(+d.x); })
      .y(function (d) { return y(1 - +d.y); });

    //create svg shading def
    this.svgShading = (
      <defs>
        <pattern id="emoji-image" x="0%" y="0%" height="100%" width="100%"
          viewBox="0 0 512 512"
          preserveAspectRatio="none"
        >
          <image x="0%" y="0%" width="512" height="512" xlinkHref={background}></image>
        </pattern>
      </defs >
    )
  }

  render() {
    const emotion = this.props.emotion === 'upside_down_face' ? 'slightly_smiling_face' : this.props.emotion;

    const { le, re, lb, rb, mouth, head, tongue } = emotions[emotion];
    const { headColor, tongueColor, eyeColor, browColor, mouthColor } = this.props;

    const dataArray = [
      { key: "head", data: head, fill: headColor },
      { key: "headImg", data: head, fill: "url(#emoji-image)" },
      { key: "le", data: le, fill: eyeColor },
      { key: "re", data: re, fill: eyeColor },
      { key: "lb", data: lb, fill: browColor },
      { key: "rb", data: rb, fill: browColor },
      { key: "mouth", data: mouth, fill: mouthColor },
      { key: "tongue", data: tongue, fill: tongueColor }
    ];

    return (
      <div style={{ width: this.props.width, height: this.props.height, position: 'relative', ...this.props.style }}>
        <svg
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            left: 0, top: 0, width: '100%', height: '100%',
          }}
        >
          {this.svgShading}
          <NodeGroup
            data={dataArray}
            keyAccessor={(d, i) => {
              return d.key;
            }}
            start={(data) => ({
              opacity: 1,
              fill: [data.fill],
              d: [this.line(data.data)]
            })}
            update={(data, i) => ({
              opacity: [1],
              fill: [data.fill],
              transform: [this.props.emotion === "upside_down_face" ? "rotate(180, 500, 500)" : "rotate(0, 500, 500)"],
              d: [this.line(data.data)],
              timing: { duration: this.props.duration },
            })}
          >
            {(nodes) => (
              <g>
                {nodes.map(({ key, data, state }) => <path key={key}{...state} />)}
              </g>
            )}
          </NodeGroup>
        </svg>
      </div>
    )
  }
}

Tweener.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  emotion: PropTypes.string,
  responsive: PropTypes.bool,
  headColor: PropTypes.string,
  tongueColor: PropTypes.string,
  eyeColor: PropTypes.string,
  mouthColor: PropTypes.string,
  browColor: PropTypes.string,
  duration: PropTypes.number
};

Tweener.defaultProps = {
  width: '200px',
  height: '200px',
  emotion: 'joy',
  responsive: true,
  headColor: 'yellow',
  tongueColor: 'red',
  eyeColor: 'black',
  mouthColor: 'black',
  browColor: 'black',
  duration: 800
};

export default Tweener;