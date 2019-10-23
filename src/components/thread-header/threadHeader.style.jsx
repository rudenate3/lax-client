import styled from 'styled-components'

import style from '../../styles/'

const BottomRow = styled.div`
  color: ${style.colors.grey4};
  font-size: 0.9rem;
`

const Title = styled.h3`
  color: ${style.colors.grey5};
  font-size: 1.5rem;
  margin-bottom: 10px;
`

const ThreadHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10vh;
`

ThreadHeaderStyle.Title = Title
ThreadHeaderStyle.BottomRow = BottomRow

export default ThreadHeaderStyle
