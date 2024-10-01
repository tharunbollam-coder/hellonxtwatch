import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow: auto;
`
export const HomeCardsContainer = styled.ul`
   padding: 0px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   @media (min-width: 576px) {
    flex-direction: row;
  }
`
export const HomeBanner = styled.div`
  padding: 15px;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  height: 25vh;
`
export const HomeBannerLogo = styled.img`
  width: 120px;
  height: 30px;
`
export const BannerDescription = styled.p`
  font-size: 18px;
  font-family: 'San-serif';
  color: #000000;

`
export const GetItNowBtn = styled.button`
  background-color: transparent;
  height: 30px;
  width: 100px;
  border: 1px;
  border-style: solid;
  border-radius: 3px;
  border-color: #000000;
  cursor: pointer;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`
export const Search = styled.input`
  padding: 8px;
  outline: none;
  border: 1px solid #909090;
  line-height: 20px;
  width: 100%;
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  border: 1px solid #909090;
  padding: 8px;
  width: 50px;
  line-height: 20px;
`
