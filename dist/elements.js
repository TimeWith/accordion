'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous$p;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LI = exports.LI = glamorous.li({
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
      color: blue
    }
  }
});

var BottomPadding = exports.BottomPadding = glamorous.div({
  height: '20px'
});

var ContentDIV = exports.ContentDIV = glamorous.div({
  margin: '0px',
  padding: '0px'
});

var ToggleButton = exports.ToggleButton = glamorous.div({
  position: 'absolute',
  top: '0',
  right: '0',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  height: baseRowHeight + 'px'
});

var LabelParagraph = exports.LabelParagraph = glamorous.p((_glamorous$p = {
  fontFamily: 'proxima-soft',
  fontSize: '18px',
  color: grey_medium,
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
}, _defineProperty(_glamorous$p, tablet_max, { width: 'calc(100% - 50px)' }), _defineProperty(_glamorous$p, phone_max, { fontSize: '16px', width: 'calc(100% - 30px)' }), _glamorous$p));

var ToggleButtonLabel = exports.ToggleButtonLabel = glamorous(LabelParagraph)(_defineProperty({
  border: 'none',
  width: 'auto !important'
}, tablet_max, { display: 'none' }));

var toggleIconStyle = exports.toggleIconStyle = {
  marginLeft: '20px',
  position: 'relative',
  display: 'inline-block',
  verticalAlign: 'top',
  top: '15px'
};
//# sourceMappingURL=elements.js.map