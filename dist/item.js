'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous$p;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _symbols = require('./symbols');

var _glamorous2 = require('glamorous');

var _glamorous3 = _interopRequireDefault(_glamorous2);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _colors = require('@time-with/colors');

var _mediaQueries = require('@time-with/media-queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseRowHeight = 50;

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));

    _this.handleElementClick = function (e) {
      var isOpen = !_this.state.open;
      _this.setState({
        open: isOpen
      });
      _this.rootElement.style.height = isOpen ? baseRowHeight + _this.contentElement.clientHeight + 'px' : baseRowHeight + 'px';
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var _props = this.props,
          id = _props.id,
          title = _props.title,
          html = _props.html;


      return _react2.default.createElement(
        LI,
        {
          innerRef: function innerRef(c) {
            return _this2.rootElement = c;
          },
          className: 'accordion-item',
          onClick: this.handleElementClick,
          key: id },
        _react2.default.createElement(
          LabelParagraph,
          { innerRef: function innerRef(c) {
              return _this2.labelElement = c;
            }, className: 'highlight-hover' },
          title
        ),
        _react2.default.createElement(
          ToggleButton,
          null,
          _react2.default.createElement(
            ToggleButtonLabel,
            { className: 'highlight-hover' },
            open ? 'read less' : 'read more'
          ),
          open ? _react2.default.cloneElement(_symbols.minusSymbolSVG, { className: 'highlight-hover', style: toggleIconStyle }) : _react2.default.cloneElement(_symbols.plusSymbolSVG, { className: 'highlight-hover', style: toggleIconStyle })
        ),
        _react2.default.createElement(
          ContentDIV,
          {
            className: 'item-content',
            innerRef: function innerRef(c) {
              return _this2.contentElement = c;
            } },
          html,
          _react2.default.createElement(BottomPadding, null)
        )
      );
    }
  }]);

  return Accordion;
}(_react.Component);

exports.default = Accordion;


var LI = _glamorous3.default.li({
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

var BottomPadding = _glamorous3.default.div({
  height: '20px'
});

var ContentDIV = _glamorous3.default.div({
  margin: '0px',
  padding: '0px'
});

var ToggleButton = _glamorous3.default.div({
  position: 'absolute',
  top: '0',
  right: '0',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  height: baseRowHeight + 'px'
});

var LabelParagraph = _glamorous3.default.p((_glamorous$p = {
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
}, _defineProperty(_glamorous$p, _mediaQueries.tablet_max, { width: 'calc(100% - 50px)' }), _defineProperty(_glamorous$p, _mediaQueries.phone_max, { fontSize: '16px', width: 'calc(100% - 30px)' }), _glamorous$p));

var ToggleButtonLabel = (0, _glamorous3.default)(LabelParagraph)(_defineProperty({
  border: 'none',
  width: 'auto !important'
}, _mediaQueries.tablet_max, { display: 'none' }));

var toggleIconStyle = {
  marginLeft: '20px',
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'top',
  top: '15px'
};
//# sourceMappingURL=item.js.map