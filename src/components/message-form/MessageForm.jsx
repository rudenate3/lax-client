import React from 'react'

import Form from './messageForm.style'

const MessageForm = () => {
  return (
    <Form>
      <Form.AddButton>+</Form.AddButton>
      <Form.Input />
    </Form>
  )
}

export default MessageForm
