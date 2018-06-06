'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _symbols = require('./symbols');

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _colors = require('@time-with/colors');

var _elements = require('./elements');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionItem = function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem(props) {
    _classCallCheck(this, AccordionItem);

    var _this = _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).call(this, props));

    _this.handleElementClick = function (e) {
      var isOpen = !_this.state.open;
      _this.setState({
        open: isOpen
      });
      _this.rootElement.style.height = isOpen ? _elements.baseRowHeight + _this.contentElement.clientHeight + 'px' : _elements.baseRowHeight + 'px';
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(AccordionItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var _props = this.props,
          id = _props.id,
          title = _props.title,
          html = _props.html;
      var _props2 = this.props,
          activeLabel = _props2.activeLabel,
          inactiveLabel = _props2.inactiveLabel;


      if (!activeLabel) {
        activeLabel = 'close';
      }
      if (!inactiveLabel) {
        inactiveLabel = 'open';
      }

      return _react2.default.createElement(
        _elements.LI,
        {
          innerRef: function innerRef(c) {
            return _this2.rootElement = c;
          },
          className: 'accordion-item',
          onClick: this.handleElementClick,
          key: id },
        _react2.default.createElement(
          _elements.LabelParagraph,
          { innerRef: function innerRef(c) {
              return _this2.labelElement = c;
            }, className: 'highlight-hover' },
          title
        ),
        _react2.default.createElement(
          _elements.ToggleButton,
          null,
          _react2.default.createElement(
            _elements.ToggleButtonLabel,
            { className: 'highlight-hover' },
            open ? activeLabel : inactiveLabel
          ),
          open ? _react2.default.cloneElement(_symbols.minusSymbolSVG, { className: 'highlight-hover', style: _elements.toggleIconStyle }) : _react2.default.cloneElement(_symbols.plusSymbolSVG, { className: 'highlight-hover', style: _elements.toggleIconStyle })
        ),
        _react2.default.createElement(
          _elements.ContentDIV,
          {
            className: 'item-content',
            innerRef: function innerRef(c) {
              return _this2.contentElement = c;
            } },
          html,
          _react2.default.createElement(_elements.BottomPadding, null)
        )
      );
    }
  }]);

  return AccordionItem;
}(_react.Component);

exports.default = Accordion;
//# sourceMappingURL=item.js.map