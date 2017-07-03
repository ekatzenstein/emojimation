'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _resonance = require('resonance');

var _emotions = require('./static/emotions.json');

var _emotions2 = _interopRequireDefault(_emotions);

var _EmojiBackground = require('./static/EmojiBackground.png');

var _EmojiBackground2 = _interopRequireDefault(_EmojiBackground);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    this.svgShading = _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'pattern',
        { id: 'image0', x: '0%', y: '0%', height: '100%', width: '100%',
          viewBox: '0 0 512 512',
          preserveAspectRatio: 'none'
        },
        _react2.default.createElement('image', { x: '0%', y: '0%', width: '512', height: '512', xlinkHref: _EmojiBackground2.default })
      )
    );
  };

  Tweener.prototype.render = function render() {
    var _this2 = this;

    var emotion = this.props.emotion === 'upside_down_face' ? 'slightly_smiling_face' : this.props.emotion;

    var _emotions$emotion = _emotions2.default[emotion],
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

    return _react2.default.createElement(
      'div',
      { style: _extends({ width: this.props.width, height: this.props.height, position: 'relative' }, this.props.style) },
      _react2.default.createElement(
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
        _react2.default.createElement(
          _resonance.NodeGroup,
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
            return _react2.default.createElement(
              'g',
              null,
              nodes.map(function (_ref) {
                var key = _ref.key,
                    data = _ref.data,
                    state = _ref.state;

                return _react2.default.createElement('path', _extends({ key: key }, state));
              })
            );
          }
        )
      )
    );
  };

  return Tweener;
}(_react.Component);

Tweener.propTypes = process.env.NODE_ENV !== "production" ? {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  emotion: _propTypes2.default.string,
  responsive: _propTypes2.default.bool,
  headColor: _propTypes2.default.string,
  tongueColor: _propTypes2.default.string,
  eyeColor: _propTypes2.default.string,
  mouthColor: _propTypes2.default.string,
  browColor: _propTypes2.default.string,
  duration: _propTypes2.default.number
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

exports.default = Tweener;
module.exports = exports['default'];