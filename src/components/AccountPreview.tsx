import { useState } from 'react'
import dayjs from 'dayjs'

import { TAccount, currency } from '../assets/data'
import { Link } from 'react-router-dom'

import downArrow from '../assets/down.svg'

import './AccountPreview.css'

type AccountProps = {
  account: TAccount
}

const AccountPreview = ({ account }: AccountProps) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  return (
    <section className='account-preview'>
      <h4>{account.name}</h4>
      <h5>Account # {account.accountNumber}</h5>
      <img
        onClick={() => setIsAccountOpen((prev) => !prev)}
        className={'carrot' + (isAccountOpen ? ' flipped' : '')}
        src={downArrow}
        alt='Show recent transactions'
      />

      {isAccountOpen && (
        <div>
          <div className='grid-row'>
            <strong className='row-item'>Date</strong>
            <strong className='row-item'>Type</strong>
            <strong className='row-item'>Requester</strong>
            <strong className='row-item'>Amount</strong>
          </div>
          {account.transactions.map((entry, index) => {
            if (index < 5) {
              return (
                <div className='grid-row' key={index}>
                  <p className='row-item'>{dayjs(entry.date).format('MMM D, YYYY')}</p>
                  <p className='row-item'>{entry.type}</p>
                  <p className='row-item'>{entry.to || entry.from}</p>
                  <p className='row-item'>{currency.format(entry.amount)}</p>
                </div>
              )
            }
          })}
        </div>
      )}
      <div className='balance-pair'>
        <h5>Balance: {currency.format(account.balance)}</h5>
        <Link to={account.type}>
          <button className='btn'>See All Transactions</button>
        </Link>
      </div>
    </section>
  )
}

export default AccountPreview
