import React from 'react'
import ThreadHeader from '../../components/thread-header/ThreadHeader'

import ThreadContainer from './thread.style'
import MessageList from '../../components/message-list/MessageList'
import MessageForm from '../../components/message-form/MessageForm'

const Thread = () => {
  return (
    <ThreadContainer>
      <ThreadHeader title='#general'></ThreadHeader>
      <MessageList></MessageList>
      <MessageForm></MessageForm>
    </ThreadContainer>
  )
}

export default Thread
