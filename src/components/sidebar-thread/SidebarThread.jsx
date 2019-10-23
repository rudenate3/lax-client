import React from 'react'

import ThreadRow from './sidebarThread.style'

const SidebarThread = ({ icon, name }) => {
  return (
    <ThreadRow>
      {icon} {name}
    </ThreadRow>
  )
}

export default SidebarThread
