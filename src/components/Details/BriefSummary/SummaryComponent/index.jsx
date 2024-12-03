import { useEffect, useState } from 'react';
import './SummaryComponent.scss';
import axios from "axios";
import { API_URL, GET_TOTAL_REVENUE } from '../../../../api/constants';

const SummaryComponent = ({summaryTitle,icon}) => {
    const [revenue,setRevenue] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${API_URL}${GET_TOTAL_REVENUE}?type=${summaryTitle}`); 
            setRevenue(response?.data?.data?.totalExpense);
          } catch (err) {
            console.log(err);
          } finally {
            
          }
        };
    
        fetchData(); 
      }, [summaryTitle]);
  return (
    <div className='summary_container'>
        <div className='span_container_icon'>
            <img src={icon} alt={summaryTitle} />
        </div>
        <div className="span_container_data">
            <p >{summaryTitle}</p>
            <span>{revenue ||`$41,210`}</span>
        </div>
    </div>
  )
}

export default SummaryComponent