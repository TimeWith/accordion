import React, { Component } from 'react'
import glamorous from 'glamorous'
import { blue, grey_medium } from '@time-with/colors'
import { tablet_max, phone_max } from '@time-with/media-queries'

export const baseRowHeight = 50

export const LI = glamorous.li({
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

export const BottomPadding = glamorous.div({
  height: '20px',
});

export const ContentDIV = glamorous.div({
  margin: '0px',
  padding: '0px',
});

export const ToggleButton = glamorous.div({
  position: 'absolute',
  top: '0',
  right: '0',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  height: `${baseRowHeight}px`,
});

export const LabelParagraph = glamorous.p({
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

export const ToggleButtonLabel = glamorous(LabelParagraph)({
  border: 'none',
  width: 'auto !important',
  [tablet_max]: { display: 'none' },
});

export const toggleIconStyle = {
  marginLeft: '20px',
  position: 'relative', 
  display: 'inline-block',
  verticalAlign: 'top',
  top: '15px' ,
}