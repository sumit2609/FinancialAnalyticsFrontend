import SummaryComponent from './SummaryComponent';
import './BriefSummary.scss';
import BalanceIcon from  '../../../assets/balance_icon.svg';
import RevenueIcon from  '../../../assets/revenue_icon.svg';
import ExpenseIcon from  '../../../assets/expense.svg';
import SavingsIcon from  '../../../assets/dollar_icon.svg';


const BriefSummary = () => {
  return (
    <div className='brief_summary_container'>
        <div className="brief_summary_container_header_wrapper">
        <SummaryComponent summaryTitle={"Balance"} icon={BalanceIcon}  />
        <SummaryComponent summaryTitle={"Revenue"} icon={RevenueIcon} />
        <SummaryComponent summaryTitle={"Expense"} icon={ExpenseIcon} />
        <SummaryComponent summaryTitle={"Saving"} icon={SavingsIcon} />

        </div>
    </div>
  )
}

export default BriefSummary