import PropTypes from 'prop-types';

import { FriendItem, Status, Avatar, Name } from './Friend.styled';

export const Friend = ({ id, name, avatar, isOnline }) => {
  return (
    <FriendItem key={id} className="item">
      <Status isOnline={isOnline}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </FriendItem>
  );
};

Friend.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
