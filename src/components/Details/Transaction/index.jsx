import './Transaction.scss';

const Transaction = ({ name, img, date, amount, isRevenu, status }) => {


    const DateFormatter = ({ isoDate }) => {
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            // Use Intl.DateTimeFormat for full control
            const formattedDate = new Intl.DateTimeFormat('en-GB', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
            }).format(date);

            return formattedDate;
        };

        return formatDate(isoDate);
    };
    return (
        <div className='transaction_container'>
            <div className="transaction_profile_wrapper">
                <img src={img} alt="" />
                <span>{name}</span>
            </div>
            <span><DateFormatter isoDate={date} /></span>
            <span className='amount' style={{ color: isRevenu ? '#1FCB4F' : '#FFC01E' }}>{`${isRevenu ? '+' : '-'}$${amount}`}</span>
            <div className='status' style={{ padding: '0.2rem', backgroundColor: status === "Paid" ? '#1FCB4F4D' : '#FFC01E4D', borderRadius: '10px', minWidth: '5rem', color: status === 'Pending' ? '#FFC01E' : '#1FCB4F', textAlign: 'center' }}>{status}</div>
        </div>
    )
}

export default Transaction;