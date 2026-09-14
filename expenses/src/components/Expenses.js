import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

const Expenses = (props) => {
  
  return (
    <Card className='expenses'>
      {props.data.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;