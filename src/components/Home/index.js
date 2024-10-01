import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Context from '../../context/Context'
import HomeCardComponent from '../HomeCardComponent'

import {
  HomeContainer,
  HomeBanner,
  HomeBannerLogo,
  BannerDescription,
  GetItNowBtn,
  Search,
  SearchContainer,
  SearchButton,
  HomeCardsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }
  componentDidMount() {
    this.getVideos()
  }
  getVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDarkTheme} = value
          const themeColor = isDarkTheme ? '#212121' : '#ffffff'
          const homeBannerView = () => (
            <HomeBanner>
              <HomeBannerLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
              <BannerDescription>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerDescription>
              <GetItNowBtn>GET IT NOW</GetItNowBtn>
            </HomeBanner>
          )

          const searchItem = () => {
            return (
              <SearchContainer>
                <Search type="search" placeholder="Search" />
                <SearchButton type="button" data-testid="searchButton">
                  <BsSearch className="search-icon" />
                </SearchButton>
              </SearchContainer>
            )
          }

          const homeCardView = () => {
            const {videosList} = this.state
            return (
              <HomeCardsContainer>
                {videosList.map(each => {
                  return <HomeCardComponent videoDetails={each} />
                })}
              </HomeCardsContainer>
            )
          }

          return (
            <HomeContainer color={themeColor}>
              {homeBannerView()}
              {searchItem()}
              {homeCardView()}
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
