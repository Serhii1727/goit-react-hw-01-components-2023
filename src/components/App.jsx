import Profile from './Profile';
import Statistics from './Statistics';
import user from '../services/user';
import data from '../services/data';
import { Fragment } from 'react';

console.log(data);

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
    </Fragment>
  );
};
