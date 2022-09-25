import PropTypes from 'prop-types';

import { TransactionItem, Td } from './Transaction.styled';

export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <TransactionItem key={id}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </TransactionItem>
  );
};

Transaction.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};
