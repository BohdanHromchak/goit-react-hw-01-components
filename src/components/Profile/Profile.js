import PropTypes from 'prop-types';
import {Card, Container, User, UserName, UserInfo, Stats, StatsItem, StatsLabel, StatsQuantity} from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {

    return (
        <Card>
          <Container>
        <User>
          <img
            src={avatar}
            alt={username}
          />
          <UserName>{username}</UserName>
          <UserInfo>{tag}</UserInfo>
          <UserInfo>{location}</UserInfo>
        </User>
      
        <Stats>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{likes}</StatsQuantity>
          </StatsItem>
        </Stats>
        </Container>
      </Card>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

