import React from 'react'

import ThreadHeaderStyle from './threadHeader.style'

const ThreadHeader = ({ title }) => {
  return (
    <ThreadHeaderStyle>
      <ThreadHeaderStyle.Title>{title}</ThreadHeaderStyle.Title>
      <ThreadHeaderStyle.BottomRow>* | 1343</ThreadHeaderStyle.BottomRow>
    </ThreadHeaderStyle>
  )
}

export default ThreadHeader
