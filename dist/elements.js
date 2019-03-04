'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleIconStyle = exports.ToggleButtonLabel = exports.LabelParagraph = exports.ToggleButton = exports.ContentDIV = exports.BottomPadding = exports.LI = exports.baseRowHeight = undefined;

var _styled$p;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _colors = require('@time-with/colors');

var _mediaQueries = require('@time-with/media-queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseRowHeight = exports.baseRowHeight = 50;

var LI = exports.LI = _reactEmotion2.default.li({
  height: baseRowHeight + 'px',
  borderBottom: '1px solid #d8d8d8',
  transition: 'height 0.25s ease-out',
  padding: '0',
  margin: '0',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  ':hover': {
    '& .highlight-hover': {
      color: _colors.blue
    }
  }
});

var BottomPadding = exports.BottomPadding = _reactEmotion2.default.div({
  height: '20px'
});

var ContentDIV = exports.ContentDIV = _reactEmotion2.default.div({
  margin: '0px',
  padding: '0px'
});

var ToggleButton = exports.ToggleButton = _reactEmotion2.default.div({
  position: 'absolute',
  top: '0',
  right: '0',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  height: baseRowHeight + 'px'
});

var LabelParagraph = exports.LabelParagraph = _reactEmotion2.default.p((_styled$p = {
  fontFamily: 'proxima-soft',
  fontSize: '18px',
  color: _colors.grey_medium,
  fontWeight: 'bold',
  display: 'inline-block',
  verticalAlign: 'top',
  height: baseRowHeight + 'px',
  lineHeight: baseRowHeight - 5 + 'px',
  margin: '0',
  padding: '0',
  ':last-child': {
    border: 'none'
  },
  width: 'calc(100% - 140px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}, _defineProperty(_styled$p, _mediaQueries.tablet_max, { width: 'calc(100% - 50px)' }), _defineProperty(_styled$p, _mediaQueries.phone_max, { fontSize: '16px', width: 'calc(100% - 30px)' }), _styled$p));

var ToggleButtonLabel = exports.ToggleButtonLabel = (0, _reactEmotion2.default)(LabelParagraph)(_defineProperty({
  border: 'none',
  width: 'auto !important'
}, _mediaQueries.tablet_max, { display: 'none' }));

var toggleIconStyle = exports.toggleIconStyle = {
  marginLeft: '20px',
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'top',
  top: '15px'
};
//# sourceMappingURL=elements.js.map