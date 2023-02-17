import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {

    return (
        <ul>
{friends.map(friend => {
    return (
        <li key={friend.id}>
  <span></span>
  <img src={friend.avatar} alt={friend.name} />
  <p>{friend.name}</p>
</li>
    )
})}

        </ul>
    )
}