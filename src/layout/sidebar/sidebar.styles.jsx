import styled from 'styled-components'

import style from '../../styles/'

const Brand = styled.h1`
  color: white;
`

const Header = styled.h4`
  color: ${style.colors.grey4};
  font-size: 0.9rem;
  margin-bottom: -5px;
`

const SidebarStyle = styled.div`
  background-color: ${style.colors.grey1}
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  min-height: 100vh;
  min-width: 10vw;
`

SidebarStyle.Brand = Brand
SidebarStyle.Header = Header

export default SidebarStyle
