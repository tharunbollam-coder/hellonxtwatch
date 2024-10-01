import {
  HomeCardContainer,
  HomeCardImg,
  HomeCardContentContainer,
  HomeCardContentContainer2,
  HomeCardChannelLogo,
  HomeCardTitle,
  HomeCardChannelName,
  HomeCardContentContainer3,
  HomeCardP,
} from './styledComponents'

const HomeCardComponent = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = videoDetails
  return (
    <HomeCardContainer>
      <HomeCardImg src={thumbnailUrl} />
      <HomeCardContentContainer>
        <HomeCardChannelLogo src={profileImageUrl} />
        <HomeCardContentContainer2>
          <HomeCardTitle>{title}</HomeCardTitle>
          <HomeCardChannelName>{name}</HomeCardChannelName>
          <HomeCardContentContainer3>
            <HomeCardP>{viewCount}</HomeCardP>
            <HomeCardP>{publishedAt}</HomeCardP>
          </HomeCardContentContainer3>
        </HomeCardContentContainer2>
      </HomeCardContentContainer>
    </HomeCardContainer>
  )
}

export default HomeCardComponent
