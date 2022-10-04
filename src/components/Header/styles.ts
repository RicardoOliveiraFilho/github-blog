import styled from 'styled-components'

import bannerHeaderImg from '../../assets/banner-header.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${bannerHeaderImg}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
