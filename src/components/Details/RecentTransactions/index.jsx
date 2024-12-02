import { useEffect, useState } from 'react';
import './RecentTransaction.scss';
import axios from 'axios';
import { API_URL, RECENT_TRANSACTIONS } from '../../../api/constants';

const RecentTransactions = () => {
  const [recentData, setRecentData] = useState([]);
  useEffect(() => {
    const fetchRecentTransactions = async () => {
      try { 
        const res = await axios.get(`${API_URL}${RECENT_TRANSACTIONS}`);
        setRecentData(res?.data?.data);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecentTransactions();
  },[]);
  return (
    <div className='recent_transaction_container'>
      <div className="recent_transaction_container_header">
        <span>Recent Transactions</span>
        <button>See all</button>
      </div>
      {recentData?.map((item) =>
      <>
      <div className="recent_transaction_container_detail">
          <div className="recent_transaction_container_detail_left">
                <img src={item?.user_profile} alt="" />
                <div className="recent_transaction_container_detail_left_user_detail">
                  <span>Transfers from</span>
                  <p>{item?.user_id}</p>
                </div>
          </div>
          <div className="recent_transaction_container_detail_right">
            <span style={{color: item?.category === "Revenue" ?'#1FCB4F' : '#FFC01E' }}>{`${item?.category === "Revenue" ? '+' : '-'}$${item?.amount}`}</span>
          </div>
      </div></>)}
    </div>
  )
}

export default RecentTransactions