import { Fragment } from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../services/user';
import data from '../services/data';
import friends from '../services/friends';
import transactions from '../services/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={transactions} />
    </>
  );
};
