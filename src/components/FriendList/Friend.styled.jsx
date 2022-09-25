import styled from 'styled-components';

function isOnline({ isOnline }) {
  return isOnline ? '#00ff33' : '#ff0000';
}

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  min-width: 200px;
  margin: 0 auto;
  gap: 8px;
  padding: 10px;

  border-radius: 24px;
  background: #e0e0e0;
  box-shadow: 5px 5px 28px #525252, -5px -5px 28px #c2c2c2;
`;
export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background: ${isOnline};
  box-shadow: 3px 2px 2px #242424, -2px -2px 5px #ffffff;
`;
export const Avatar = styled.img`
  padding: 8px;
  background-color: gold;

  border-radius: 17px;

  background: linear-gradient(145deg, #b17f7f, #5d4343);
  box-shadow: 20px 20px 60px #878787, -20px -20px 60px #ffffff;
`;
export const Name = styled.p`
  margin-left: 15px;
  font-weight: 700;
  font-size: 20px;
`;
