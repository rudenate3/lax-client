import React from 'react'

import SidebarStyle from './sidebar.styles'
import SidebarThread from '../../components/sidebar-thread/SidebarThread'

const Sidebar = () => {
  return (
    <SidebarStyle>
      <SidebarStyle.Brand>Lax</SidebarStyle.Brand>
      <div>
        <SidebarStyle.Header>Starred</SidebarStyle.Header>
        <SidebarThread icon='*' name='User 1' />
        <SidebarThread icon='*' name='User 2' />
        <SidebarThread icon='*' name='User 3' />
        <SidebarThread icon='*' name='User 4' />
        <SidebarThread icon='*' name='User 5' />
        <SidebarThread icon='*' name='User 6' />
      </div>
      <div>
        <SidebarStyle.Header>Channels</SidebarStyle.Header>
        <SidebarThread icon='#' name='general' />
        <SidebarThread icon='#' name='tech' />
        <SidebarThread icon='#' name='engineering' />
        <SidebarThread icon='#' name='devops' />
        <SidebarThread icon='#' name='sales' />
      </div>
      <div>
        <SidebarStyle.Header>Direct Messages</SidebarStyle.Header>
        <SidebarThread icon='*' name='Elon' />
        <SidebarThread icon='*' name='Bill G' />
      </div>
    </SidebarStyle>
  )
}

export default Sidebar
