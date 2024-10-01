import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:20vw;
  min-height: 90vh;
  background-color: ${props => props.color};
  padding-left: 10px;
  padding-right: 15px;
  display: none;
   @media screen and (min-width: 768px) {
    display: flex;
  }
  
`
export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
`

export const NavItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 10px;
  background-color: ${props => props.bgColor};
`
export const NavName = styled.p`
  font-size: 14px;
  font-weight: ${props => props.bold};
  color: ${props => props.color};
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

`
export const ContactHeading = styled.p`
  font-size: 18px;
  color: ${props => props.color};
  font-weight: bold;
`

export const SocialContainer = styled.div`
  display: flex;
  padding: 0px;
  flex-direction: row;
  gap: 20px;
  align-items: center;

`
export const Image = styled.img`
  width: 30px;
  border-radius: 100%;
`
export const Description = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${props => props.color};

`
