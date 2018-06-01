import React, { Component } from 'react';
import glamorous from 'glamorous';
import AccordionItem from './item';

class Accordion extends Component {

  render() {
    return (
      <ul style={{ paddingLeft: '0px' }}>
        {this.props.items.map(item =>
          <AccordionItem
            id={item.id}
            key={item.id}
            title={item.title}
            html={item.html} />
        )}
      </ul>
    );
  }
}

export default Accordion