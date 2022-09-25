import PropTypes from 'prop-types';

import { Friend } from './Friend';
import { Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return <Friends>{friends.map(Friend)}</Friends>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
