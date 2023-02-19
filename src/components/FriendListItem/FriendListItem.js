import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from 'react-icons/ai';
import {Status, Name} from './FriendListItem.styled'

export const FriendListItem = ({name, avatar, isOnline}) => {
    console.log()
    return(
        <>
  <Status isOnline={isOnline}>
    <AiTwotoneCheckCircle />
    </Status>
   <img src={avatar} alt={name} />
  <Name>{name}</Name>
        </>
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };