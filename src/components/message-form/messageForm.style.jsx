import styled from 'styled-components'

import style from '../../styles/'

const AddButton = styled.button`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  min-width: 3vw;
`

const Input = styled.input`
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  min-width: 84vw;
`

const Form = styled.div`
  display: flex;
  min-height: 4vh;
`

Form.AddButton = AddButton
Form.Input = Input

export default Form
