import { useState } from 'react';
import { getTransactions } from '../../api';
import SearchBar from '../SeachBar/SearchBar';
import BriefSummary from './BriefSummary/BriefSummary';
import './Details.scss';
import GraphicalRepresentation from './GraphicalRepresentation';
import RecentTransactions from './RecentTransactions';
import Transactions from './Transactions';
import DateRangePickerComponent from '../DateRangePicker/DateRangePicker';

const Details = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
          const res = await getTransactions({searchTerm: query});
          setSearchResults(res?.data?.data);
        } catch (error) {
          console.log(error);
        }
    };
  return (
    <div className='detail_container'>
        <BriefSummary />
        <div className='detail_center_container'>
            <GraphicalRepresentation />
            <RecentTransactions />
        </div>
        <div className="transactions_container">
            <div className="transactions_container_header">
                <span>Transactions</span>
                <div className="transactions_container_selections">
                    <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
                    <DateRangePickerComponent setSearchResults={setSearchResults} />
                </div>
            </div>
            <Transactions transaction = {searchResults} query={query} />
        </div>
    </div>
  )
}

export default Details