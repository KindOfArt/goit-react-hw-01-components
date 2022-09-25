import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  text-align: center;
  background-color: rgba(98, 190, 213, 255);
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: bold;
`;

export const Tag = styled.p`
  opacity: 0.6;
`;

export const Location = styled.p`
  opacity: 0.6;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  background-color: rgba(161, 224, 231, 255);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 calc((100% - 6px) / 3);
  border: 1px solid lightblue;
  padding: 20px 0;
`;

export const Label = styled.span`
  opacity: 0.6;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-size: 26px;
  font-weight: bold;
`;
