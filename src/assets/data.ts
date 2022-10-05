export type TAccount = {
  name: string
  type: string
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
  notifications: TNotification[]
  settings: {
    isCheckingShown: boolean
    isSavingsShown: boolean
  }
}

export type TNotification = {
  id: number
  title: string
  body: string
  isRead: boolean
}

export const user: TUser = {
  firstName: 'Billy',
  lastName: 'Banks',
  memberSince: '1/1/2020',
  notifications: [
    {
      id: 1,
      title: 'Welcome to React Credit Union',
      body: "Thank you for joining us! We're so happy that you've chosen to join our Credit Union!",
      isRead: false
    }
  ],
  settings: {
    isCheckingShown: true,
    isSavingsShown: true
  }
}

export const checkingAccount: TAccount = {
  name: 'Free Checking',
  type: 'checking',
  accountNumber: '1378 1280 4180 0',
  balance: 10847,
  transactions: [
    { date: '9/26/2022', type: 'Purchase', to: 'Express', amount: -79.98 },
    { date: '9/24/2022', type: 'Transfer', to: 'Savings', amount: -1000 },
    { date: '9/21/2022', type: 'Deposit', to: 'Venmo', amount: 540 },
    { date: '9/19/2022', type: 'Purchase', to: 'Target', amount: -139.42 },
    { date: '9/15/2022', type: 'Purchase', to: 'Marzycks Grocery', amount: -143.79 },
    { date: '9/14/2022', type: 'Purchase', to: 'Express', amount: -79.98 },
    { date: '9/9/2022', type: 'Transfer', to: 'Savings', amount: -1000 },
    { date: '9/8/2022', type: 'Deposit', to: 'Venmo', amount: 540 },
    { date: '9/7/2022', type: 'Purchase', to: 'Target', amount: -139.42 },
    { date: '9/6/2022', type: 'Purchase', to: 'Marzycks Grocery', amount: -143.79 }
  ]
}

export const savingsAccount: TAccount = {
  name: 'Savings Account',
  type: 'savings',
  accountNumber: '1378 1280 4180 1',
  balance: 20541,
  transactions: [
    { date: '9/9/2022', type: 'Transfer', from: 'from Checking', amount: 1000 },
    { date: '9/3/2022', type: 'Transfer', from: 'to Checking', amount: -543 },
    { date: '8/21/2022', type: 'Deposit', from: 'Direct Deposit', amount: 1983.53 },
    { date: '7/26/2022', type: 'Deposit', from: 'Direct Deposit', amount: 1793.79 },
    { date: '6/26/2022', type: 'Transfer', from: 'to Checking', amount: -697 },
    { date: '9/9/2022', type: 'Transfer', from: 'from Checking', amount: 1000 },
    { date: '9/3/2022', type: 'Transfer', from: 'to Checking', amount: -543 },
    { date: '8/21/2022', type: 'Deposit', from: 'Direct Deposit', amount: 1983.53 },
    { date: '7/26/2022', type: 'Deposit', from: 'Direct Deposit', amount: 1793.79 },
    { date: '6/26/2022', type: 'Transfer', from: 'to Checking', amount: -697 }
  ]
}

export const currency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD'
})
