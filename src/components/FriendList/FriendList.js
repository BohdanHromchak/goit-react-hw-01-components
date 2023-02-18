import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from 'react-icons/ai';
import {Container, List, ListItem, Status, Name, } from './FriendList.styled'

export const FriendList = ({friends}) => {

    return (
        <Container>
        <List>
{friends.map(({id, avatar, name, isOnline}) => {
    return (
        <ListItem key={id}>
  <Status isOnline={isOnline}><AiTwotoneCheckCircle /></Status>
  <img src={avatar} alt={name} />
  <Name>{name}</Name>
</ListItem>
    )
})}
        </List>
        </Container>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,

    })
).isRequired
  };