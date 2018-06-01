import React, { Component } from 'react';
import { plusSymbolSVG, minusSymbolSVG } from './symbols';
import glamorous from 'glamorous';
import AccordionItem from './item';
import { blue, grey_medium } from '@time-with/colors'
import { tablet_max, phone_max } from '@time-with/media-queries'

const baseRowHeight = 50

class Accordion extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleElementClick = (e) => {
    var isOpen = !this.state.open
    this.setState({
      open: isOpen
    })
    this.rootElement.style.height = isOpen ? `${baseRowHeight + this.contentElement.clientHeight}px`
    : `${baseRowHeight}px`
  }

  render() {
    const { open } = this.state
    const { id, title, html } = this.props

    return (
      <LI
        innerRef={c => this.rootElement = c}
        className="accordion-item" 
        onClick={this.handleElementClick}
        key={id}>
        <LabelParagraph innerRef={c => this.labelElement = c} className='highlight-hover'>
          {title}
        </LabelParagraph>
        <ToggleButton>
          <ToggleButtonLabel className='highlight-hover'>{ open ? 'read less' : 'read more' }</ToggleButtonLabel>
          { open 
            ? React.cloneElement( minusSymbolSVG, { className:'highlight-hover', style: toggleIconStyle })
            : React.cloneElement( plusSymbolSVG, { className:'highlight-hover', style: toggleIconStyle })
          }
        </ToggleButton>
        <ContentDIV
          className="item-content"
          innerRef={c => this.contentElement = c}>
          {html}
          <BottomPadding></BottomPadding>
        </ContentDIV>
      </LI>
    );
  }
}

export default Accordion;

const LI = glamorous.li({
  height: `${baseRowHeight}px`,
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
})

const BottomPadding = glamorous.div({
  height: '20px',
});

const ContentDIV = glamorous.div({
  margin: '0px',
  padding: '0px',
});

const ToggleButton = glamorous.div({
  position: 'absolute',
  top: '0',
  right: '0',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  height: `${baseRowHeight}px`,
});

const LabelParagraph = glamorous.p({
  fontFamily: 'proxima-soft',
  fontSize: '18px',
  color: grey_medium,
  fontWeight: 'bold',
  display: 'inline-block',
  verticalAlign: 'top',
  height: `${baseRowHeight}px`,
  lineHeight: `${baseRowHeight-5}px`,
  margin: '0',
  padding: '0',
  ':last-child': {
    border: 'none'
  },
  width: 'calc(100% - 140px)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [tablet_max]: { width: 'calc(100% - 50px)' },
  [phone_max]:  { fontSize: '16px', width: 'calc(100% - 30px)' },
});

const ToggleButtonLabel = glamorous(LabelParagraph)({
  border: 'none',
  width: 'auto !important',
  [tablet_max]: { display: 'none' },
});

const toggleIconStyle = {
  marginLeft: '20px',
  position: 'relative', 
  display: 'inline-block',
  verticalAlign: 'top',
  top: '15px' ,
}
