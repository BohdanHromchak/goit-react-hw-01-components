import PropTypes from 'prop-types';
import { AiTwotoneCheckCircle } from 'react-icons/ai';

export const FriendList = ({friends}) => {

    return (
        <ul>
{friends.map(({id, avatar, name}) => {
    return (
        <li key={id}>
  <span><AiTwotoneCheckCircle /></span>
  <img src={avatar} alt={name} />
  <p>{name}</p>
</li>
    )
})}
        </ul>
    )
}