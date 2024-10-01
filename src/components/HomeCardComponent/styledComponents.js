import styled from 'styled-components'

export const HomeCardContainer = styled.div`
  padding: 0px;
  margin: 0px 5px 5px 0px;
  display: flex;
  flex-direction: column;
   @media (min-width: 576px) {
    width: 48%;
  }
`
export const HomeCardContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HomeCardContentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`

export const HomeCardContentContainer3 = styled.div`
  display: flex;
  flex-direction: row;
  padding:0px;
`

export const HomeCardChannelLogo = styled.img`
    width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const HomeCardImg = styled.img`
  width: 100%;
  height: 150px;
  
`
export const HomeCardTitle = styled.h1`

  font-size: 14px;
  font-weight: bold;
  margin: 0px;
  color: ${props => props.color};

`
export const HomeCardChannelName = styled.p`


  font-size: 11px;
 
  color: ${props => props.color};

`
export const HomeCardP = styled.p`

  margin: 0px 5px 0px 0px;
  font-size: 13px;
  margin-bottom: 20px;
  color: ${props => props.color};

`
