export type TAccount = {
  name: string
  accountNumber: string
  balance: number
  transactions: TTransations[]
}

export type TTransations = {
  date: string
  type: string
  to?: string
  from?: string
  amount: number
}

export type TUser = {
  firstName: string
  lastName: string
  memberSince: string
  notificationCount: number
}

export const user: TUser = {
  firstName: 'Billy',
  lastName: 'Banks',
  memberSince: '1/1/2020',
  notificationCount: 1
}

export const checkingAccount: TAccount = {
  name: 'Free Checking',
  accountNumber: '1378 1280 4180 0',
  balance: 10847,
  transactions: [
    { date: '9/26/2022', type: 'Purchase', to: 'Express', amount: 79.98 },
    { date: '9/24/2022', type: 'Transfer', to: 'Savings', amount: 1000 },
    { date: '9/21/2022', type: 'Deposit', to: 'Venmo', amount: 540 },
    { date: '9/19/2022', type: 'Purchase', to: 'Target', amount: 139.42 },
    { date: '9/15/2022', type: 'Purchase', to: 'Marzycks Grocery', amount: 143.79 }
  ]
}

export const savingsAccount: TAccount = {
  name: 'Savings Account',
  accountNumber: '1378 1280 4180 1',
  balance: 20541,
  transactions: [
    { date: '9/9/2022', type: 'Transfer', from: 'Checking', amount: 1000 },
    { date: '9/3/2022', type: 'Transfer', from: 'Checking', amount: 543 },
    { date: '8/21/2022', type: 'Deposit', from: 'Direct Deposit', amount: 1983.53 },
    { date: '7/26/2022', type: 'Deposit', from: 'Direct Deposit', amount: 1793.79 },
    { date: '6/26/2022', type: 'Transfer', from: 'Checking', amount: 697 }
  ]
}
