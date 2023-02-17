import { GlobalStyle } from './GlobalStyle';
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import { Profile } from './Profile/Profile';


export const App = () => {

  return (
    <div>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

      
      <GlobalStyle />
    </div>
  );
};
