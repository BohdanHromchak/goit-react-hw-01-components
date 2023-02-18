import PropTypes from 'prop-types';
import {Container, TransactionHead, TransactionTable, TransactionBody} from './TransactionHistory.styled'
export const TransactionHistory = ({items}) => {

    return (
<Container>
<TransactionTable>
  <TransactionHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TransactionHead>

  <TransactionBody>
    {items.map(({id, type, amount,currency}) => {
        return(
 <tr key={id}>
 <td>{type}</td>
 <td>{amount}</td>
 <td>{currency}</td>
</tr>)
    })}
   
  </TransactionBody>
</TransactionTable>
</Container>
    )
}