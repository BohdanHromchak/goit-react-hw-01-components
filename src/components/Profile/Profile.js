import PropTypes from 'prop-types';
import {Card, Container, User, UserName, UserInfo, Stats, StatsLabel, StatsQuantity} from './Profile.styled'

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
          <li>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{followers}</StatsQuantity>
          </li>
          <li>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{views}</StatsQuantity>
          </li>
          <li>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{likes}</StatsQuantity>
          </li>
        </Stats>
        </Container>
      </Card>
    )
}

// додати propTypes
