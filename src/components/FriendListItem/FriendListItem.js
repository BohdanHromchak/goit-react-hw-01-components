import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from 'react-icons/ai';
import {Status, Name, Avatar} from './FriendListItem.styled'

export const FriendListItem = ({friend:{avatar, name, isOnline}}) => {
  
    return(
        <>
  <Status isOnline={isOnline}>
    <AiTwotoneCheckCircle />
    </Status>
   <Avatar src={avatar} alt={name} />
  <Name>{name}</Name>
        </>
    )
}


FriendListItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  };