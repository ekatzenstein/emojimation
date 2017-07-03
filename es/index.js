var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import { NodeGroup } from 'resonance';

import emotions from './emotions.json';
import background from './EmojiBackground.png';

var Tweener = function (_Component) {
  _inherits(Tweener, _Component);

  function Tweener() {
    _classCallCheck(this, Tweener);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Tweener.prototype.componentWillMount = function componentWillMount() {
    //define d3 drawing functions
    var x = d3.scaleLinear().rangeRound([0, 1000]);
    var y = d3.scaleLinear().rangeRound([0, 1000]);
    this.line = d3.line().curve(d3.curveBasisClosed).x(function (d) {
      return x(+d.x);
    }).y(function (d) {
      return y(1 - +d.y);
    });
    //create svg shading def
    this.svgShading = React.createElement(
      'defs',
      null,
      React.createElement(
        'pattern',
        { id: 'image0', x: '0%', y: '0%', height: '100%', width: '100%',
          viewBox: '0 0 512 512',
          preserveAspectRatio: 'none'
        },
        React.createElement('image', { x: '0%', y: '0%', width: '512', height: '512', xlinkHref: background })
      )
    );
  };

  Tweener.prototype.render = function render() {
    var _this2 = this;

    var emotion = this.props.emotion === 'upside_down_face' ? 'slightly_smiling_face' : this.props.emotion;

    var _emotions$emotion = emotions[emotion],
        le = _emotions$emotion.le,
        re = _emotions$emotion.re,
        lb = _emotions$emotion.lb,
        rb = _emotions$emotion.rb,
        mouth = _emotions$emotion.mouth,
        head = _emotions$emotion.head,
        tongue = _emotions$emotion.tongue;

    var headColor = this.props.headColor;
    var tongueColor = this.props.tongueColor;
    var eyeColor = this.props.eyeColor;
    var browColor = this.props.browColor;
    var mouthColor = this.props.mouthColor;

    var dataArray = [{ key: "head", data: head, fill: headColor }, { key: "headImg", data: head, fill: "url(#image0)" }, { key: "le", data: le, fill: eyeColor }, { key: "re", data: re, fill: eyeColor }, { key: "lb", data: lb, fill: browColor }, { key: "rb", data: rb, fill: browColor }, { key: "mouth", data: mouth, fill: mouthColor }, { key: "tongue", data: tongue, fill: tongueColor }];

    return React.createElement(
      'div',
      { style: _extends({ width: this.props.width, height: this.props.height, position: 'relative' }, this.props.style) },
      React.createElement(
        'svg',
        {
          viewBox: '0 0 1000 1000',
          preserveAspectRatio: 'none',
          style: {
            position: 'absolute',
            left: 0, top: 0, width: '100%', height: '100%'
          }
        },
        this.svgShading,
        React.createElement(
          NodeGroup,
          {
            data: dataArray,
            keyAccessor: function keyAccessor(d, i) {
              return d.key;
            },
            start: function start(data) {
              return {
                opacity: 1,
                fill: [data.fill],
                d: [_this2.line(data.data)]
              };
            },
            update: function update(data, i) {
              return {
                opacity: [1],
                fill: [data.fill],
                transform: [_this2.props.emotion === "upside_down_face" ? "rotate(180, 500, 500)" : "rotate(0, 500, 500)"],
                d: [_this2.line(data.data)],
                timing: { duration: _this2.props.duration }
              };
            }
          },
          function (nodes) {
            return React.createElement(
              'g',
              null,
              nodes.map(function (_ref) {
                var key = _ref.key,
                    data = _ref.data,
                    state = _ref.state;

                return React.createElement('path', _extends({ key: key }, state));
              })
            );
          }
        )
      )
    );
  };

  return Tweener;
}(Component);

Tweener.propTypes = process.env.NODE_ENV !== "production" ? {
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
} : {};

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