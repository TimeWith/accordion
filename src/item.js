import React, { Component } from 'react';
import { plusSymbolSVG, minusSymbolSVG } from './symbols';
import { blue, grey_medium } from '@time-with/colors'
import {
  LI,
  BottomPadding,
  ContentDIV,
  ToggleButton,
  LabelParagraph,
  ToggleButtonLabel,
  toggleIconStyle,
  baseRowHeight
} from './elements'

class AccordionItem extends Component {

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
    const { 
      id,
      title,
      html
    } = this.props
    let { 
      activeLabel,
      inactiveLabel
    } = this.props

    if (!activeLabel) { activeLabel = 'close'}
    if (!inactiveLabel) { inactiveLabel = 'open'}

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
          <ToggleButtonLabel className='highlight-hover'>{ open ? activeLabel : inactiveLabel }</ToggleButtonLabel>
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

export default AccordionItem;


