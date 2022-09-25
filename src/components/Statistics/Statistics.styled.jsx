import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 30px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 8px;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
