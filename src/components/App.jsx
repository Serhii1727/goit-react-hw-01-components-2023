import { Fragment } from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import user from '../services/user';
import data from '../services/data';
import friends from '../services/friends';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
    </Fragment>
  );
};
