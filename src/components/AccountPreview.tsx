import { useState } from 'react'

import { TAccount, currency } from '../assets/data'
import { Link } from 'react-router-dom'

import './AccountPreview.css'

type AccountProps = {
  account: TAccount
}

const AccountPreview = ({ account }: AccountProps) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  const entries = account.transactions.map((entry, index) => {
    if (index < 5) {
      return (
        <div className='grid-row' key={index}>
          <p className='row-item'>{entry.date}</p>
          <p className='row-item'>{entry.type}</p>
          <p className='row-item'>{entry.to || entry.from}</p>
          <p className='row-item'>{currency.format(entry.amount)}</p>
        </div>
      )
    }
  })
  return (
    <section className='account-preview'>
      <h4>{account.name}</h4>
      <h5>Account # {account.accountNumber}</h5>
      <p onClick={() => setIsAccountOpen((prev) => !prev)} className='carrot'>
        {isAccountOpen ? 'Hide' : 'Show'} Recent Transactions
      </p>
      {isAccountOpen && (
        <div>
          <div className='grid-row'>
            <p className='row-item'>Date</p>
            <p className='row-item'>Type</p>
            <p className='row-item'>Requester</p>
            <p className='row-item'>Amount</p>
          </div>
          {entries}
        </div>
      )}
      <div className='balance-pair'>
        <h5>Balance: {currency.format(account.balance)}</h5>
        <Link to={account.type}>
          <button>See All Transactions</button>
        </Link>
      </div>
    </section>
  )
}

export default AccountPreview
