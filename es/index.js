var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import t from 'prop-types';
import React, { Component } from 'react';

var LoadingButton = (_temp = _class = function (_Component) {
  _inherits(LoadingButton, _Component);

  function LoadingButton() {
    _classCallCheck(this, LoadingButton);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  LoadingButton.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        disabled = _props.disabled,
        loading = _props.loading,
        type = _props.type,
        props = _objectWithoutProperties(_props, ['children', 'disabled', 'loading', 'type']);

    if (loading) {
      disabled = true;
    }
    return React.createElement(
      'button',
      _extends({ disabled: disabled, type: type }, props),
      children
    );
  };

  return LoadingButton;
}(Component), _class.defaultProps = {
  disabled: false,
  loading: false,
  type: 'button'
}, _temp);
LoadingButton.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: t.bool,
  loading: t.bool,
  type: t.string
} : {};


export default LoadingButton;