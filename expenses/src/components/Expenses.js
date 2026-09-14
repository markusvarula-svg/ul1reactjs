import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className='expenses'>
      {props.data.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  );
};

export default Expenses;