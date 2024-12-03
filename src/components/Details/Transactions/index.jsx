import React, { useEffect, useState } from 'react';
import Transaction from '../Transaction';
import { getTransactions } from '../../../api';
import './Transactions.scss';

const Transactions = ({ transaction,query }) => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [status, setStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // Determine whether to use prop data or fetched data
  useEffect(() => {
    if (transaction?.length) {
      setTransactions(transaction);
      setFilteredTransactions(transaction);
      setTotalPage(1); 
      return;
    } else if(query ){
      setTransactions([]);
      return;
    }

    const fetchTransactions = async () => {
      try {
        const res = await getTransactions({});
        setTransactions(res?.data?.data);
        setFilteredTransactions(res?.data?.data);
        setCurrentPage(res?.data?.page || 1);
        setTotalPage(res?.data?.totalPages || 1);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
      fetchTransactions();
  }, [transaction,query]);

  // Filter transactions by status
  useEffect(() => {
    if (status === 'All') {
      setFilteredTransactions(transactions);
    } else {
      const filteredData = transactions.filter((item) => item.status === status);
      setFilteredTransactions(filteredData);
    }
  }, [status, transactions]);

  // Pagination handlers
  const handlePrevPageSelect = async () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      const res = await getTransactions({ page: currentPage - 1 });
      setTransactions(res?.data?.data);
    }
  };

  const handleNextPageSelect = async () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
      const res = await getTransactions({ page: currentPage + 1 });
      setTransactions(res?.data?.data);
    }
  };
  if(!transactions.length){
    return <div style={{height:'100%', display:'flex', alignItems:'center',justifyContent:'center'}}>No Data</div>
  }

  return (
    <div className="recent_transactions_container">
      <div className="recent_transactions_container_header">
        <span>Name</span>
        <span>Date</span>
        <span>Amount</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Status</span>
          <select
            id="status-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ padding: '5px', borderRadius: '4px',backgroundColor:'transparent',color:'white' }}
          >
            <option value="All" >All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="transactions_wrapper">
        {filteredTransactions?.map((item) => (
          <Transaction
            key={item.id} // Use a unique identifier
            name={item.user_id}
            img={item.user_profile}
            status={item.status}
            date={item.date}
            amount={item.amount}
            isRevenu={item.category === 'Revenue'}
          />
        ))}
      </div>
        <div className="transactions_paging">
          <button
            className="pagination_button"
            style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
            onClick={handlePrevPageSelect}
          >
            Prev
          </button>
          <span>{`${currentPage}/${totalPage}`}</span>
          <button
            className="pagination_button"
            style={{ pointerEvents: currentPage === totalPage ? 'none' : 'auto' }}
            onClick={handleNextPageSelect}
          >
            Next
          </button>
        </div>
    </div>
  );
};

export default Transactions;
