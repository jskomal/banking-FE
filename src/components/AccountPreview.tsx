import { useState } from 'react'
import dayjs from 'dayjs'

import { TAccount, currency } from '../assets/data'
import { Link } from 'react-router-dom'

import downArrow from '../assets/down.svg'

import {
  AccountPreviewView,
  BalancePair,
  Btn,
  Carrot,
  GridItem,
  GridRow
} from './styledComponents'

type AccountProps = {
  account: TAccount
}

const AccountPreview = ({ account }: AccountProps) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  return (
    <AccountPreviewView>
      <h4>{account.name}</h4>
      <h5>Account # {account.accountNumber}</h5>
      <Carrot
        onClick={() => setIsAccountOpen((prev) => !prev)}
        className={isAccountOpen ? ' flipped' : ''}
        src={downArrow}
        alt='Show recent transactions'
      />

      {isAccountOpen && (
        <>
          <GridRow>
            <GridItem>Date</GridItem>
            <GridItem>Type</GridItem>
            <GridItem>Requester</GridItem>
            <GridItem>Amount</GridItem>
          </GridRow>
          {account.transactions.map((entry, index) => {
            if (index < 5) {
              return (
                <GridRow key={index}>
                  <GridItem>{dayjs(entry.date).format('MMM D, YYYY')}</GridItem>
                  <GridItem>{entry.type}</GridItem>
                  <GridItem>{entry.to || entry.from}</GridItem>
                  <GridItem>{currency.format(entry.amount)}</GridItem>
                </GridRow>
              )
            }
          })}
        </>
      )}
      <BalancePair>
        <h5>Balance: {currency.format(account.balance)}</h5>
        <Link to={account.type}>
          <Btn>See All Transactions</Btn>
        </Link>
      </BalancePair>
    </AccountPreviewView>
  )
}

export default AccountPreview
