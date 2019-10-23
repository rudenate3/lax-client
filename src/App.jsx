import React from 'react'

import { AppContainer } from './app.style'
import Sidebar from './layout/sidebar/Sidebar'
import Thread from './layout/thread/Thread'

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Thread />
    </AppContainer>
  )
}

export default App
