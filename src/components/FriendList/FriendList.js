import PropTypes from 'prop-types';
import {FriendListItem} from '../FriendListItem/FriendListItem'
import {Container, List, ListItem } from './FriendList.styled'


export const FriendList = ({friends}) => {

    return (
        <Container>
        <List>
{friends.map(friend => { 

    <ListItem key={friend.id}>      
        <FriendListItem friend={friend}/>
    </ListItem>
})}
        </List>
        </Container>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
).isRequired
  };


//   import PropTypes from 'prop-types';
// import { AiTwotoneCheckCircle } from 'react-icons/ai';
// import {Container, List, ListItem, Status, Name, } from './FriendList.styled'

// export const FriendList = ({friends}) => {

//     return (
//         <Container>
//         <List>
// {friends.map(({id, avatar, name, isOnline}) => {
//     return (
//         <ListItem key={id}>
//   <Status isOnline={isOnline}><AiTwotoneCheckCircle /></Status>
//   <img src={avatar} alt={name} />
//   <Name>{name}</Name>
// </ListItem>
//     )
// })}
//         </List>
//         </Container>
//     )
// }

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(
//     PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         avatar: PropTypes.string.isRequired, 
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,

//     })
// ).isRequired
//   };